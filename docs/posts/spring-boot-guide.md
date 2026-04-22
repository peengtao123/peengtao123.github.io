---
date: 2026-04-22
category:
  - Spring Boot
  - Java
  - 后端开发
tag:
  - Spring Boot
  - Java
  - 后端
  - 入门
---

# Spring Boot 入门教程

## 什么是 Spring Boot？

Spring Boot 是由 Pivotal 团队开发的一个基于 Spring 框架的快速开发脚手架，它简化了 Spring 应用的初始搭建和开发过程，提供了约定大于配置的理念，让开发者可以专注于业务逻辑而不是配置。

### 核心特性

- **自动配置**：根据项目依赖自动配置应用
- **起步依赖**：提供一组预配置的依赖项，简化依赖管理
- **内嵌容器**：内置 Tomcat、Jetty 等 Web 容器
- **生产就绪**：提供健康检查、监控等生产级特性
- **无代码生成**：无需 XML 配置，使用 Java 配置或注解

## 环境准备

### 系统要求

- **JDK**：8 或更高版本
- **Maven**：3.6.0 或更高版本
- **IDE**：IntelliJ IDEA、Eclipse 等

### 验证环境

```bash
# 检查 Java 版本
java -version

# 检查 Maven 版本
mvn -version
```

## 创建 Spring Boot 项目

### 方法 1：使用 Spring Initializr

1. 访问 [Spring Initializr](https://start.spring.io/)
2. 填写项目信息：
   - **Project**：Maven
   - **Language**：Java
   - **Spring Boot**：选择稳定版本
   - **Group**：com.example
   - **Artifact**：demo
   - **Package name**：com.example.demo
3. 添加依赖：
   - Spring Web
   - Spring Boot DevTools
   - Spring Boot Actuator
4. 点击 "Generate" 下载项目

### 方法 2：使用 IDE 创建

#### IntelliJ IDEA

1. 选择 "File" → "New" → "Project"
2. 选择 "Spring Initializr"
3. 填写项目信息和依赖
4. 点击 "Finish"

## 项目结构

```
demo/
├── src/
│   ├── main/
│   │   ├── java/com/example/demo/
│   │   │   ├── DemoApplication.java       # 启动类
│   │   │   ├── controller/                 # 控制器
│   │   │   ├── service/                    # 服务层
│   │   │   ├── repository/                 # 数据访问层
│   │   │   └── model/                      # 数据模型
│   │   └── resources/
│   │       ├── application.properties      # 配置文件
│   │       ├── static/                     # 静态资源
│   │       └── templates/                  # 模板文件
│   └── test/
│       └── java/com/example/demo/          # 测试代码
├── pom.xml                                 # Maven 配置
└── README.md                               # 项目说明
```

## 核心文件说明

### 启动类

`DemoApplication.java`：

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

### 配置文件

`application.properties`：

```properties
# 应用配置
spring.application.name=demo

# 服务器配置
server.port=8080
server.servlet.context-path=/api

# 数据库配置（可选）
# spring.datasource.url=jdbc:mysql://localhost:3306/test
# spring.datasource.username=root
# spring.datasource.password=123456
# spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

## 第一个控制器

创建 `controller/HelloController.java`：

```java
package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }
    
    @GetMapping("/hello/{name}")
    public String hello(@PathVariable String name) {
        return "Hello, " + name + "!";
    }
}
```

## 运行项目

### 方法 1：使用 IDE

1. 找到 `DemoApplication.java`
2. 右键选择 "Run DemoApplication"

### 方法 2：使用 Maven

```bash
# 进入项目目录
cd demo

# 构建项目
mvn clean package

# 运行项目
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

### 验证运行

打开浏览器访问：
- `http://localhost:8080/api/hello` → 显示 "Hello, Spring Boot!"
- `http://localhost:8080/api/hello/World` → 显示 "Hello, World!"

## 常用注解

### 控制器注解

| 注解 | 说明 |
|------|------|
| `@RestController` | 组合 @Controller + @ResponseBody，返回 JSON 数据 |
| `@Controller` | 处理 HTTP 请求，返回视图 |
| `@RequestMapping` | 映射请求路径 |
| `@GetMapping` | 处理 GET 请求 |
| `@PostMapping` | 处理 POST 请求 |
| `@PutMapping` | 处理 PUT 请求 |
| `@DeleteMapping` | 处理 DELETE 请求 |
| `@PathVariable` | 获取路径参数 |
| `@RequestParam` | 获取查询参数 |
| `@RequestBody` | 获取请求体 |

### 服务层注解

| 注解 | 说明 |
|------|------|
| `@Service` | 标记服务层组件 |
| `@Autowired` | 自动注入依赖 |
| `@Qualifier` | 限定注入的 Bean |
| `@Value` | 注入配置值 |

### 数据访问注解

| 注解 | 说明 |
|------|------|
| `@Repository` | 标记数据访问层组件 |
| `@Entity` | 标记实体类 |
| `@Table` | 映射数据库表 |
| `@Id` | 标记主键 |
| `@GeneratedValue` | 主键生成策略 |
| `@Column` | 映射数据库列 |

## 配置管理

### 多环境配置

创建不同环境的配置文件：

- `application.properties`：默认配置
- `application-dev.properties`：开发环境
- `application-test.properties`：测试环境
- `application-prod.properties`：生产环境

激活环境：

```properties
# application.properties
spring.profiles.active=dev
```

### 使用 YAML 配置

创建 `application.yml`：

```yaml
spring:
  application:
    name: demo
  profiles:
    active: dev
  
server:
  port: 8080
  servlet:
    context-path: /api

---
spring:
  config:
    activate:
      on-profile: dev
  
datasource:
  url: jdbc:mysql://localhost:3306/test
  username: root
  password: 123456
  driver-class-name: com.mysql.cj.jdbc.Driver
```

## 数据库集成

### 添加依赖

修改 `pom.xml`：

```xml
<dependencies>
    <!-- Spring Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    
    <!-- JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    
    <!-- MySQL 驱动 -->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <scope>runtime</scope>
    </dependency>
    
    <!-- 测试 -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

### 实体类

创建 `model/User.java`：

```java
package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    // getter 和 setter 方法
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
```

### 仓库接口

创建 `repository/UserRepository.java`：

```java
package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
```

### 服务层

创建 `service/UserService.java`：

```java
package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    
    public User createUser(User user) {
        return userRepository.save(user);
    }
    
    public User updateUser(Long id, User user) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
            existingUser.setName(user.getName());
            existingUser.setEmail(user.getEmail());
            return userRepository.save(existingUser);
        }
        return null;
    }
    
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
```

### 控制器

创建 `controller/UserController.java`：

```java
package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
    
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }
    
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
```

## 测试

### 单元测试

创建 `test/java/com/example/demo/HelloControllerTest.java`：

```java
package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@WebMvcTest
public class HelloControllerTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @Test
    public void testHello() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/hello"))
               .andExpect(MockMvcResultMatchers.status().isOk())
               .andExpect(MockMvcResultMatchers.content().string("Hello, Spring Boot!"));
    }
    
    @Test
    public void testHelloWithName() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/hello/World"))
               .andExpect(MockMvcResultMatchers.status().isOk())
               .andExpect(MockMvcResultMatchers.content().string("Hello, World!"));
    }
}
```

### 运行测试

```bash
mvn test
```

## 生产部署

### 打包

```bash
mvn clean package -DskipTests
```

### 运行

```bash
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

### Docker 部署

创建 `Dockerfile`：

```dockerfile
FROM openjdk:8-jdk-alpine
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
```

构建和运行：

```bash
docker build -t demo .
docker run -p 8080:8080 demo
```

## 常用工具

### Spring Boot DevTools

- 热部署：修改代码后自动重启
- 禁用模板缓存
- 支持远程调试

### Spring Boot Actuator

- 健康检查：`/actuator/health`
- 信息端点：`/actuator/info`
- 指标端点：`/actuator/metrics`
- 环境信息：`/actuator/env`

## 常见问题

### 端口占用

```properties
# 更改端口
server.port=8081
```

### 依赖冲突

使用 `mvn dependency:tree` 查看依赖树，解决冲突。

### 启动缓慢

- 关闭不需要的自动配置
- 优化 JVM 参数

## 学习资源

- [Spring Boot 官方文档](https://spring.io/projects/spring-boot)
- [Spring 官方指南](https://spring.io/guides)
- [Baeldung Spring Boot 教程](https://www.baeldung.com/spring-boot)
- [Spring Boot 实战](https://www.amazon.com/Spring-Boot-Action-Craig-Walls/dp/161729254X)

## 总结

Spring Boot 大大简化了 Spring 应用的开发，通过自动配置和约定大于配置的理念，让开发者可以专注于业务逻辑。本教程介绍了 Spring Boot 的基本概念、项目创建、核心功能和常见用法，希望能帮助你快速上手 Spring Boot 开发。

随着学习的深入，你可以进一步探索 Spring Boot 的高级特性，如安全认证、微服务、消息队列等，构建更加复杂和强大的应用系统。
