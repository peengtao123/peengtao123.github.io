---
date: 2024-01-01
category:
  - Docker
  - 容器化
tag:
  - Docker
  - 容器
  - 虚拟化
  - DevOps
---

# Docker 入门指南

## 什么是 Docker？

Docker 是一个开源的容器化平台，可以将应用程序及其依赖打包到一个可移植的容器中。容器是轻量级的虚拟化解决方案，与传统虚拟机相比，具有更快的启动速度和更低的资源消耗。

### Docker vs 传统虚拟机

- **传统虚拟机**: 需要完整的操作系统，资源消耗大，启动慢
- **Docker 容器**: 共享宿主操作系统内核，轻量级，启动快速

## 安装 Docker

### Windows/macOS

访问 [Docker Desktop 官网](https://www.docker.com/products/docker-desktop) 下载并安装。

### Linux (Ubuntu/Debian)

```bash
# 更新包索引
sudo apt update

# 安装必要的包
sudo apt install apt-transport-https ca-certificates curl gnupg lsb-release

# 添加 Docker 的官方 GPG 密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# 设置稳定仓库
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 安装 Docker Engine
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io

# 启动 Docker 服务
sudo systemctl start docker
sudo systemctl enable docker
```

## Docker 核心概念

### 镜像 (Image)
镜像是容器的模板，包含运行应用程序所需的所有文件、依赖和配置。

### 容器 (Container)
容器是镜像的运行实例，可以启动、停止、删除。

### Dockerfile
用于定义如何构建 Docker 镜像的文本文件。

### Docker Hub
Docker 官方的镜像仓库，包含数千个预构建的镜像。

## 基本命令

### 镜像操作

```bash
# 搜索镜像
docker search nginx

# 下载镜像
docker pull nginx

# 查看本地镜像
docker images

# 删除镜像
docker rmi nginx
```

### 容器操作

```bash
# 运行容器
docker run -d -p 8080:80 --name my-nginx nginx

# 查看运行中的容器
docker ps

# 查看所有容器（包括停止的）
docker ps -a

# 停止容器
docker stop my-nginx

# 启动容器
docker start my-nginx

# 删除容器
docker rm my-nginx

# 进入容器
docker exec -it my-nginx /bin/bash
```

### 容器日志和信息

```bash
# 查看容器日志
docker logs my-nginx

# 查看容器详细信息
docker inspect my-nginx

# 查看容器资源使用
docker stats my-nginx
```

## 创建自定义镜像

### 编写 Dockerfile

```dockerfile
# 使用官方 Node.js 镜像作为基础镜像
FROM node:14-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制应用代码
COPY . .

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]
```

### 构建镜像

```bash
# 构建镜像
docker build -t my-app .

# 运行容器
docker run -d -p 3000:3000 my-app
```

## Docker Compose

Docker Compose 用于定义和运行多容器 Docker 应用程序。

### docker-compose.yml 示例

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: postgres:13
    environment:
      POSTGRES_PASSWORD: example
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### 使用 Compose

```bash
# 启动服务
docker-compose up -d

# 停止服务
docker-compose down

# 查看日志
docker-compose logs
```

## 数据持久化

### 卷 (Volumes)

```bash
# 创建命名卷
docker volume create my-volume

# 使用卷运行容器
docker run -d -v my-volume:/app/data --name my-container nginx

# 查看卷
docker volume ls
```

### 绑定挂载 (Bind Mounts)

```bash
# 将宿主目录挂载到容器
docker run -d -v /host/path:/container/path --name my-container nginx
```

## 网络

### 创建自定义网络

```bash
# 创建网络
docker network create my-network

# 连接容器到网络
docker run -d --network my-network --name container1 nginx
docker run -d --network my-network --name container2 nginx

# 查看网络
docker network ls
```

## 最佳实践

1. **使用官方镜像**: 优先使用官方维护的镜像
2. **保持镜像轻量化**: 使用 Alpine Linux 基础镜像，清理不必要的文件
3. **分层构建**: 合理利用 Docker 的分层缓存
4. **安全考虑**: 不要在容器中运行 root 用户，避免使用 latest 标签
5. **日志管理**: 配置适当的日志轮转和清理策略

## 总结

Docker 简化了应用程序的部署和分发过程。通过容器化，您可以确保应用程序在不同环境中的一致性。掌握这些基本概念和命令后，您就可以开始使用 Docker 来开发和部署应用程序了。

更多信息请参考 [Docker 官方文档](https://docs.docker.com/)。
