<template><div><h1 id="常见技术问题" tabindex="-1"><a class="header-anchor" href="#常见技术问题"><span>常见技术问题</span></a></h1>
<h2 id="heading" tabindex="-1"><a class="header-anchor" href="#heading"><span>Heading</span></a></h2>
<p>https://pypi.tuna.tsinghua.edu.cn/simple</p>
<p>解决https://start.spring.io/连接不上的问题 https://start.aliyun.com</p>
<p>比如 ：https://services.gradle.org/distributions/gradle-7.3.3-bin.zip
gradle慢
distributionUrl=https://mirrors.cloud.tencent.com/gradle/gradle-8.11.1-bin.zip</p>
<p>但是你电脑已经下载过gradle-7.4.1-all，选择版本的技巧是比预期的高，但是接近的版本，避免版本差异导致的其他问题</p>
<p>改成：https://mirrors.aliyun.com/macports/distfiles/gradle/gradle-7.4.1-all.zip</p>
<p>192.168.43.217</p>
<p>export http_proxy=&quot;http://192.168.43.217:8580
export https_proxy=&quot;http://192.168.43.217:8580</p>
<p>-Dspring.profiles.active=native -DGIT_REPO=/projects/spring-petclinic-microservices-config</p>
<p>{
&quot;builder&quot;: {
&quot;gc&quot;: {
&quot;defaultKeepStorage&quot;: &quot;20GB&quot;,
&quot;enabled&quot;: true
}
},
&quot;experimental&quot;: false,
&quot;registry-mirrors&quot;: [
&quot;https://docker.m.daocloud.io&quot;,
&quot;https://0c105db5188026850f80c001def654a0.mirror.swr.myhuaweicloud.com&quot;,
&quot;https://noohub.ru&quot;,
&quot;https://huecker.io&quot;,
&quot;https://dockerhub.timeweb.cloud&quot;,
&quot;https://5tqw56kt.mirror.aliyuncs.com&quot;,
&quot;https://docker.1panel.live&quot;,
&quot;http://mirrors.ustc.edu.cn/&quot;,
&quot;http://mirror.azure.cn/&quot;,
&quot;https://hub.rat.dev/&quot;,
&quot;https://docker.ckyl.me/&quot;,
&quot;https://docker.chenby.cn&quot;,
&quot;https://docker.hpcloud.cloud&quot;,
&quot;https://docker.m.daocloud.io&quot;
]
}</p>
<p>https://dockerpull.pw
https://dockerhub.icu
https://hub.rat.dev
https://register.librax.org
https://docker-0.unsee.tech
https://docker-cf.registry.cyou</p>
<p>centos7更换阿里镜像库
sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup</p>
<h1 id="使用-curl-命令-通常系统自带" tabindex="-1"><a class="header-anchor" href="#使用-curl-命令-通常系统自带"><span>使用 curl 命令（通常系统自带）</span></a></h1>
<p>sudo curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
sudo curl -o /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo</p>
<p>yum repolist</p>
<p>{
&quot;builder&quot;: {
&quot;gc&quot;: {
&quot;defaultKeepStorage&quot;: &quot;20GB&quot;,
&quot;enabled&quot;: true
}
},
&quot;experimental&quot;: false,
&quot;registry-mirrors&quot;: [
&quot;https://docker.xuanyuan.me&quot;,
&quot;https://docker.m.daocloud.io&quot;,
&quot;https://huecker.io&quot;,
&quot;https://dockerhub.timeweb.cloud&quot;,
&quot;https://noohub.ru&quot;
]
}</p>
<p>minikube start  --registry-mirror=https://docker.xuanyuan.me</p>
<p>docker pull docker.elastic.co/kibana/kibana-wolfi:9.3.2</p>
<p>docker pull docker.elastic.co/elasticsearch/elasticsearch-wolfi:9.3.2</p>
<p>minikube start --driver=virtualbox
minikube config set driver virtualbox</p>
<h1 id="_1-手动从备用仓库拉取镜像" tabindex="-1"><a class="header-anchor" href="#_1-手动从备用仓库拉取镜像"><span>1. 手动从备用仓库拉取镜像</span></a></h1>
<p>docker pull docker.1ms.run/kicbase/stable:v0.0.48</p>
<h1 id="_2-启动时指定这个镜像" tabindex="-1"><a class="header-anchor" href="#_2-启动时指定这个镜像"><span>2. 启动时指定这个镜像</span></a></h1>
<p>minikube start --driver=docker --base-image=&quot;docker.1ms.run/kicbase/stable:v0.0.48&quot;</p>
<p>kubectl describe pod nginx</p>
</div></template>


