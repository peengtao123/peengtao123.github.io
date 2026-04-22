---
date: 2026-04-22
category:
  - 微服务
  - 系统设计
tag:
  - 微服务
  - 电商平台
  - 详细设计
  - 系统设计
  - Spring Cloud
---

# 电商平台系统详细设计文档

## 1. 引言

本文档基于《微服务架构的电商平台架构文档》，详细描述电商平台的系统设计实现。文档涵盖了核心微服务的详细设计、数据库设计、API设计、业务流程设计等内容，为开发团队提供具体的技术实现指导。

### 1.1 文档目的

- 提供详细的系统设计方案，指导开发团队实现电商平台
- 确保系统设计的一致性和完整性
- 作为开发、测试、运维的参考依据

### 1.2 术语定义

| 术语 | 解释 |
|------|------|
| 微服务 | 独立部署、独立运行的服务单元 |
| Nacos | 服务注册与发现、配置中心 |
| Sentinel | 服务熔断与限流组件 |
| Seata | 分布式事务解决方案 |
| RocketMQ | 消息队列 |
| Spring Cloud Gateway | API网关 |
| JWT | JSON Web Token，用于身份认证 |
| SKU | Stock Keeping Unit，库存保有单位 |
| RBAC | Role-Based Access Control，基于角色的访问控制 |

## 2. 系统架构详细设计

### 2.1 架构图

![电商平台系统详细架构图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=detailed%20microservices%20architecture%20diagram%20for%20e-commerce%20platform%20with%20api%20gateway%2C%20service%20registry%2C%20core%20services%2C%20message%20queue%2C%20and%20data%20storage%20with%20detailed%20components&image_size=landscape_16_9)

### 2.2 技术栈详细说明

| 技术 | 版本 | 用途 | 配置 |
|------|------|------|------|
| Spring Boot | 3.0.0 | 基础框架 | Java 17+ |
| Spring Cloud Alibaba | 2022.0.0.0 | 微服务生态 | - |
| Nacos | 2.2.0 | 服务注册与发现、配置中心 | 集群部署 |
| Sentinel | 1.8.6 | 服务熔断与限流 | - |
| Seata | 1.7.0 | 分布式事务 | 集群部署 |
| RocketMQ | 5.0.0 | 消息队列 | 集群部署 |
| Spring Cloud Gateway | 4.0.0 | API网关 | - |
| MySQL | 8.0 | 关系型数据库 | 主从复制 |
| Redis | 7.0+ | 缓存 | 集群部署 |
| Elasticsearch | 8.0+ | 搜索引擎 | 集群部署 |
| Docker | 20.10+ | 容器化 | - |
| Kubernetes | 1.26+ | 容器编排 | - |
| Prometheus | 2.40+ | 监控 | - |
| Grafana | 9.0+ | 可视化 | - |

## 3. 核心微服务详细设计

### 3.1 用户服务

#### 3.1.1 服务概述

用户服务负责用户的注册、登录、个人信息管理和地址管理等功能。

#### 3.1.2 目录结构

```
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── ecommerce/
│   │           └── user/
│   │               ├── UserApplication.java
│   │               ├── controller/
│   │               │   └── UserController.java
│   │               ├── service/
│   │               │   ├── UserService.java
│   │               │   └── impl/
│   │               │       └── UserServiceImpl.java
│   │               ├── mapper/
│   │               │   ├── UserMapper.java
│   │               │   └── UserAddressMapper.java
│   │               ├── model/
│   │               │   ├── User.java
│   │               │   └── UserAddress.java
│   │               ├── dto/
│   │               │   ├── UserRegisterDTO.java
│   │               │   ├── UserLoginDTO.java
│   │               │   └── UserAddressDTO.java
│   │               ├── config/
│   │               │   └── SecurityConfig.java
│   │               └── utils/
│   │                   └── JwtUtils.java
│   └── resources/
│       ├── application.yml
│       └── mapper/
│           ├── UserMapper.xml
│           └── UserAddressMapper.xml
└── test/
    └── java/
        └── com/
            └── ecommerce/
                └── user/
                    └── UserServiceTest.java
```

#### 3.1.3 数据库设计

**`user`表**
| 字段名 | 数据类型 | 约束 | 描述 |
|--------|----------|------|------|
| `id` | `BIGINT` | `PRIMARY KEY AUTO_INCREMENT` | 用户ID |
| `username` | `VARCHAR(50)` | `UNIQUE NOT NULL` | 用户名 |
| `password` | `VARCHAR(100)` | `NOT NULL` | 密码（加密存储） |
| `email` | `VARCHAR(100)` | `UNIQUE NOT NULL` | 邮箱 |
| `phone` | `VARCHAR(20)` | `UNIQUE NOT NULL` | 手机号 |
| `nickname` | `VARCHAR(50)` | `NOT NULL` | 昵称 |
| `avatar` | `VARCHAR(255)` | - | 头像URL |
| `gender` | `TINYINT` | - | 性别（0:未知, 1:男, 2:女） |
| `birthday` | `DATE` | - | 生日 |
| `status` | `TINYINT` | `NOT NULL DEFAULT 1` | 状态（1:正常, 0:禁用） |
| `created_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP` | 创建时间 |
| `updated_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | 更新时间 |

**`user_address`表**
| 字段名 | 数据类型 | 约束 | 描述 |
|--------|----------|------|------|
| `id` | `BIGINT` | `PRIMARY KEY AUTO_INCREMENT` | 地址ID |
| `user_id` | `BIGINT` | `NOT NULL` | 用户ID |
| `consignee` | `VARCHAR(50)` | `NOT NULL` | 收货人 |
| `phone` | `VARCHAR(20)` | `NOT NULL` | 手机号 |
| `province` | `VARCHAR(50)` | `NOT NULL` | 省份 |
| `city` | `VARCHAR(50)` | `NOT NULL` | 城市 |
| `district` | `VARCHAR(50)` | `NOT NULL` | 区县 |
| `detail_address` | `VARCHAR(255)` | `NOT NULL` | 详细地址 |
| `is_default` | `TINYINT` | `NOT NULL DEFAULT 0` | 是否默认（1:是, 0:否） |
| `created_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP` | 创建时间 |
| `updated_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | 更新时间 |

#### 3.1.4 API设计

| API路径 | 方法 | 模块/类 | 功能描述 | 请求体 (JSON) | 成功响应 (200 OK) |
|---------|------|---------|----------|----------------|-------------------|
| `/api/user/register` | `POST` | `UserController` | 用户注册 | `{"username": "test", "password": "123456", "email": "test@example.com", "phone": "13800138000", "nickname": "测试用户"}` | `{"code": 200, "message": "注册成功", "data": {"id": 1, "username": "test", "nickname": "测试用户"}}` |
| `/api/user/login` | `POST` | `UserController` | 用户登录 | `{"username": "test", "password": "123456"}` | `{"code": 200, "message": "登录成功", "data": {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", "user": {"id": 1, "username": "test", "nickname": "测试用户"}}}` |
| `/api/user/info` | `GET` | `UserController` | 获取用户信息 | N/A | `{"code": 200, "message": "获取成功", "data": {"id": 1, "username": "test", "nickname": "测试用户", "email": "test@example.com", "phone": "13800138000"}}` |
| `/api/user/info` | `PUT` | `UserController` | 更新用户信息 | `{"nickname": "新昵称", "avatar": "http://example.com/avatar.jpg"}` | `{"code": 200, "message": "更新成功", "data": {"id": 1, "username": "test", "nickname": "新昵称"}}` |
| `/api/user/address` | `GET` | `UserController` | 获取用户地址列表 | N/A | `{"code": 200, "message": "获取成功", "data": [{"id": 1, "consignee": "张三", "phone": "13800138000", "province": "北京市", "city": "北京市", "district": "朝阳区", "detail_address": "某某街道1号", "is_default": 1}]}` |
| `/api/user/address` | `POST` | `UserController` | 添加用户地址 | `{"consignee": "张三", "phone": "13800138000", "province": "北京市", "city": "北京市", "district": "朝阳区", "detail_address": "某某街道1号", "is_default": 1}` | `{"code": 200, "message": "添加成功", "data": {"id": 1, "consignee": "张三"}}` |
| `/api/user/address/{id}` | `PUT` | `UserController` | 更新用户地址 | `{"consignee": "李四", "phone": "13900139000", "is_default": 1}` | `{"code": 200, "message": "更新成功", "data": {"id": 1, "consignee": "李四"}}` |
| `/api/user/address/{id}` | `DELETE` | `UserController` | 删除用户地址 | N/A | `{"code": 200, "message": "删除成功"}` |

#### 3.1.5 核心业务流程

**用户注册流程**：
1. 接收注册请求，验证参数合法性
2. 检查用户名、邮箱、手机号是否已存在
3. 对密码进行加密处理
4. 创建用户记录
5. 返回注册成功信息

**用户登录流程**：
1. 接收登录请求，验证参数合法性
2. 根据用户名查询用户信息
3. 验证密码是否正确
4. 生成 JWT token
5. 返回登录成功信息和 token

**地址管理流程**：
1. 添加地址：验证参数 → 创建地址记录 → 如果设置为默认，更新其他地址为非默认
2. 更新地址：验证参数 → 更新地址记录 → 如果设置为默认，更新其他地址为非默认
3. 删除地址：验证地址归属 → 删除地址记录

### 3.2 商品服务

#### 3.2.1 服务概述

商品服务负责商品的管理、分类管理和库存管理等功能。

#### 3.2.2 目录结构

```
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── ecommerce/
│   │           └── product/
│   │               ├── ProductApplication.java
│   │               ├── controller/
│   │               │   ├── ProductController.java
│   │               │   └── CategoryController.java
│   │               ├── service/
│   │               │   ├── ProductService.java
│   │               │   ├── CategoryService.java
│   │               │   ├── InventoryService.java
│   │               │   └── impl/
│   │               │       ├── ProductServiceImpl.java
│   │               │       ├── CategoryServiceImpl.java
│   │               │       └── InventoryServiceImpl.java
│   │               ├── mapper/
│   │               │   ├── ProductMapper.java
│   │               │   ├── CategoryMapper.java
│   │               │   ├── ProductSkuMapper.java
│   │               │   └── InventoryMapper.java
│   │               ├── model/
│   │               │   ├── Product.java
│   │               │   ├── Category.java
│   │               │   ├── ProductSku.java
│   │               │   └── Inventory.java
│   │               ├── dto/
│   │               │   ├── ProductDTO.java
│   │               │   ├── ProductSkuDTO.java
│   │               │   └── CategoryDTO.java
│   │               └── config/
│   │                   └── RedisConfig.java
│   └── resources/
│       ├── application.yml
│       └── mapper/
│           ├── ProductMapper.xml
│           ├── CategoryMapper.xml
│           ├── ProductSkuMapper.xml
│           └── InventoryMapper.xml
└── test/
    └── java/
        └── com/
            └── ecommerce/
                └── product/
                    └── ProductServiceTest.java
```

#### 3.2.3 数据库设计

**`product`表**
| 字段名 | 数据类型 | 约束 | 描述 |
|--------|----------|------|------|
| `id` | `BIGINT` | `PRIMARY KEY AUTO_INCREMENT` | 商品ID |
| `name` | `VARCHAR(100)` | `NOT NULL` | 商品名称 |
| `description` | `TEXT` | - | 商品描述 |
| `category_id` | `BIGINT` | `NOT NULL` | 分类ID |
| `brand` | `VARCHAR(50)` | - | 品牌 |
| `price` | `DECIMAL(10,2)` | `NOT NULL` | 商品价格 |
| `stock` | `INT` | `NOT NULL DEFAULT 0` | 商品库存 |
| `status` | `TINYINT` | `NOT NULL DEFAULT 1` | 状态（1:上架, 0:下架） |
| `created_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP` | 创建时间 |
| `updated_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | 更新时间 |

**`category`表**
| 字段名 | 数据类型 | 约束 | 描述 |
|--------|----------|------|------|
| `id` | `BIGINT` | `PRIMARY KEY AUTO_INCREMENT` | 分类ID |
| `name` | `VARCHAR(50)` | `NOT NULL` | 分类名称 |
| `parent_id` | `BIGINT` | `NOT NULL DEFAULT 0` | 父分类ID |
| `level` | `TINYINT` | `NOT NULL DEFAULT 1` | 分类级别 |
| `sort` | `INT` | `NOT NULL DEFAULT 0` | 排序 |
| `created_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP` | 创建时间 |
| `updated_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | 更新时间 |

**`product_sku`表**
| 字段名 | 数据类型 | 约束 | 描述 |
|--------|----------|------|------|
| `id` | `BIGINT` | `PRIMARY KEY AUTO_INCREMENT` | SKU ID |
| `product_id` | `BIGINT` | `NOT NULL` | 商品ID |
| `sku_name` | `VARCHAR(100)` | `NOT NULL` | SKU名称 |
| `sku_attributes` | `JSON` | `NOT NULL` | SKU属性（JSON格式） |
| `price` | `DECIMAL(10,2)` | `NOT NULL` | SKU价格 |
| `stock` | `INT` | `NOT NULL DEFAULT 0` | SKU库存 |
| `created_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP` | 创建时间 |
| `updated_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | 更新时间 |

**`inventory`表**
| 字段名 | 数据类型 | 约束 | 描述 |
|--------|----------|------|------|
| `id` | `BIGINT` | `PRIMARY KEY AUTO_INCREMENT` | 库存ID |
| `product_id` | `BIGINT` | `NOT NULL` | 商品ID |
| `sku_id` | `BIGINT` | `NOT NULL` | SKU ID |
| `quantity` | `INT` | `NOT NULL DEFAULT 0` | 库存数量 |
| `locked_quantity` | `INT` | `NOT NULL DEFAULT 0` | 锁定库存数量 |
| `created_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP` | 创建时间 |
| `updated_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | 更新时间 |

#### 3.2.4 API设计

| API路径 | 方法 | 模块/类 | 功能描述 | 请求体 (JSON) | 成功响应 (200 OK) |
|---------|------|---------|----------|----------------|-------------------|
| `/api/product/list` | `GET` | `ProductController` | 获取商品列表 | N/A | `{"code": 200, "message": "获取成功", "data": {"items": [{"id": 1, "name": "商品1", "price": 99.99, "stock": 100}], "total": 100}}` |
| `/api/product/detail/{id}` | `GET` | `ProductController` | 获取商品详情 | N/A | `{"code": 200, "message": "获取成功", "data": {"id": 1, "name": "商品1", "description": "商品描述", "price": 99.99, "stock": 100, "skus": [{"id": 1, "sku_name": "颜色:红色", "price": 99.99, "stock": 50}]}}` |
| `/api/product` | `POST` | `ProductController` | 创建商品 | `{"name": "商品1", "description": "商品描述", "category_id": 1, "brand": "品牌1", "price": 99.99, "stock": 100, "skus": [{"sku_name": "颜色:红色", "price": 99.99, "stock": 50}]}` | `{"code": 200, "message": "创建成功", "data": {"id": 1, "name": "商品1"}}` |
| `/api/product/{id}` | `PUT` | `ProductController` | 更新商品 | `{"name": "商品1更新", "price": 89.99}` | `{"code": 200, "message": "更新成功", "data": {"id": 1, "name": "商品1更新"}}` |
| `/api/product/{id}` | `DELETE` | `ProductController` | 删除商品 | N/A | `{"code": 200, "message": "删除成功"}` |
| `/api/product/category` | `GET` | `CategoryController` | 获取商品分类 | N/A | `{"code": 200, "message": "获取成功", "data": [{"id": 1, "name": "分类1", "parent_id": 0, "children": [{"id": 2, "name": "子分类1", "parent_id": 1}]}]}` |
| `/api/product/category` | `POST` | `CategoryController` | 创建商品分类 | `{"name": "分类1", "parent_id": 0, "level": 1}` | `{"code": 200, "message": "创建成功", "data": {"id": 1, "name": "分类1"}}` |
| `/api/product/category/{id}` | `PUT` | `CategoryController` | 更新商品分类 | `{"name": "分类1更新"}` | `{"code": 200, "message": "更新成功", "data": {"id": 1, "name": "分类1更新"}}` |
| `/api/product/category/{id}` | `DELETE` | `CategoryController` | 删除商品分类 | N/A | `{"code": 200, "message": "删除成功"}` |

#### 3.2.5 核心业务流程

**商品创建流程**：
1. 接收创建请求，验证参数合法性
2. 创建商品记录
3. 创建商品SKU记录
4. 更新库存记录
5. 清除缓存
6. 返回创建成功信息

**商品查询流程**：
1. 接收查询请求，验证参数
2. 尝试从缓存获取商品信息
3. 如果缓存不存在，从数据库查询
4. 将查询结果存入缓存
5. 返回商品信息

**库存管理流程**：
1. 库存扣减：验证库存 → 扣减库存 → 更新数据库
2. 库存释放：释放锁定库存 → 更新数据库

### 3.3 订单服务

#### 3.3.1 服务概述

订单服务负责订单的创建、管理和状态更新等功能。

#### 3.3.2 目录结构

```
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── ecommerce/
│   │           └── order/
│   │               ├── OrderApplication.java
│   │               ├── controller/
│   │               │   └── OrderController.java
│   │               ├── service/
│   │               │   ├── OrderService.java
│   │               │   ├── OrderItemService.java
│   │               │   ├── OrderStatusService.java
│   │               │   └── impl/
│   │               │       ├── OrderServiceImpl.java
│   │               │       ├── OrderItemServiceImpl.java
│   │               │       └── OrderStatusServiceImpl.java
│   │               ├── mapper/
│   │               │   ├── OrderMapper.java
│   │               │   ├── OrderItemMapper.java
│   │               │   └── OrderStatusMapper.java
│   │               ├── model/
│   │               │   ├── Order.java
│   │               │   ├── OrderItem.java
│   │               │   └── OrderStatus.java
│   │               ├── dto/
│   │               │   ├── OrderDTO.java
│   │               │   ├── OrderItemDTO.java
│   │               │   └── OrderStatusDTO.java
│   │               ├── config/
│   │               │   └── SeataConfig.java
│   │               └── listener/
│   │                   └── OrderMessageListener.java
│   └── resources/
│       ├── application.yml
│       └── mapper/
│           ├── OrderMapper.xml
│           ├── OrderItemMapper.xml
│           └── OrderStatusMapper.xml
└── test/
    └── java/
        └── com/
            └── ecommerce/
                └── order/
                    └── OrderServiceTest.java
```

#### 3.3.3 数据库设计

**`order`表**
| 字段名 | 数据类型 | 约束 | 描述 |
|--------|----------|------|------|
| `id` | `BIGINT` | `PRIMARY KEY AUTO_INCREMENT` | 订单ID |
| `order_no` | `VARCHAR(32)` | `UNIQUE NOT NULL` | 订单号 |
| `user_id` | `BIGINT` | `NOT NULL` | 用户ID |
| `address_id` | `BIGINT` | `NOT NULL` | 地址ID |
| `total_amount` | `DECIMAL(10,2)` | `NOT NULL` | 总金额 |
| `actual_amount` | `DECIMAL(10,2)` | `NOT NULL` | 实际支付金额 |
| `payment_method` | `TINYINT` | `NOT NULL` | 支付方式（1:支付宝, 2:微信, 3:银行卡） |
| `status` | `TINYINT` | `NOT NULL DEFAULT 1` | 订单状态（1:待付款, 2:待发货, 3:待收货, 4:待评价, 5:已完成, 6:已取消） |
| `remark` | `VARCHAR(255)` | - | 订单备注 |
| `created_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP` | 创建时间 |
| `updated_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | 更新时间 |
| `paid_at` | `TIMESTAMP` | - | 支付时间 |
| `shipping_at` | `TIMESTAMP` | - | 发货时间 |
| `completed_at` | `TIMESTAMP` | - | 完成时间 |
| `cancelled_at` | `TIMESTAMP` | - | 取消时间 |

**`order_item`表**
| 字段名 | 数据类型 | 约束 | 描述 |
|--------|----------|------|------|
| `id` | `BIGINT` | `PRIMARY KEY AUTO_INCREMENT` | 订单项ID |
| `order_id` | `BIGINT` | `NOT NULL` | 订单ID |
| `product_id` | `BIGINT` | `NOT NULL` | 商品ID |
| `sku_id` | `BIGINT` | `NOT NULL` | SKU ID |
| `product_name` | `VARCHAR(100)` | `NOT NULL` | 商品名称 |
| `sku_name` | `VARCHAR(100)` | `NOT NULL` | SKU名称 |
| `price` | `DECIMAL(10,2)` | `NOT NULL` | 商品价格 |
| `quantity` | `INT` | `NOT NULL` | 购买数量 |
| `created_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP` | 创建时间 |
| `updated_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | 更新时间 |

**`order_status`表**
| 字段名 | 数据类型 | 约束 | 描述 |
|--------|----------|------|------|
| `id` | `BIGINT` | `PRIMARY KEY AUTO_INCREMENT` | 状态记录ID |
| `order_id` | `BIGINT` | `NOT NULL` | 订单ID |
| `status` | `TINYINT` | `NOT NULL` | 订单状态 |
| `remark` | `VARCHAR(255)` | - | 状态备注 |
| `created_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP` | 创建时间 |

#### 3.3.4 API设计

| API路径 | 方法 | 模块/类 | 功能描述 | 请求体 (JSON) | 成功响应 (200 OK) |
|---------|------|---------|----------|----------------|-------------------|
| `/api/order` | `POST` | `OrderController` | 创建订单 | `{"address_id": 1, "payment_method": 1, "items": [{"product_id": 1, "sku_id": 1, "quantity": 2}], "remark": "备注"}` | `{"code": 200, "message": "创建成功", "data": {"order_id": 1, "order_no": "202604220001"}}` |
| `/api/order/list` | `GET` | `OrderController` | 获取订单列表 | N/A | `{"code": 200, "message": "获取成功", "data": {"items": [{"id": 1, "order_no": "202604220001", "total_amount": 199.98, "status": 1, "created_at": "2026-04-22 10:00:00"}], "total": 10}}` |
| `/api/order/detail/{id}` | `GET` | `OrderController` | 获取订单详情 | N/A | `{"code": 200, "message": "获取成功", "data": {"id": 1, "order_no": "202604220001", "user_id": 1, "address_id": 1, "total_amount": 199.98, "actual_amount": 199.98, "payment_method": 1, "status": 1, "items": [{"id": 1, "product_id": 1, "sku_id": 1, "product_name": "商品1", "sku_name": "颜色:红色", "price": 99.99, "quantity": 2}]}}` |
| `/api/order/{id}/pay` | `PUT` | `OrderController` | 支付订单 | `{"payment_method": 1}` | `{"code": 200, "message": "支付成功", "data": {"order_id": 1, "status": 2}}` |
| `/api/order/{id}/cancel` | `PUT` | `OrderController` | 取消订单 | `{"reason": "不想买了"}` | `{"code": 200, "message": "取消成功", "data": {"order_id": 1, "status": 6}}` |
| `/api/order/{id}/shipping` | `PUT` | `OrderController` | 发货 | `{"shipping_company": "顺丰", "tracking_number": "SF1234567890"}` | `{"code": 200, "message": "发货成功", "data": {"order_id": 1, "status": 3}}` |
| `/api/order/{id}/receive` | `PUT` | `OrderController` | 确认收货 | N/A | `{"code": 200, "message": "收货成功", "data": {"order_id": 1, "status": 4}}` |
| `/api/order/{id}/complete` | `PUT` | `OrderController` | 完成订单 | N/A | `{"code": 200, "message": "完成成功", "data": {"order_id": 1, "status": 5}}` |

#### 3.3.5 核心业务流程

**订单创建流程**：
1. 接收创建请求，验证参数合法性
2. 调用商品服务，检查库存
3. 调用用户服务，获取用户地址信息
4. 生成订单号
5. 创建订单记录
6. 创建订单项记录
7. 调用库存服务，锁定库存
8. 发送订单创建消息
9. 返回创建成功信息

**订单支付流程**：
1. 接收支付请求，验证参数合法性
2. 检查订单状态是否为待付款
3. 调用支付服务，发起支付
4. 更新订单状态为待发货
5. 记录支付时间
6. 发送订单支付消息
7. 返回支付成功信息

**订单取消流程**：
1. 接收取消请求，验证参数合法性
2. 检查订单状态是否为待付款
3. 更新订单状态为已取消
4. 记录取消时间和原因
5. 调用库存服务，释放锁定库存
6. 发送订单取消消息
7. 返回取消成功信息

### 3.4 支付服务

#### 3.4.1 服务概述

支付服务负责支付处理、退款处理和支付记录管理等功能。

#### 3.4.2 目录结构

```
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── ecommerce/
│   │           └── payment/
│   │               ├── PaymentApplication.java
│   │               ├── controller/
│   │               │   └── PaymentController.java
│   │               ├── service/
│   │               │   ├── PaymentService.java
│   │               │   ├── RefundService.java
│   │               │   └── impl/
│   │               │       ├── PaymentServiceImpl.java
│   │               │       └── RefundServiceImpl.java
│   │               ├── mapper/
│   │               │   ├── PaymentMapper.java
│   │               │   └── RefundMapper.java
│   │               ├── model/
│   │               │   ├── Payment.java
│   │               │   └── Refund.java
│   │               ├── dto/
│   │               │   ├── PaymentDTO.java
│   │               │   └── RefundDTO.java
│   │               ├── config/
│   │               │   └── PaymentConfig.java
│   │               └── client/
│   │                   ├── AlipayClient.java
│   │                   └── WechatPayClient.java
│   └── resources/
│       ├── application.yml
│       └── mapper/
│           ├── PaymentMapper.xml
│           └── RefundMapper.xml
└── test/
    └── java/
        └── com/
            └── ecommerce/
                └── payment/
                    └── PaymentServiceTest.java
```

#### 3.4.3 数据库设计

**`payment`表**
| 字段名 | 数据类型 | 约束 | 描述 |
|--------|----------|------|------|
| `id` | `BIGINT` | `PRIMARY KEY AUTO_INCREMENT` | 支付ID |
| `order_id` | `BIGINT` | `UNIQUE NOT NULL` | 订单ID |
| `order_no` | `VARCHAR(32)` | `NOT NULL` | 订单号 |
| `amount` | `DECIMAL(10,2)` | `NOT NULL` | 支付金额 |
| `payment_method` | `TINYINT` | `NOT NULL` | 支付方式（1:支付宝, 2:微信, 3:银行卡） |
| `transaction_id` | `VARCHAR(100)` | `NOT NULL` | 第三方交易ID |
| `status` | `TINYINT` | `NOT NULL DEFAULT 1` | 支付状态（1:待支付, 2:支付成功, 3:支付失败） |
| `created_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP` | 创建时间 |
| `updated_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | 更新时间 |
| `paid_at` | `TIMESTAMP` | - | 支付时间 |

**`refund`表**
| 字段名 | 数据类型 | 约束 | 描述 |
|--------|----------|------|------|
| `id` | `BIGINT` | `PRIMARY KEY AUTO_INCREMENT` | 退款ID |
| `order_id` | `BIGINT` | `NOT NULL` | 订单ID |
| `payment_id` | `BIGINT` | `NOT NULL` | 支付ID |
| `refund_no` | `VARCHAR(32)` | `UNIQUE NOT NULL` | 退款单号 |
| `amount` | `DECIMAL(10,2)` | `NOT NULL` | 退款金额 |
| `reason` | `VARCHAR(255)` | `NOT NULL` | 退款原因 |
| `status` | `TINYINT` | `NOT NULL DEFAULT 1` | 退款状态（1:待处理, 2:退款成功, 3:退款失败） |
| `created_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP` | 创建时间 |
| `updated_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | 更新时间 |
| `refunded_at` | `TIMESTAMP` | - | 退款时间 |

#### 3.4.4 API设计

| API路径 | 方法 | 模块/类 | 功能描述 | 请求体 (JSON) | 成功响应 (200 OK) |
|---------|------|---------|----------|----------------|-------------------|
| `/api/pay/create` | `POST` | `PaymentController` | 创建支付 | `{"order_id": 1, "order_no": "202604220001", "amount": 199.98, "payment_method": 1}` | `{"code": 200, "message": "创建成功", "data": {"payment_id": 1, "pay_url": "https://openapi.alipay.com/gateway.do?..."}}` |
| `/api/pay/status/{orderId}` | `GET` | `PaymentController` | 查询支付状态 | N/A | `{"code": 200, "message": "查询成功", "data": {"order_id": 1, "status": 2, "paid_at": "2026-04-22 10:30:00"}}` |
| `/api/pay/callback` | `POST` | `PaymentController` | 支付回调 | 第三方支付平台回调数据 | `{"code": 200, "message": "回调成功"}` |
| `/api/pay/refund` | `POST` | `PaymentController` | 申请退款 | `{"order_id": 1, "amount": 199.98, "reason": "商品质量问题"}` | `{"code": 200, "message": "申请成功", "data": {"refund_id": 1, "refund_no": "REF202604220001"}}` |
| `/api/pay/refund/status/{refundId}` | `GET` | `PaymentController` | 查询退款状态 | N/A | `{"code": 200, "message": "查询成功", "data": {"refund_id": 1, "status": 2, "refunded_at": "2026-04-22 11:00:00"}}` |

#### 3.4.5 核心业务流程

**支付创建流程**：
1. 接收创建请求，验证参数合法性
2. 检查订单是否存在且状态为待付款
3. 创建支付记录
4. 调用第三方支付平台，生成支付链接
5. 返回支付链接

**支付回调流程**：
1. 接收第三方支付平台的回调数据
2. 验证回调数据的合法性
3. 更新支付记录状态
4. 调用订单服务，更新订单状态
5. 返回回调成功信息

**退款流程**：
1. 接收退款请求，验证参数合法性
2. 检查订单是否存在且状态为已支付
3. 创建退款记录
4. 调用第三方支付平台，发起退款
5. 更新退款记录状态
6. 调用订单服务，更新订单状态
7. 返回退款申请成功信息

### 3.5 购物车服务

#### 3.5.1 服务概述

购物车服务负责购物车的管理、商品添加与删除等功能。

#### 3.5.2 目录结构

```
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── ecommerce/
│   │           └── cart/
│   │               ├── CartApplication.java
│   │               ├── controller/
│   │               │   └── CartController.java
│   │               ├── service/
│   │               │   ├── CartService.java
│   │               │   └── impl/
│   │               │       └── CartServiceImpl.java
│   │               ├── mapper/
│   │               │   ├── CartMapper.java
│   │               │   └── CartItemMapper.java
│   │               ├── model/
│   │               │   ├── Cart.java
│   │               │   └── CartItem.java
│   │               ├── dto/
│   │               │   ├── CartDTO.java
│   │               │   └── CartItemDTO.java
│   │               └── config/
│   │                   └── RedisConfig.java
│   └── resources/
│       ├── application.yml
│       └── mapper/
│           ├── CartMapper.xml
│           └── CartItemMapper.xml
└── test/
    └── java/
        └── com/
            └── ecommerce/
                └── cart/
                    └── CartServiceTest.java
```

#### 3.5.3 数据库设计

**`cart`表**
| 字段名 | 数据类型 | 约束 | 描述 |
|--------|----------|------|------|
| `id` | `BIGINT` | `PRIMARY KEY AUTO_INCREMENT` | 购物车ID |
| `user_id` | `BIGINT` | `UNIQUE NOT NULL` | 用户ID |
| `created_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP` | 创建时间 |
| `updated_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | 更新时间 |

**`cart_item`表**
| 字段名 | 数据类型 | 约束 | 描述 |
|--------|----------|------|------|
| `id` | `BIGINT` | `PRIMARY KEY AUTO_INCREMENT` | 购物车项ID |
| `cart_id` | `BIGINT` | `NOT NULL` | 购物车ID |
| `product_id` | `BIGINT` | `NOT NULL` | 商品ID |
| `sku_id` | `BIGINT` | `NOT NULL` | SKU ID |
| `product_name` | `VARCHAR(100)` | `NOT NULL` | 商品名称 |
| `sku_name` | `VARCHAR(100)` | `NOT NULL` | SKU名称 |
| `price` | `DECIMAL(10,2)` | `NOT NULL` | 商品价格 |
| `quantity` | `INT` | `NOT NULL DEFAULT 1` | 商品数量 |
| `created_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP` | 创建时间 |
| `updated_at` | `TIMESTAMP` | `NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP` | 更新时间 |

#### 3.5.4 API设计

| API路径 | 方法 | 模块/类 | 功能描述 | 请求体 (JSON) | 成功响应 (200 OK) |
|---------|------|---------|----------|----------------|-------------------|
| `/api/cart` | `GET` | `CartController` | 获取购物车内容 | N/A | `{"code": 200, "message": "获取成功", "data": {"items": [{"id": 1, "product_id": 1, "sku_id": 1, "product_name": "商品1", "sku_name": "颜色:红色", "price": 99.99, "quantity": 2}], "total_amount": 199.98}}` |
| `/api/cart` | `POST` | `CartController` | 添加商品到购物车 | `{"product_id": 1, "sku_id": 1, "quantity": 2}` | `{"code": 200, "message": "添加成功", "data": {"id": 1, "quantity": 2}}` |
| `/api/cart/{id}` | `PUT` | `CartController` | 更新购物车商品数量 | `{"quantity": 3}` | `{"code": 200, "message": "更新成功", "data": {"id": 1, "quantity": 3}}` |
| `/api/cart/{id}` | `DELETE` | `CartController` | 从购物车删除商品 | N/A | `{"code": 200, "message": "删除成功"}` |
| `/api/cart/clear` | `DELETE` | `CartController` | 清空购物车 | N/A | `{"code": 200, "message": "清空成功"}` |

#### 3.5.5 核心业务流程

**添加商品到购物车流程**：
1. 接收添加请求，验证参数合法性
2. 检查商品是否存在且库存充足
3. 获取或创建购物车
4. 检查购物车中是否已存在该商品
5. 如果存在，更新数量；如果不存在，添加新商品
6. 更新购物车缓存
7. 返回添加成功信息

**更新购物车商品数量流程**：
1. 接收更新请求，验证参数合法性
2. 检查购物车项是否存在
3. 检查商品库存是否充足
4. 更新购物车项数量
5. 更新购物车缓存
6. 返回更新成功信息

**删除购物车商品流程**：
1. 接收删除请求，验证参数合法性
2. 检查购物车项是否存在
3. 删除购物车项
4. 更新购物车缓存
5. 返回删除成功信息

## 4. 数据库详细设计

### 4.1 数据库连接配置

| 服务 | 数据库 | 连接配置 |
|------|--------|----------|
| 用户服务 | user_db | jdbc:mysql://localhost:3306/user_db?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai |
| 商品服务 | product_db | jdbc:mysql://localhost:3306/product_db?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai |
| 订单服务 | order_db | jdbc:mysql://localhost:3306/order_db?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai |
| 支付服务 | payment_db | jdbc:mysql://localhost:3306/payment_db?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai |
| 购物车服务 | cart_db | jdbc:mysql://localhost:3306/cart_db?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai |
| 物流服务 | logistics_db | jdbc:mysql://localhost:3306/logistics_db?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai |
| 评价服务 | comment_db | jdbc:mysql://localhost:3306/comment_db?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai |
| 推荐服务 | recommend_db | jdbc:mysql://localhost:3306/recommend_db?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai |

### 4.2 数据库索引设计

**用户服务**：
- `user`表：`username`、`email`、`phone` 字段创建唯一索引
- `user_address`表：`user_id` 字段创建索引

**商品服务**：
- `product`表：`category_id`、`status` 字段创建索引
- `product_sku`表：`product_id` 字段创建索引
- `inventory`表：`product_id`、`sku_id` 字段创建联合索引

**订单服务**：
- `order`表：`order_no`、`user_id`、`status` 字段创建索引
- `order_item`表：`order_id`、`product_id` 字段创建索引

**支付服务**：
- `payment`表：`order_id`、`transaction_id` 字段创建索引
- `refund`表：`order_id`、`refund_no` 字段创建索引

**购物车服务**：
- `cart`表：`user_id` 字段创建唯一索引
- `cart_item`表：`cart_id`、`product_id` 字段创建联合索引

### 4.3 数据库分库分表策略

对于大型电商平台，数据量可能会非常大，需要考虑分库分表策略：

- **用户服务**：按用户ID范围分库分表
- **商品服务**：按商品ID范围分库分表
- **订单服务**：按订单创建时间分库，按用户ID分表
- **支付服务**：按支付时间分库分表
- **购物车服务**：按用户ID分库分表

## 5. API详细设计

### 5.1 API网关配置

```yaml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/api/user/**
          filters:
            - AuthenticationFilter
            - RateLimitFilter
        
        - id: product-service
          uri: lb://product-service
          predicates:
            - Path=/api/product/**
          filters:
            - RateLimitFilter
        
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/order/**
          filters:
            - AuthenticationFilter
            - RateLimitFilter
        
        - id: payment-service
          uri: lb://payment-service
          predicates:
            - Path=/api/pay/**
          filters:
            - AuthenticationFilter
            - RateLimitFilter
        
        - id: cart-service
          uri: lb://cart-service
          predicates:
            - Path=/api/cart/**
          filters:
            - AuthenticationFilter
            - RateLimitFilter
        
        - id: logistics-service
          uri: lb://logistics-service
          predicates:
            - Path=/api/logistics/**
          filters:
            - AuthenticationFilter
            - RateLimitFilter
        
        - id: comment-service
          uri: lb://comment-service
          predicates:
            - Path=/api/comment/**
          filters:
            - AuthenticationFilter
            - RateLimitFilter
        
        - id: recommend-service
          uri: lb://recommend-service
          predicates:
            - Path=/api/recommend/**
          filters:
            - RateLimitFilter
```

### 5.2 API统一响应格式

所有API返回统一的响应格式：

```json
{
  "code": 200,
  "message": "操作成功",
  "data": {}
}
```

**响应码说明**：
| 响应码 | 说明 |
|--------|------|
| 200 | 操作成功 |
| 400 | 请求参数错误 |
| 401 | 未授权 |
| 403 | 禁止访问 |
| 404 | 资源不存在 |
| 500 | 服务器内部错误 |

## 6. 业务流程设计

### 6.1 下单流程

1. 用户浏览商品，将商品加入购物车
2. 用户进入购物车，确认购买商品
3. 用户点击结算，进入订单确认页面
4. 用户选择收货地址和支付方式
5. 用户提交订单
6. 系统创建订单，锁定商品库存
7. 系统生成支付链接
8. 用户点击支付链接，跳转到支付页面
9. 用户完成支付
10. 系统更新订单状态为待发货
11. 系统通知商家发货

### 6.2 支付流程

1. 用户在订单确认页面选择支付方式
2. 系统调用支付服务，创建支付记录
3. 系统生成支付链接或二维码
4. 用户通过支付链接或扫描二维码进行支付
5. 第三方支付平台处理支付请求
6. 第三方支付平台回调系统，通知支付结果
7. 系统更新支付记录状态
8. 系统更新订单状态
9. 系统通知用户支付结果

### 6.3 发货流程

1. 商家登录后台，查看待发货订单
2. 商家选择订单，点击发货
3. 商家填写物流公司和物流单号
4. 系统更新订单状态为待收货
5. 系统创建物流信息
6. 系统通知用户订单已发货

### 6.4 收货流程

1. 物流公司配送商品
2. 用户收到商品
3. 用户登录系统，确认收货
4. 系统更新订单状态为待评价
5. 系统通知商家订单已收货

### 6.5 评价流程

1. 用户登录系统，查看待评价订单
2. 用户选择订单，点击评价
3. 用户填写评价内容和评分
4. 用户上传评价图片（可选）
5. 用户提交评价
6. 系统创建评价记录
7. 系统更新订单状态为已完成

## 7. 部署与运维详细设计

### 7.1 容器化部署

**Dockerfile示例**：

```dockerfile
FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

**Docker Compose示例**：

```yaml
version: '3.8'
services:
  nacos:
    image: nacos/nacos-server:v2.2.0
    ports:
      - "8848:8848"
    environment:
      - MODE=standalone
    volumes:
      - nacos-data:/home/nacos/data
  
  mysql:
    image: mysql:8.0
    ports:
      - "3306:3306"
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_DATABASE=seata
    volumes:
      - mysql-data:/var/lib/mysql
  
  redis:
    image: redis:7.0
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data
  
  user-service:
    build: ./user-service
    ports:
      - "8081:8080"
    depends_on:
      - nacos
      - mysql
      - redis
  
  product-service:
    build: ./product-service
    ports:
      - "8082:8080"
    depends_on:
      - nacos
      - mysql
      - redis
  
  order-service:
    build: ./order-service
    ports:
      - "8083:8080"
    depends_on:
      - nacos
      - mysql
      - redis
  
  payment-service:
    build: ./payment-service
    ports:
      - "8084:8080"
    depends_on:
      - nacos
      - mysql
  
  cart-service:
    build: ./cart-service
    ports:
      - "8085:8080"
    depends_on:
      - nacos
      - mysql
      - redis
  
  gateway:
    build: ./gateway
    ports:
      - "8080:8080"
    depends_on:
      - nacos
      - user-service
      - product-service
      - order-service
      - payment-service
      - cart-service

volumes:
  nacos-data:
  mysql-data:
  redis-data:
```

### 7.2 Kubernetes部署

**Deployment示例**：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: user-service:latest
        ports:
        - containerPort: 8080
        env:
        - name: NACOS_SERVER_ADDR
          value: nacos-server:8848
        - name: DB_HOST
          value: mysql:3306
        - name: REDIS_HOST
          value: redis:6379
```

**Service示例**：

```yaml
apiVersion: v1
kind: Service
metadata:
  name: user-service
spec:
  selector:
    app: user-service
  ports:
  - port: 8080
    targetPort: 8080
  type: ClusterIP
```

### 7.3 持续集成与持续部署

**Jenkins Pipeline示例**：

```groovy
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/ecommerce/user-service.git'
            }
        }
        stage('Build') {
            steps {
                sh 'mvn clean package -DskipTests'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t user-service:${BUILD_NUMBER} .'
                sh 'docker tag user-service:${BUILD_NUMBER} user-service:latest'
            }
        }
        stage('Push Docker Image') {
            steps {
                sh 'docker push user-service:${BUILD_NUMBER}'
                sh 'docker push user-service:latest'
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl set image deployment/user-service user-service=user-service:${BUILD_NUMBER}'
            }
        }
    }
}
```

## 8. 安全详细设计

### 8.1 认证与授权

**JWT配置**：

```yaml
jwt:
  secret: your-secret-key
  expiration: 86400 # 24小时
  header: Authorization
```

**RBAC配置**：

| 角色 | 权限 |
|------|------|
| admin | 所有权限 |
| merchant | 商品管理、订单管理 |
| user | 购物、下单、支付 |

### 8.2 数据安全

- **密码加密**：使用 BCrypt 对密码进行加密存储
- **敏感数据脱敏**：对手机号、邮箱等敏感信息进行脱敏处理
- **传输加密**：使用 HTTPS 进行数据传输
- **数据备份**：定期备份数据库，防止数据丢失

### 8.3 安全防护

- **WAF**：部署 Web 应用防火墙，防止 SQL 注入、XSS 等攻击
- **DDoS 防护**：配置 DDoS 防护，防止分布式拒绝服务攻击
- **入侵检测**：部署入侵检测系统，实时监控入侵行为
- **API 限流**：对 API 接口进行限流，防止恶意请求

## 9. 监控与告警详细设计

### 9.1 系统监控

**Prometheus 配置**：

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'user-service'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['user-service:8080']
  
  - job_name: 'product-service'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['product-service:8080']
  
  - job_name: 'order-service'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['order-service:8080']
  
  - job_name: 'payment-service'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['payment-service:8080']
  
  - job_name: 'cart-service'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['cart-service:8080']
```

### 9.2 服务监控

**Grafana 面板**：
- **服务健康状态**：显示各服务的健康状态
- **服务调用量**：显示各服务的调用量和响应时间
- **服务错误率**：显示各服务的错误率
- **数据库性能**：显示数据库的查询性能和连接数

### 9.3 告警机制

**告警规则**：
- **服务不可用**：服务连续3次健康检查失败
- **响应时间过长**：服务响应时间超过1秒
- **错误率过高**：服务错误率超过5%
- **数据库连接数**：数据库连接数超过80%

**告警渠道**：
- **邮件**：发送告警邮件给相关人员
- **短信**：发送告警短信给相关人员
- **微信**：发送告警消息到企业微信

## 10. 总结

本文档详细描述了基于微服务架构的电商平台系统设计实现。通过合理的服务拆分、详细的数据库设计、完整的API设计和业务流程设计，为开发团队提供了具体的技术实现指导。

系统采用了Spring Cloud Alibaba生态体系，包括Nacos、Sentinel、Seata、RocketMQ等组件，确保了系统的高可用性、可扩展性和可靠性。同时，通过容器化部署、持续集成与持续部署、安全防护和监控告警等措施，为系统的稳定运行提供了保障。

随着业务的发展，系统还需要不断优化和迭代，以适应不断变化的业务需求。希望本文档能够为电商平台的开发和运维提供有益的参考。