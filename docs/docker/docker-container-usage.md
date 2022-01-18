# Docker 容器使用
## Docker 客户端
## 容器使用
### 获取镜像
如果我们本地没有 ubuntu 镜像，我们可以使用 docker pull 命令来载入 ubuntu 镜像：
```shell script
docker pull ubuntu
```
### 启动容器
以下命令使用 ubuntu 镜像启动一个容器，参数为以命令行模式进入该容器：
```shell script
docker run -it ubuntu /bin/bash
```