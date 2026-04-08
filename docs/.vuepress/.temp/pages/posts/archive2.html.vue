<template><div><h1 id="开发者环境配置指南" tabindex="-1"><a class="header-anchor" href="#开发者环境配置指南"><span>开发者环境配置指南</span></a></h1>
<p>本文档收集了开发过程中常见的环境配置问题和解决方案，帮助开发者快速搭建和优化开发环境。</p>
<h2 id="python-环境配置" tabindex="-1"><a class="header-anchor" href="#python-环境配置"><span>Python 环境配置</span></a></h2>
<h3 id="pypi-镜像源配置" tabindex="-1"><a class="header-anchor" href="#pypi-镜像源配置"><span>PyPI 镜像源配置</span></a></h3>
<p>使用国内镜像源加速 Python 包安装：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 临时使用</span></span>
<span class="line">pip <span class="token function">install</span> <span class="token parameter variable">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple package-name</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 永久配置</span></span>
<span class="line">pip config <span class="token builtin class-name">set</span> global.index-url https://pypi.tuna.tsinghua.edu.cn/simple</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用镜像源" tabindex="-1"><a class="header-anchor" href="#常用镜像源"><span>常用镜像源</span></a></h3>
<ul>
<li><strong>清华大学</strong>: <code v-pre>https://pypi.tuna.tsinghua.edu.cn/simple</code></li>
<li><strong>阿里云</strong>: <code v-pre>https://mirrors.aliyun.com/pypi/simple/</code></li>
<li><strong>豆瓣</strong>: <code v-pre>https://pypi.douban.com/simple/</code></li>
</ul>
<h2 id="java-spring-开发环境" tabindex="-1"><a class="header-anchor" href="#java-spring-开发环境"><span>Java/Spring 开发环境</span></a></h2>
<h3 id="spring-initializr-连接问题" tabindex="-1"><a class="header-anchor" href="#spring-initializr-连接问题"><span>Spring Initializr 连接问题</span></a></h3>
<p>如果无法访问 <code v-pre>https://start.spring.io/</code>，可以使用以下替代方案：</p>
<ul>
<li><strong>阿里云 Spring Initializr</strong>: <code v-pre>https://start.aliyun.com</code></li>
<li><strong>本地搭建</strong>: 使用 Spring Boot CLI 或 IDE 插件</li>
</ul>
<h3 id="gradle-配置优化" tabindex="-1"><a class="header-anchor" href="#gradle-配置优化"><span>Gradle 配置优化</span></a></h3>
<h4 id="镜像配置" tabindex="-1"><a class="header-anchor" href="#镜像配置"><span>镜像配置</span></a></h4>
<p>修改 <code v-pre>gradle/wrapper/gradle-wrapper.properties</code>：</p>
<div class="language-properties line-numbers-mode" data-highlighter="prismjs" data-ext="properties"><pre v-pre><code><span class="line"><span class="token comment"># 原始配置（可能较慢）</span></span>
<span class="line"><span class="token key attr-name">distributionUrl</span><span class="token punctuation">=</span><span class="token value attr-value">https\://services.gradle.org/distributions/gradle-7.3.3-bin.zip</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 腾讯云镜像</span></span>
<span class="line"><span class="token key attr-name">distributionUrl</span><span class="token punctuation">=</span><span class="token value attr-value">https\://mirrors.cloud.tencent.com/gradle/gradle-8.11.1-bin.zip</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 阿里云镜像</span></span>
<span class="line"><span class="token key attr-name">distributionUrl</span><span class="token punctuation">=</span><span class="token value attr-value">https\://mirrors.aliyun.com/macports/distfiles/gradle/gradle-7.4.1-all.zip</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="版本选择技巧" tabindex="-1"><a class="header-anchor" href="#版本选择技巧"><span>版本选择技巧</span></a></h4>
<ul>
<li>选择比预期版本高但接近的版本</li>
<li>避免版本差异导致的问题</li>
<li>优先使用 LTS 版本</li>
</ul>
<h3 id="代理配置" tabindex="-1"><a class="header-anchor" href="#代理配置"><span>代理配置</span></a></h3>
<p>设置系统代理：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">"http://192.168.43.217:8580"</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token string">"http://192.168.43.217:8580"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spring-应用配置" tabindex="-1"><a class="header-anchor" href="#spring-应用配置"><span>Spring 应用配置</span></a></h3>
<p>开发环境配置示例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 启用本地配置文件</span></span>
<span class="line"><span class="token parameter variable">-Dspring.profiles.active</span><span class="token operator">=</span>native</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Git 配置仓库路径</span></span>
<span class="line"><span class="token parameter variable">-DGIT_REPO</span><span class="token operator">=</span>/projects/spring-petclinic-microservices-config</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-配置" tabindex="-1"><a class="header-anchor" href="#docker-配置"><span>Docker 配置</span></a></h2>
<h3 id="docker-desktop-配置" tabindex="-1"><a class="header-anchor" href="#docker-desktop-配置"><span>Docker Desktop 配置</span></a></h3>
<p>创建或编辑 <code v-pre>~/.docker/daemon.json</code>：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"builder"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"gc"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"defaultKeepStorage"</span><span class="token operator">:</span> <span class="token string">"20GB"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"experimental"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"registry-mirrors"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">"https://docker.m.daocloud.io"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"https://0c105db5188026850f80c001def654a0.mirror.swr.myhuaweicloud.com"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"https://noohub.ru"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"https://huecker.io"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"https://dockerhub.timeweb.cloud"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"https://5tqw56kt.mirror.aliyuncs.com"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"https://docker.1panel.live"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"http://mirrors.ustc.edu.cn/"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"http://mirror.azure.cn/"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"https://hub.rat.dev/"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"https://docker.ckyl.me/"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"https://docker.chenby.cn"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"https://docker.hpcloud.cloud"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"https://docker.xuanyuan.me"</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="备用镜像源" tabindex="-1"><a class="header-anchor" href="#备用镜像源"><span>备用镜像源</span></a></h3>
<p>如果上述镜像源不可用，可以尝试：</p>
<ul>
<li><code v-pre>https://dockerpull.pw</code></li>
<li><code v-pre>https://dockerhub.icu</code></li>
<li><code v-pre>https://register.librax.org</code></li>
<li><code v-pre>https://docker-0.unsee.tech</code></li>
<li><code v-pre>https://docker-cf.registry.cyou</code></li>
</ul>
<h3 id="minikube-配置" tabindex="-1"><a class="header-anchor" href="#minikube-配置"><span>Minikube 配置</span></a></h3>
<p>使用镜像加速启动 Minikube：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">minikube start --registry-mirror<span class="token operator">=</span>https://docker.xuanyuan.me</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="系统配置" tabindex="-1"><a class="header-anchor" href="#系统配置"><span>系统配置</span></a></h2>
<h3 id="centos-7-镜像源更换" tabindex="-1"><a class="header-anchor" href="#centos-7-镜像源更换"><span>CentOS 7 镜像源更换</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 备份原有配置</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">mv</span> /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载阿里云镜像</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 清理缓存并更新</span></span>
<span class="line"><span class="token function">sudo</span> yum clean all</span>
<span class="line"><span class="token function">sudo</span> yum makecache</span>
<span class="line"><span class="token function">sudo</span> yum repolist</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h2>
<h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h3>
<ol>
<li><strong>网络连接超时</strong>: 检查代理设置和防火墙配置</li>
<li><strong>镜像拉取失败</strong>: 尝试更换 Docker 镜像源</li>
<li><strong>包安装失败</strong>: 确认镜像源可用性</li>
<li><strong>Gradle 下载慢</strong>: 使用国内镜像源</li>
</ol>
<h3 id="调试技巧" tabindex="-1"><a class="header-anchor" href="#调试技巧"><span>调试技巧</span></a></h3>
<ul>
<li>检查网络连接：<code v-pre>ping mirrors.aliyun.com</code></li>
<li>查看代理设置：<code v-pre>env | grep -i proxy</code></li>
<li>测试镜像源：<code v-pre>curl -I https://pypi.tuna.tsinghua.edu.cn/</code></li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>良好的开发环境配置可以显著提高开发效率。本指南涵盖了 Python、Java、Docker 等常用技术的配置优化方法。</p>
<p><strong>建议</strong>：</p>
<ul>
<li>定期更新镜像源配置</li>
<li>备份重要的配置文件</li>
<li>根据网络环境选择最快的镜像源</li>
<li>关注官方文档的更新</li>
</ul>
<p>如果遇到其他配置问题，欢迎在评论区交流解决方案。</p>
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


