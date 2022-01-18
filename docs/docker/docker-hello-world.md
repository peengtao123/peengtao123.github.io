# Docker Hello World
Docker 允许你在容器内运行应用程序， 使用 docker run 命令来在容器内运行一个应用程序。
输出Hello world
```shell script
docker run ubuntu:15.10 /bin/echo "Hello world"
```
各个参数解析：
* <b>docker</b>: Docker 的二进制执行文件。
* <b>run</b>: 与前面的 docker 组合来运行一个容器。
* <b>ubuntu</b>:15.10 指定要运行的镜像，Docker 首先从本地主机上查找镜像是否存在，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。
* <b>/bin/echo "Hello world"</b>: 在启动的容器里执行的命令

使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑