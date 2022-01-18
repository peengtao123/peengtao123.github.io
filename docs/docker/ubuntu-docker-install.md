# Ubuntu Docker 安装
## 使用官方安装脚本自动安装
安装命令如下：
```shell script
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```
也可以使用国内 daocloud 一键安装命令：
```shell script
curl -sSL https://get.daocloud.io/docker | sh
```
## 手动安装
### 卸载旧版本
Docker 的旧版本被称为 docker，docker.io 或 docker-engine 。如果已安装，请卸载它们：
```shell script
sudo apt-get remove docker docker-engine docker.io containerd runc
```
当前称为 Docker Engine-Community 软件包 docker-ce 。

安装 Docker Engine-Community，以下介绍两种方式。
### 使用 Docker 仓库进行安装
在新主机上首次安装 Docker Engine-Community 之前，需要设置 Docker 仓库。之后，您可以从仓库安装和更新 Docker 。
#### 设置仓库
更新 apt 包索引。
```shell script
sudo apt-get update
```
安装 apt 依赖包，用于通过HTTPS来获取仓库:
```shell script
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```
添加 Docker 的官方 GPG 密钥：
```shell script
curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
```
### 安装 Docker Engine-Community
