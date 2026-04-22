---
date: 2024-01-15
category:
  - Docker
  - 容器化
tag:
  - Docker
  - 容器
  - 安装
  - 教程
---

# Docker 安装教程

## 前言

Docker 是一个开源的容器化平台，能够将应用程序及其依赖打包成轻量级的容器。与传统虚拟机相比，Docker 容器启动更快、占用资源更少，是现代软件开发和部署的重要工具。

本文详细介绍在 Windows、macOS 和 Linux 系统上安装 Docker 的方法。

## Windows 系统安装 Docker

### 系统要求

- Windows 10 或更高版本（专业版、企业版、教育版）
- 开启 WSL 2 功能
- 至少 4GB 内存
- 开启 BIOS 虚拟化支持

### 安装步骤

1. 访问 [Docker Desktop 官网](https://www.docker.com/products/docker-desktop) 下载安装包

2. 双击运行安装包 `Docker Desktop Installer.exe`

3. 勾选 "Use WSL 2 instead of Hyper-V" 选项（如需）

4. 等待安装完成，重启电脑

5. 启动 Docker Desktop，等待命令行提示 "Docker Desktop is running"

### 验证安装

打开 PowerShell 或命令提示符，输入：

```bash
docker --version
docker-compose --version
```

显示版本信息则表示安装成功。

### 更换镜像源

在国内使用 Docker 时，建议配置国内镜像加速。打开 Docker Desktop 设置，依次点击 "Docker Engine"，添加以下配置：

```json
{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn",
    "https://hub-mirror.c.163.com"
  ]
}
```

## macOS 系统安装 Docker

### 系统要求

- macOS 11 或更高版本
- 至少 4GB 内存

### 安装步骤

1. 访问 [Docker Desktop 官网](https://www.docker.com/products/docker-desktop) 下载 `Docker Desktop for Mac`

2. 双击下载的 `.dmg` 文件

3. 将 Docker 图标拖拽到应用程序文件夹

4. 启动 Docker Desktop

### 验证安装

打开终端，输入：

```bash
docker --version
docker-compose --version
```

## Linux 系统安装 Docker

### Ubuntu/Debian

```bash
# 更新包索引
sudo apt update

# 安装必要的前置软件包
sudo apt install apt-transport-https ca-certificates curl gnupg lsb-release

# 添加 Docker 官方 GPG 密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# 设置 Docker 稳定版仓库
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 安装 Docker Engine
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 启动 Docker 服务
sudo systemctl start docker
sudo systemctl enable docker
```

### CentOS/RHEL

```bash
# 安装必要的前置软件包
sudo yum install -y yum-utils

# 设置 Docker 仓库
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# 安装 Docker Engine
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 启动 Docker 服务
sudo systemctl start docker
sudo systemctl enable docker
```

### 验证安装

```bash
sudo docker --version
sudo docker-compose --version
```

### 非 root 用户运行 Docker

默认情况下，只有 root 用户才能运行 Docker 命令。将当前用户加入 docker 组即可免 sudo 运行：

```bash
sudo usermod -aG docker $USER
newgrp docker
```

## Docker 快速入门

### 常用命令

```bash
# 查看 Docker 版本信息
docker version

# 查看 Docker 系统信息
docker info

# 运行 Hello World 容器
docker run hello-world

# 搜索镜像
docker search nginx

# 下载镜像
docker pull nginx

# 查看本地镜像
docker images

# 运行容器
docker run -d -p 8080:80 --name my-nginx nginx

# 查看运行中的容器
docker ps

# 查看所有容器
docker ps -a

# 停止容器
docker stop my-nginx

# 启动已停止的容器
docker start my-nginx

# 删除容器
docker rm my-nginx

# 删除镜像
docker rmi nginx
```

### 使用 Docker Compose

Docker Compose 用于定义和运行多容器应用。创建 `docker-compose.yml` 文件：

```yaml
version: '3.8'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: password
```

运行命令：

```bash
# 启动服务
docker-compose up -d

# 查看服务状态
docker-compose ps

# 停止服务
docker-compose down
```

## 常见问题

### Docker Desktop 启动失败

检查 WSL 2 是否正确安装：

```bash
wsl --status
wsl --update
```

### 镜像下载缓慢

配置国内镜像加速源，或使用 VPN。

### 容器端口冲突

确保映射的主机端口未被占用，或更换其他端口。

## 总结

Docker 的安装过程相对简单，安装完成后即可开始使用容器化技术。后续可以学习Dockerfile 编写、镜像构建、微服务部署等进阶内容。

如需了解更多 Docker 相关内容，欢迎查阅本博客的其他文章。
