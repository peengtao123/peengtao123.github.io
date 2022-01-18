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
### 导出和导入容器
#### 导出容器
如果要导出本地某个容器，可以使用 docker export 命令。
```shell script
docker export 1e560fca3906 > ubuntu.tar
```
#### 导入容器快照
可以使用 docker import 从容器快照文件中再导入为镜像，以下实例将快照文件 ubuntu.tar 导入到镜像 test/ubuntu:v1:
```shell script
cat docker/ubuntu.tar | docker import - test/ubuntu:v1
```
此外，也可以通过指定 URL 或者某个目录来导入，例如：
```shell script
docker import http://example.com/exampleimage.tgz example/imagerepo 
```