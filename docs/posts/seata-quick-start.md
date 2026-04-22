---
date: 2026-04-22
category:
  - Spring Cloud
  - 微服务
tag:
  - Seata
  - 分布式事务
  - 微服务
  - Spring Cloud Alibaba
---

# Seata 快速入门：分布式事务解决方案

## 前言

在微服务架构中，分布式事务是一个公认的难题。当一个业务操作需要跨多个服务时，如何保证事务的一致性成为了开发者必须面对的挑战。Seata 作为阿里巴巴开源的分布式事务解决方案，为我们提供了简单易用的事务处理能力。

本文将详细介绍 Seata 的安装、配置和使用方法，帮助开发者快速上手 Seata。

## 1. Seata 简介

Seata（Simple Extensible Autonomous Transaction Architecture）是阿里巴巴开源的一个分布式事务解决方案，致力于提供高性能和简单易用的分布式事务服务。它具有以下特点：

- **简单易用**：提供简单的 API 接口，学习成本低
- **高性能**：优化事务处理流程，减少锁竞争
- **可靠性**：确保分布式事务的最终一致性
- **可扩展性**：支持多种事务模式和存储模式
- **易于集成**：与 Spring Cloud、Dubbo 等框架无缝集成

### 1.1 Seata 的核心组件

- **TC (Transaction Coordinator)**：事务协调器，维护全局事务的运行状态，负责协调并驱动全局事务的提交或回滚
- **TM (Transaction Manager)**：事务管理器，定义全局事务的范围，负责开启一个全局事务，并最终发起全局提交或全局回滚的决议
- **RM (Resource Manager)**：资源管理器，管理分支事务的资源，与 TC 进行交互，注册分支事务和上报分支事务的状态，并接收 TC 的指令，驱动分支事务的提交或回滚

### 1.2 Seata 的事务模式

#### 1.2.1 AT 模式

**描述**：基于数据库本地事务的两阶段提交，使用简单，对业务无侵入。

**使用条件**：
- 支持关系型数据库
- 业务逻辑基于 SQL 操作
- 对业务代码无侵入要求

**使用步骤**：
1. 创建 undo_log 表
2. 添加 Seata 依赖
3. 配置 Seata 服务
4. 在业务方法上添加 `@GlobalTransactional` 注解
5. 正常编写业务代码，Seata 会自动处理事务

**优缺点**：
- 优点：使用简单，对业务无侵入
- 缺点：只支持关系型数据库，性能相对较低

#### 1.2.2 TCC 模式

**描述**：基于业务逻辑的补偿机制，灵活性高，适用于复杂业务场景。

**使用条件**：
- 业务逻辑需要自定义 Try、Confirm、Cancel 三个接口
- 对业务代码有一定侵入性
- 适用于非关系型数据库或特殊业务场景

**使用步骤**：
1. 定义 TCC 接口，包含 Try、Confirm、Cancel 三个方法
2. 实现 TCC 接口
3. 在 Try 方法上添加 `@TwoPhaseBusinessAction` 注解
4. 在业务方法上添加 `@GlobalTransactional` 注解
5. 调用 TCC 接口的 Try 方法

**优缺点**：
- 优点：灵活性高，支持各种业务场景
- 缺点：需要业务实现三个接口，开发成本较高

#### 1.2.3 SAGA 模式

**描述**：基于状态机的长事务处理，适用于长事务和复杂业务流程。

**使用条件**：
- 业务流程复杂，涉及多个步骤
- 事务执行时间较长
- 对一致性要求不是特别严格

**使用步骤**：
1. 定义状态机 JSON 文件
2. 实现每个状态的业务逻辑
3. 配置 SAGA 事务
4. 启动状态机

**优缺点**：
- 优点：支持长事务，适合复杂业务流程
- 缺点：一致性保障较弱，实现复杂度较高

#### 1.2.4 XA 模式

**描述**：基于数据库 XA 协议的事务处理，兼容性好，支持更多数据库。

**使用条件**：
- 数据库支持 XA 协议
- 对一致性要求较高
- 性能要求不是特别高

**使用步骤**：
1. 配置 Seata 使用 XA 模式
2. 在业务方法上添加 `@GlobalTransactional` 注解
3. 正常编写业务代码

**优缺点**：
- 优点：兼容性好，支持更多数据库
- 缺点：性能较低，锁定资源时间较长

## 2. Seata 安装

### 2.1 环境要求

- JDK 8 或更高版本
- MySQL 5.7 或更高版本（用于存储事务日志）
- Redis（可选，用于高可用部署）

### 2.2 下载安装包

1. 访问 [Seata 官方 GitHub 仓库](https://github.com/seata/seata/releases) 下载最新版本的安装包
2. 选择适合的版本，下载 `seata-server-${version}.zip` 或 `seata-server-${version}.tar.gz` 文件

### 2.3 解压安装

#### Windows 系统

1. 解压下载的 zip 文件到任意目录
2. 进入解压后的 `seata` 目录

#### Linux/macOS 系统

1. 解压下载的 tar.gz 文件：
   ```bash
   tar -zxvf seata-server-${version}.tar.gz
   ```
2. 进入解压后的 `seata` 目录

### 2.4 配置数据库

1. 创建数据库 `seata`
2. 执行 `seata/conf/db_store.sql` 脚本初始化数据库
3. 执行 `seata/conf/db_undo_log.sql` 脚本创建 undo_log 表

### 2.5 修改配置文件

1. 修改 `seata/conf/application.yml` 文件，配置数据库连接：

```yaml
server:
  port: 7091

spring:
  application:
    name: seata-server

logging:
  config: classpath:logback-spring.xml
  file:
    path: ${user.home}/logs/seata

console:
  user:
    username: seata
    password: seata

seata:
  config:
    type: file
  registry:
    type: file
  store:
    mode: db
    db:
      datasource:
        type: com.zaxxer.hikari.HikariDataSource
        driver-class-name: com.mysql.jdbc.Driver
        url: jdbc:mysql://localhost:3306/seata?useUnicode=true&rewriteBatchedStatements=true
        username: root
        password: password
```

### 2.6 启动 Seata 服务

#### Windows 系统

执行 `seata/bin/startup.bat` 启动 Seata 服务。

#### Linux/macOS 系统

执行 `seata/bin/seata-server.sh` 启动 Seata 服务。

### 2.7 验证安装

Seata 服务启动后，默认监听在 `127.0.0.1:7091` 端口。可以通过查看日志或使用 `telnet` 命令验证服务是否正常启动。

## 3. Seata 快速入门

### 3.1 AT 模式示例

AT 模式是 Seata 的默认模式，它基于数据库本地事务，对业务无侵入。

#### 3.1.1 添加依赖

在 Maven 项目的 `pom.xml` 文件中添加以下依赖：

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-seata</artifactId>
    <version>2022.0.0.0-RC1</version>
</dependency>
```

#### 3.1.2 配置 application.yml

```yaml
spring:
  application:
    name: seata-at-demo
  cloud:
    seata:
      tx-service-group: my_test_tx_group

seata:
  registry:
    type: file
  config:
    type: file
```

#### 3.1.3 创建业务表

```sql
CREATE TABLE `order` (
  `id` BIGINT(11) NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT(11) NOT NULL,
  `product_id` BIGINT(11) NOT NULL,
  `count` INT(11) NOT NULL,
  `money` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `storage` (
  `id` BIGINT(11) NOT NULL AUTO_INCREMENT,
  `product_id` BIGINT(11) NOT NULL,
  `total` INT(11) NOT NULL,
  `used` INT(11) NOT NULL,
  `residue` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `account` (
  `id` BIGINT(11) NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT(11) NOT NULL,
  `money` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 为每个业务表创建 undo_log 表
CREATE TABLE `undo_log` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `branch_id` BIGINT(20) NOT NULL,
  `xid` VARCHAR(100) NOT NULL,
  `context` VARCHAR(128) NOT NULL,
  `rollback_info` LONGBLOB NOT NULL,
  `log_status` INT(11) NOT NULL,
  `log_created` DATETIME NOT NULL,
  `log_modified` DATETIME NOT NULL,
  `ext` VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_undo_log` (`xid`,`branch_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```

#### 3.1.4 业务代码

**订单服务**：

```java
@Service
public class OrderService {
    
    @Autowired
    private OrderMapper orderMapper;
    
    @Autowired
    private StorageService storageService;
    
    @Autowired
    private AccountService accountService;
    
    @GlobalTransactional(name = "create-order", rollbackFor = Exception.class)
    public void createOrder(Order order) {
        // 创建订单
        orderMapper.create(order);
        // 扣减库存
        storageService.decrease(order.getProductId(), order.getCount());
        // 扣减账户余额
        accountService.decrease(order.getUserId(), order.getMoney());
    }
}
```

**库存服务**：

```java
@Service
public class StorageService {
    
    @Autowired
    private StorageMapper storageMapper;
    
    public void decrease(Long productId, Integer count) {
        storageMapper.decrease(productId, count);
    }
}
```

**账户服务**：

```java
@Service
public class AccountService {
    
    @Autowired
    private AccountMapper accountMapper;
    
    public void decrease(Long userId, BigDecimal money) {
        accountMapper.decrease(userId, money);
    }
}
```

### 3.2 TCC 模式示例

TCC 模式需要业务实现三个接口：Try、Confirm 和 Cancel。

#### 3.2.1 业务接口

```java
public interface TccAction {
    @TwoPhaseBusinessAction(name = "tccAction", commitMethod = "confirm", rollbackMethod = "cancel")
    boolean prepare(BusinessActionContext context, @BusinessActionContextParameter(paramName = "param") String param);
    
    boolean confirm(BusinessActionContext context);
    
    boolean cancel(BusinessActionContext context);
}
```

#### 3.2.2 业务实现

```java
@Service
public class TccActionImpl implements TccAction {
    
    @Override
    public boolean prepare(BusinessActionContext context, String param) {
        // 资源预留
        System.out.println("Prepare: " + param);
        return true;
    }
    
    @Override
    public boolean confirm(BusinessActionContext context) {
        // 确认提交
        String param = (String) context.getActionContext("param");
        System.out.println("Confirm: " + param);
        return true;
    }
    
    @Override
    public boolean cancel(BusinessActionContext context) {
        // 取消操作
        String param = (String) context.getActionContext("param");
        System.out.println("Cancel: " + param);
        return true;
    }
}
```

#### 3.2.3 调用 TCC 服务

```java
@Service
public class TccService {
    
    @Autowired
    private TccAction tccAction;
    
    @GlobalTransactional
    public void doBusiness() {
        tccAction.prepare(null, "test");
    }
}
```

## 4. Seata 与 Spring Cloud 集成

### 4.1 添加依赖

在 Maven 项目的 `pom.xml` 文件中添加以下依赖：

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-seata</artifactId>
    <version>2022.0.0.0-RC1</version>
</dependency>
```

### 4.2 配置 application.yml

```yaml
spring:
  application:
    name: order-service
  cloud:
    seata:
      tx-service-group: my_test_tx_group

seata:
  registry:
    type: nacos
    nacos:
      application: seata-server
      server-addr: localhost:8848
      group: SEATA_GROUP
  config:
    type: nacos
    nacos:
      server-addr: localhost:8848
      group: SEATA_GROUP
```

### 4.3 使用 @GlobalTransactional 注解

在需要事务管理的方法上添加 `@GlobalTransactional` 注解：

```java
@Service
public class OrderService {
    
    @GlobalTransactional(name = "create-order", rollbackFor = Exception.class)
    public Order createOrder(OrderDTO orderDTO) {
        // 业务逻辑
    }
}
```

## 5. Seata 高可用部署

### 5.1 配置注册中心

修改 `seata/conf/application.yml` 文件，配置 Nacos 作为注册中心：

```yaml
seata:
  registry:
    type: nacos
    nacos:
      application: seata-server
      server-addr: localhost:8848
      group: SEATA_GROUP
      namespace: 
```

### 5.2 配置配置中心

修改 `seata/conf/application.yml` 文件，配置 Nacos 作为配置中心：

```yaml
seata:
  config:
    type: nacos
    nacos:
      server-addr: localhost:8848
      group: SEATA_GROUP
      namespace: 
```

### 5.3 配置存储模式

修改 `seata/conf/application.yml` 文件，配置数据库作为存储模式：

```yaml
seata:
  store:
    mode: db
    db:
      datasource:
        type: com.zaxxer.hikari.HikariDataSource
        driver-class-name: com.mysql.jdbc.Driver
        url: jdbc:mysql://localhost:3306/seata?useUnicode=true&rewriteBatchedStatements=true
        username: root
        password: password
```

### 5.4 启动多个 Seata 服务

在不同的服务器上启动 Seata 服务，它们会自动注册到 Nacos 中，形成高可用集群。

## 6. Seata 最佳实践

### 6.1 事务模式选择

- **AT 模式**：适用于大多数场景，使用简单，对业务无侵入
- **TCC 模式**：适用于复杂业务场景，需要业务实现三个接口
- **SAGA 模式**：适用于长事务和复杂业务流程
- **XA 模式**：适用于需要兼容多种数据库的场景

### 6.2 性能优化

- **合理设置事务超时时间**：避免事务长时间占用资源
- **减少事务范围**：尽量缩小事务的范围，只包含必要的操作
- **使用异步操作**：将非核心操作移出事务范围
- **优化数据库**：合理设计数据库表结构，添加适当的索引

### 6.3 可靠性保证

- **使用高可用部署**：部署多个 Seata 服务，确保服务的可靠性
- **定期备份数据库**：定期备份 Seata 的数据库，防止数据丢失
- **监控事务状态**：实时监控事务的执行状态，及时发现和处理异常

## 7. 常见问题与解决方案

### 7.1 事务不回滚

- **检查 @GlobalTransactional 注解**：确保注解添加在正确的方法上
- **检查异常处理**：确保异常被正确抛出，没有被捕获后吞掉
- **检查 undo_log 表**：确保 undo_log 表创建正确，并且有足够的权限

### 7.2 性能问题

- **检查事务范围**：尽量缩小事务的范围
- **检查数据库性能**：确保数据库性能良好，添加适当的索引
- **检查网络连接**：确保服务之间的网络连接稳定

### 7.3 服务启动失败

- **检查配置文件**：确保配置文件正确，特别是数据库连接配置
- **检查端口占用**：确保 Seata 服务的端口没有被占用
- **检查依赖版本**：确保 Seata 版本与 Spring Cloud Alibaba 版本兼容

## 8. 总结

Seata 作为阿里巴巴开源的分布式事务解决方案，为微服务架构提供了简单易用的事务处理能力。通过本文的介绍，相信你已经掌握了 Seata 的基本安装、配置和使用方法。

在实际项目中，Seata 可以帮助我们解决分布式事务的问题，确保业务操作的一致性。随着微服务的不断发展，Seata 也在不断演进，为开发者提供更多功能和更好的体验。

希望本文对你有所帮助，祝你在微服务开发的道路上越走越远！