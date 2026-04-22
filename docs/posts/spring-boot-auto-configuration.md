---
date: 2026-04-22
category:
  - Spring Boot
  - Java
  - 源码分析
tag:
  - Spring Boot
  - 自动配置
  - 源码分析
  - Java
  - 后端
---

# Spring Boot 自动配置原理分析（源码视角）

## 引言

Spring Boot 最核心的特性之一就是**自动配置**（Auto-configuration），它让开发者无需手动编写大量的配置代码，就能快速搭建一个完整的 Spring 应用。本文将从源码角度深入分析 Spring Boot 自动配置的实现原理。

## 自动配置的核心概念

### 什么是自动配置？

自动配置是 Spring Boot 基于应用的依赖和环境，自动为应用配置必要的 Bean 和组件的过程。它遵循"约定大于配置"的原则，在适当的条件下自动生效。

### 核心组件

1. **@EnableAutoConfiguration**：启用自动配置功能
2. **SpringFactoriesLoader**：加载自动配置类
3. **Condition**：条件判断，决定配置是否生效
4. **AutoConfigurationImportSelector**：导入自动配置类

## 自动配置的启动流程

### 1. 启动类注解分析

```java
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

`@SpringBootApplication` 是一个组合注解，包含了三个核心注解：

- `@SpringBootConfiguration`：标记配置类
- `@ComponentScan`：扫描组件
- `@EnableAutoConfiguration`：启用自动配置

### 2. @EnableAutoConfiguration 注解

`@EnableAutoConfiguration` 是自动配置的核心开关，其定义如下：

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@AutoConfigurationPackage
@Import(AutoConfigurationImportSelector.class)
public @interface EnableAutoConfiguration {
    String ENABLED_OVERRIDE_PROPERTY = "spring.boot.enableautoconfiguration";
    Class<?>[] exclude() default {};
    String[] excludeName() default {};
}
```

关键是 `@Import(AutoConfigurationImportSelector.class)`，它导入了 `AutoConfigurationImportSelector` 类，这个类负责导入自动配置类。

## 自动配置的实现机制

### 1. AutoConfigurationImportSelector 分析

`AutoConfigurationImportSelector` 实现了 `DeferredImportSelector` 接口，其核心方法是 `selectImports()`：

```java
@Override
public String[] selectImports(AnnotationMetadata annotationMetadata) {
    if (!isEnabled(annotationMetadata)) {
        return NO_IMPORTS;
    }
    // 加载自动配置元数据
    AutoConfigurationEntry autoConfigurationEntry = getAutoConfigurationEntry(annotationMetadata);
    return StringUtils.toStringArray(autoConfigurationEntry.getConfigurations());
}
```

### 2. 加载自动配置类

`getAutoConfigurationEntry()` 方法负责获取自动配置项：

```java
protected AutoConfigurationEntry getAutoConfigurationEntry(AnnotationMetadata annotationMetadata) {
    if (!isEnabled(annotationMetadata)) {
        return EMPTY_ENTRY;
    }
    // 获取注解属性
    AnnotationAttributes attributes = getAttributes(annotationMetadata);
    // 从 META-INF/spring.factories 加载候选配置
    List<String> configurations = getCandidateConfigurations(annotationMetadata, attributes);
    // 去重
    configurations = removeDuplicates(configurations);
    // 排除指定的配置
    Set<String> exclusions = getExclusions(annotationMetadata, attributes);
    checkExcludedClasses(configurations, exclusions);
    configurations.removeAll(exclusions);
    // 过滤符合条件的配置
    configurations = getConfigurationClassFilter().filter(configurations);
    // 触发自动配置导入事件
    fireAutoConfigurationImportEvents(configurations, exclusions);
    return new AutoConfigurationEntry(configurations, exclusions);
}
```

### 3. SpringFactoriesLoader 加载机制

`getCandidateConfigurations()` 方法使用 `SpringFactoriesLoader` 加载自动配置类：

```java
protected List<String> getCandidateConfigurations(AnnotationMetadata metadata, AnnotationAttributes attributes) {
    List<String> configurations = SpringFactoriesLoader.loadFactoryNames(
            getSpringFactoriesLoaderFactoryClass(), getBeanClassLoader());
    Assert.notEmpty(configurations, "No auto configuration classes found in META-INF/spring.factories. "
            + "If you are using a custom packaging, make sure that file is correct.");
    return configurations;
}

protected Class<?> getSpringFactoriesLoaderFactoryClass() {
    return EnableAutoConfiguration.class;
}
```

`SpringFactoriesLoader` 从 `META-INF/spring.factories` 文件中加载配置：

```java
public static List<String> loadFactoryNames(Class<?> factoryType, @Nullable ClassLoader classLoader) {
    String factoryTypeName = factoryType.getName();
    return loadSpringFactories(classLoader).getOrDefault(factoryTypeName, Collections.emptyList());
}

private static Map<String, List<String>> loadSpringFactories(@Nullable ClassLoader classLoader) {
    // 从缓存中获取
    MultiValueMap<String, String> result = cache.get(classLoader);
    if (result != null) {
        return result;
    }

    try {
        // 加载 META-INF/spring.factories 文件
        Enumeration<URL> urls = (classLoader != null ?
                classLoader.getResources(FACTORIES_RESOURCE_LOCATION) :
                ClassLoader.getSystemResources(FACTORIES_RESOURCE_LOCATION));
        result = new LinkedMultiValueMap<>();
        while (urls.hasMoreElements()) {
            URL url = urls.nextElement();
            UrlResource resource = new UrlResource(url);
            Properties properties = PropertiesLoaderUtils.loadProperties(resource);
            for (Map.Entry<?, ?> entry : properties.entrySet()) {
                String factoryTypeName = ((String) entry.getKey()).trim();
                for (String factoryImplementationName : StringUtils.commaDelimitedListToStringArray((String) entry.getValue())) {
                    result.add(factoryTypeName, factoryImplementationName.trim());
                }
            }
        }
        cache.put(classLoader, result);
        return result;
    }
    catch (IOException ex) {
        throw new IllegalArgumentException("Unable to load factories from location [" +
                FACTORIES_RESOURCE_LOCATION + "]", ex);
    }
}
```

## 条件注解机制

自动配置类使用条件注解来决定是否生效，主要的条件注解包括：

### 1. @Conditional 系列注解

| 注解 | 作用 |
|------|------|
| `@ConditionalOnClass` | 当类路径存在指定类时生效 |
| `@ConditionalOnMissingClass` | 当类路径不存在指定类时生效 |
| `@ConditionalOnBean` | 当容器中存在指定 Bean 时生效 |
| `@ConditionalOnMissingBean` | 当容器中不存在指定 Bean 时生效 |
| `@ConditionalOnProperty` | 当配置属性满足条件时生效 |
| `@ConditionalOnResource` | 当存在指定资源时生效 |
| `@ConditionalOnWebApplication` | 当是 Web 应用时生效 |
| `@ConditionalOnNotWebApplication` | 当不是 Web 应用时生效 |
| `@ConditionalOnExpression` | 当 SpEL 表达式为 true 时生效 |

### 2. 条件判断原理

以 `@ConditionalOnClass` 为例，其实现原理：

```java
@Target({ ElementType.TYPE, ElementType.METHOD })
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Conditional(OnClassCondition.class)
public @interface ConditionalOnClass {
    Class<?>[] value() default {};
    String[] name() default {};
}
```

`OnClassCondition` 实现了 `Condition` 接口，在 `matches()` 方法中检查类是否存在：

```java
@Override
public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
    // 检查类是否存在
    return checkClasses(context.getClassLoader(), getClasses(metadata));
}

private boolean checkClasses(ClassLoader classLoader, List<String> classes) {
    for (String className : classes) {
        if (!ClassUtils.isPresent(className, classLoader)) {
            return false;
        }
    }
    return true;
}
```

## 自动配置类的结构

一个典型的自动配置类结构如下：

```java
@Configuration
@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
@ConditionalOnClass({ Servlet.class, DispatcherServlet.class, WebMvcConfigurer.class })
@ConditionalOnMissingBean(WebMvcConfigurationSupport.class)
@AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE + 10)
@AutoConfigureAfter({ DispatcherServletAutoConfiguration.class, TaskExecutionAutoConfiguration.class, ValidationAutoConfiguration.class })
public class WebMvcAutoConfiguration {
    
    @Bean
    @ConditionalOnMissingBean(HiddenHttpMethodFilter.class)
    public OrderedHiddenHttpMethodFilter hiddenHttpMethodFilter() {
        return new OrderedHiddenHttpMethodFilter();
    }
    
    @Bean
    @ConditionalOnMissingBean(FormContentFilter.class)
    @ConditionalOnProperty(prefix = "spring.mvc.formcontent.filter", name = "enabled", matchIfMissing = true)
    public OrderedFormContentFilter formContentFilter() {
        return new OrderedFormContentFilter();
    }
    
    // 其他配置...
}
```

## 关键源码分析

### 1. SpringApplication.run() 流程

```java
public ConfigurableApplicationContext run(String... args) {
    StopWatch stopWatch = new StopWatch();
    stopWatch.start();
    ConfigurableApplicationContext context = null;
    Collection<SpringBootExceptionReporter> exceptionReporters = new ArrayList<>();
    configureHeadlessProperty();
    // 1. 获取 SpringApplicationRunListeners
    SpringApplicationRunListeners listeners = getRunListeners(args);
    listeners.starting();
    try {
        // 2. 准备环境
        ApplicationArguments applicationArguments = new DefaultApplicationArguments(args);
        ConfigurableEnvironment environment = prepareEnvironment(listeners, applicationArguments);
        configureIgnoreBeanInfo(environment);
        // 3. 打印 Banner
        Banner printedBanner = printBanner(environment);
        // 4. 创建 ApplicationContext
        context = createApplicationContext();
        exceptionReporters = getSpringFactoriesInstances(SpringBootExceptionReporter.class,
                new Class[] { ConfigurableApplicationContext.class }, context);
        // 5. 准备 ApplicationContext
        prepareContext(context, environment, listeners, applicationArguments, printedBanner);
        // 6. 刷新 ApplicationContext
        refreshContext(context);
        // 7. 刷新后的处理
        afterRefresh(context, applicationArguments);
        stopWatch.stop();
        if (this.logStartupInfo) {
            new StartupInfoLogger(this.mainApplicationClass).logStarted(getApplicationLog(), stopWatch);
        }
        listeners.started(context);
        callRunners(context, applicationArguments);
    }
    catch (Throwable ex) {
        handleRunFailure(context, ex, exceptionReporters, listeners);
        throw new IllegalStateException(ex);
    }

    try {
        listeners.running(context);
    }
    catch (Throwable ex) {
        handleRunFailure(context, ex, exceptionReporters, null);
        throw new IllegalStateException(ex);
    }
    return context;
}
```

### 2. 自动配置的加载时机

自动配置在 `prepareContext()` 方法中通过 `load()` 方法加载：

```java
private void prepareContext(ConfigurableApplicationContext context, ConfigurableEnvironment environment,
        SpringApplicationRunListeners listeners, ApplicationArguments applicationArguments, Banner printedBanner) {
    context.setEnvironment(environment);
    postProcessApplicationContext(context);
    applyInitializers(context);
    listeners.contextPrepared(context);
    if (this.logStartupInfo) {
        logStartupInfo(context.getParent() == null);
        logStartupProfileInfo(context);
    }
    // Add boot specific singleton beans
    ConfigurableListableBeanFactory beanFactory = context.getBeanFactory();
    beanFactory.registerSingleton("springApplicationArguments", applicationArguments);
    if (printedBanner != null) {
        beanFactory.registerSingleton("springBootBanner", printedBanner);
    }
    if (beanFactory instanceof DefaultListableBeanFactory) {
        ((DefaultListableBeanFactory) beanFactory).setAllowBeanDefinitionOverriding(this.allowBeanDefinitionOverriding);
    }
    if (this.lazyInitialization) {
        context.addBeanFactoryPostProcessor(new LazyInitializationBeanFactoryPostProcessor());
    }
    // Load the sources
    Set<Object> sources = getAllSources();
    Assert.notEmpty(sources, "Sources must not be empty");
    // 加载配置类，包括自动配置
    load(context, sources.toArray(new Object[0]));
    listeners.contextLoaded(context);
}
```

### 3. 配置类的处理

配置类的处理由 `ConfigurationClassPostProcessor` 完成，它实现了 `BeanDefinitionRegistryPostProcessor` 接口，在 Spring 容器启动时处理配置类：

```java
@Override
public void postProcessBeanDefinitionRegistry(BeanDefinitionRegistry registry) {
    int registryId = System.identityHashCode(registry);
    if (this.registriesPostProcessed.contains(registryId)) {
        throw new IllegalStateException(
                "postProcessBeanDefinitionRegistry already called on this post-processor against " + registry);
    }
    if (this.factoriesPostProcessed.contains(registryId)) {
        throw new IllegalStateException(
                "postProcessBeanFactory already called on this post-processor against " + registry);
    }
    this.registriesPostProcessed.add(registryId);

    processConfigBeanDefinitions(registry);
}
```

## 自动配置的执行顺序

### 1. @AutoConfigureOrder 注解

`@AutoConfigureOrder` 注解用于指定自动配置的执行顺序，值越小优先级越高：

```java
@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface AutoConfigureOrder {
    int value() default Ordered.LOWEST_PRECEDENCE;
}
```

### 2. @AutoConfigureAfter 和 @AutoConfigureBefore

这两个注解用于指定自动配置的依赖关系：

```java
@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface AutoConfigureAfter {
    Class<?>[] value() default {};
    String[] name() default {};
}

@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface AutoConfigureBefore {
    Class<?>[] value() default {};
    String[] name() default {};
}
```

## 自定义自动配置

### 1. 创建自动配置类

```java
@Configuration
@ConditionalOnClass(MyService.class)
@ConditionalOnProperty(prefix = "my.service", name = "enabled", matchIfMissing = true)
public class MyAutoConfiguration {
    
    @Bean
    @ConditionalOnMissingBean
    public MyService myService() {
        return new MyService();
    }
    
    @Bean
    public MyController myController(MyService myService) {
        return new MyController(myService);
    }
}
```

### 2. 注册自动配置

在 `src/main/resources/META-INF/spring.factories` 文件中注册：

```properties
org.springframework.boot.autoconfigure.EnableAutoConfiguration=
  com.example.autoconfigure.MyAutoConfiguration
```

## 自动配置的调试

### 1. 开启调试日志

```properties
# 开启自动配置调试
debug=true
```

### 2. 查看自动配置报告

启动应用时，控制台会输出自动配置报告，显示哪些配置生效，哪些未生效：

```
============================
CONDITIONS EVALUATION REPORT
============================

Positive matches:
-----------------

   DispatcherServletAutoConfiguration matched:
      - @ConditionalOnClass found required class 'org.springframework.web.servlet.DispatcherServlet'; @ConditionalOnMissingClass did not find unwanted class
      - @ConditionalOnWebApplication (required) found 'session' scope

   EmbeddedTomcatAutoConfiguration matched:
      - @ConditionalOnClass found required classes 'javax.servlet.Servlet', 'org.apache.catalina.startup.Tomcat'; @ConditionalOnMissingClass did not find unwanted class
      - @ConditionalOnWebApplication (required) found 'session' scope
      - @ConditionalOnMissingBean (names: embeddedServletContainer; SearchStrategy: all) did not find any beans

Negative matches:
-----------------

   ActiveMQAutoConfiguration: 
      Did not match: 
         - @ConditionalOnClass did not find required classes 'javax.jms.ConnectionFactory', 'org.apache.activemq.ActiveMQConnectionFactory'

   AopAutoConfiguration: 
      Did not match: 
         - @ConditionalOnClass did not find required classes 'org.aspectj.lang.annotation.Aspect', 'org.aspectj.lang.reflect.Advice'
```

## 源码中的关键类

| 类名 | 作用 | 位置 |
|------|------|------|
| `EnableAutoConfiguration` | 启用自动配置 | `org.springframework.boot.autoconfigure` |
| `AutoConfigurationImportSelector` | 导入自动配置类 | `org.springframework.boot.autoconfigure` |
| `SpringFactoriesLoader` | 加载工厂类 | `org.springframework.core.io.support` |
| `Condition` | 条件接口 | `org.springframework.context.annotation` |
| `OnClassCondition` | 类存在条件 | `org.springframework.boot.autoconfigure.condition` |
| `ConfigurationClassPostProcessor` | 处理配置类 | `org.springframework.context.annotation` |

## 常见问题与解决方案

### 1. 自动配置不生效

- 检查依赖是否正确添加
- 检查条件是否满足
- 检查是否被排除
- 开启调试日志查看原因

### 2. 自定义配置被覆盖

- 使用 `@ConditionalOnMissingBean` 确保自定义 Bean 优先
- 调整配置顺序
- 检查属性配置

### 3. 依赖冲突

- 使用 `mvn dependency:tree` 查看依赖
- 排除不需要的依赖
- 统一版本管理

## 最佳实践

1. **了解自动配置原理**：理解条件注解和加载机制
2. **合理使用条件注解**：确保配置在正确的条件下生效
3. **优先使用自动配置**：避免重复配置
4. **适当覆盖配置**：在需要时自定义配置
5. **关注配置顺序**：使用 `@AutoConfigureOrder` 等注解控制顺序
6. **开启调试模式**：排查自动配置问题
7. **编写自定义自动配置**：为项目创建专用的自动配置

## 总结

Spring Boot 自动配置的实现原理可以概括为：

1. **注解驱动**：通过 `@EnableAutoConfiguration` 启用自动配置
2. **工厂加载**：使用 `SpringFactoriesLoader` 从 `META-INF/spring.factories` 加载配置
3. **条件判断**：通过 `@Conditional` 系列注解判断配置是否生效
4. **顺序控制**：使用 `@AutoConfigureOrder` 等注解控制配置顺序
5. **智能装配**：根据环境和依赖自动装配 Bean

自动配置的设计体现了 Spring Boot "约定大于配置"的理念，大大简化了 Spring 应用的开发。通过深入理解自动配置的原理，我们可以更好地使用和扩展 Spring Boot，构建更加灵活和高效的应用系统。

## 扩展阅读

- [Spring Boot 官方文档 - 自动配置](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-auto-configuration)
- [Spring Boot 源码分析系列](https://github.com/spring-projects/spring-boot)
- [Spring 官方文档 - 条件注解](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-condition-annotations)
- [Baeldung - Spring Boot Auto-Configuration](https://www.baeldung.com/spring-boot-auto-configuration)
