---
date: 1998-01-02
category:
  - 技术
tag:
  - 技术
sticky: 13
---

# 常见技术问题

## Heading 

https://pypi.tuna.tsinghua.edu.cn/simple

解决https://start.spring.io/连接不上的问题 https://start.aliyun.com


比如 ：https\://services.gradle.org/distributions/gradle-7.3.3-bin.zip
gradle慢
distributionUrl=https\://mirrors.cloud.tencent.com/gradle/gradle-8.11.1-bin.zip

但是你电脑已经下载过gradle-7.4.1-all，选择版本的技巧是比预期的高，但是接近的版本，避免版本差异导致的其他问题

改成：https://mirrors.aliyun.com/macports/distfiles/gradle/gradle-7.4.1-all.zip 

192.168.43.217

export http_proxy="http://192.168.43.217:8580
export https_proxy="http://192.168.43.217:8580

-Dspring.profiles.active=native -DGIT_REPO=/projects/spring-petclinic-microservices-config





{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "registry-mirrors": [
    "https://docker.m.daocloud.io",
    "https://0c105db5188026850f80c001def654a0.mirror.swr.myhuaweicloud.com",
    "https://noohub.ru",
    "https://huecker.io",
    "https://dockerhub.timeweb.cloud",
    "https://5tqw56kt.mirror.aliyuncs.com",
    "https://docker.1panel.live",
    "http://mirrors.ustc.edu.cn/",
    "http://mirror.azure.cn/",
    "https://hub.rat.dev/",
    "https://docker.ckyl.me/",
    "https://docker.chenby.cn",
    "https://docker.hpcloud.cloud",
    "https://docker.m.daocloud.io"
  ]
}


	
https://dockerpull.pw
https://dockerhub.icu
https://hub.rat.dev
https://register.librax.org
https://docker-0.unsee.tech
https://docker-cf.registry.cyou

centos7更换阿里镜像库
sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
# 使用 curl 命令（通常系统自带）
sudo curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
sudo curl -o /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo

yum repolist



{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "registry-mirrors": [
	"https://docker.xuanyuan.me",
    "https://docker.m.daocloud.io",
    "https://huecker.io",
    "https://dockerhub.timeweb.cloud",
    "https://noohub.ru"
  ]
}

minikube start  --registry-mirror=https://docker.xuanyuan.me

docker pull docker.elastic.co/kibana/kibana-wolfi:9.3.2

docker pull docker.elastic.co/elasticsearch/elasticsearch-wolfi:9.3.2

minikube start --driver=virtualbox
minikube config set driver virtualbox

# 1. 手动从备用仓库拉取镜像
docker pull docker.1ms.run/kicbase/stable:v0.0.48

# 2. 启动时指定这个镜像
minikube start --driver=docker --base-image="docker.1ms.run/kicbase/stable:v0.0.48"

kubectl describe pod nginx