---
date: 2024-01-01
category:
  - Kubernetes
  - 容器化
tag:
  - Kubernetes
  - Docker
  - 容器
  - 入门
archive: false
---

# Kubernetes 入门手册

## 什么是 Kubernetes？

Kubernetes（简称 K8s）是一个开源的容器编排平台，用于自动化部署、扩展和管理容器化应用程序。它由 Google 设计并捐赠给 Cloud Native Computing Foundation (CNCF)。

### 核心概念

- **Pod**: Kubernetes 中最小的部署单元，包含一个或多个容器
- **Node**: 工作机器，可以是物理机或虚拟机
- **Cluster**: 一组 Node 的集合，由 Master 节点管理
- **Service**: 定义一组 Pod 的访问方式
- **Deployment**: 声明式地管理 Pod 的副本

## 安装 Kubernetes

### 使用 Minikube（本地开发）

Minikube 可以在本地运行单节点 Kubernetes 集群。

```bash
# 安装 Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# 启动集群
minikube start

# 检查状态
minikube status
```

### 使用 kubeadm（生产环境）

对于多节点集群，使用 kubeadm：

```bash
# 初始化主节点
sudo kubeadm init

# 配置 kubectl
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

## 基本命令

### kubectl 常用命令

```bash
# 查看集群信息
kubectl cluster-info

# 查看节点
kubectl get nodes

# 查看 Pod
kubectl get pods

# 查看服务
kubectl get services

# 创建资源
kubectl create -f deployment.yaml

# 应用配置
kubectl apply -f deployment.yaml

# 查看日志
kubectl logs <pod-name>

# 进入容器
kubectl exec -it <pod-name> -- /bin/bash
```

## 创建第一个应用

### 部署 Nginx

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.21
        ports:
        - containerPort: 80
```

```bash
# 应用部署
kubectl apply -f nginx-deployment.yaml

# 暴露服务
kubectl expose deployment nginx-deployment --type=LoadBalancer --port=80

# 查看服务
kubectl get services
```

## 扩展和更新

### 扩展应用

```bash
# 扩展到 5 个副本
kubectl scale deployment nginx-deployment --replicas=5
```

### 滚动更新

```bash
# 更新镜像版本
kubectl set image deployment/nginx-deployment nginx=nginx:1.22
```

## 监控和调试

### 查看资源使用情况

```bash
# 查看 Pod 资源使用
kubectl top pods

# 查看节点资源使用
kubectl top nodes
```

### 调试 Pod

```bash
# 查看 Pod 详情
kubectl describe pod <pod-name>

# 查看事件
kubectl get events --sort-by=.metadata.creationTimestamp
```

## 总结

Kubernetes 提供了强大的容器编排能力，帮助开发者轻松管理复杂的分布式应用。通过学习这些基本概念和命令，您可以开始在 Kubernetes 上部署和管理您的应用程序。

更多信息请参考 [官方文档](https://kubernetes.io/docs/)。
