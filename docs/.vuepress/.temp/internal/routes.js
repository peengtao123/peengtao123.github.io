export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"开始使用"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"技术分享博客"} }],
  ["/posts/developer-env-guide.html", { loader: () => import(/* webpackChunkName: "posts_developer-env-guide.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/posts/developer-env-guide.html.js"), meta: {"_blog":{"title":"开发者环境配置指南","author":"","date":"2024-01-02T00:00:00.000Z","category":["技术","开发环境"],"tag":["开发环境","配置","镜像源","Docker","Python","Java"],"excerpt":"<p>开发者常用环境配置和问题解决方案合集</p>"},"title":"开发者环境配置指南"} }],
  ["/posts/docker-guide.html", { loader: () => import(/* webpackChunkName: "posts_docker-guide.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/posts/docker-guide.html.js"), meta: {"_blog":{"title":"Docker 入门指南","author":"","date":"2024-01-01T00:00:00.000Z","category":["Docker","容器化"],"tag":["Docker","容器","虚拟化","DevOps"],"excerpt":"\n<h2>什么是 Docker？</h2>\n<p>Docker 是一个开源的容器化平台，可以将应用程序及其依赖打包到一个可移植的容器中。容器是轻量级的虚拟化解决方案，与传统虚拟机相比，具有更快的启动速度和更低的资源消耗。</p>\n<h3>Docker vs 传统虚拟机</h3>\n<ul>\n<li><strong>传统虚拟机</strong>: 需要完整的操作系统，资源消耗大，启动慢</li>\n<li><strong>Docker 容器</strong>: 共享宿主操作系统内核，轻量级，启动快速</li>\n</ul>\n<h2>安装 Docker</h2>\n<h3>Windows/macOS</h3>"},"title":"Docker 入门指南"} }],
  ["/posts/docker-install.html", { loader: () => import(/* webpackChunkName: "posts_docker-install.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/posts/docker-install.html.js"), meta: {"_blog":{"title":"Docker 安装教程","author":"","date":"2024-01-15T00:00:00.000Z","category":["Docker","容器化"],"tag":["Docker","容器","安装","教程"],"excerpt":"\n<h2>前言</h2>\n<p>Docker 是一个开源的容器化平台，能够将应用程序及其依赖打包成轻量级的容器。与传统虚拟机相比，Docker 容器启动更快、占用资源更少，是现代软件开发和部署的重要工具。</p>\n<p>本文详细介绍在 Windows、macOS 和 Linux 系统上安装 Docker 的方法。</p>\n<h2>Windows 系统安装 Docker</h2>\n<h3>系统要求</h3>\n<ul>\n<li>Windows 10 或更高版本（专业版、企业版、教育版）</li>\n<li>开启 WSL 2 功能</li>\n<li>至少 4GB 内存</li>\n<li>开启 BIOS 虚拟化支持</li>\n</ul>"},"title":"Docker 安装教程"} }],
  ["/posts/kubernetes-guide.html", { loader: () => import(/* webpackChunkName: "posts_kubernetes-guide.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/posts/kubernetes-guide.html.js"), meta: {"_blog":{"title":"Kubernetes 入门手册","author":"","date":"2024-01-01T00:00:00.000Z","category":["Kubernetes","容器化"],"tag":["Kubernetes","Docker","容器","入门"],"excerpt":"\n<h2>什么是 Kubernetes？</h2>\n<p>Kubernetes（简称 K8s）是一个开源的容器编排平台，用于自动化部署、扩展和管理容器化应用程序。它由 Google 设计并捐赠给 Cloud Native Computing Foundation (CNCF)。</p>\n<h3>核心概念</h3>\n<ul>\n<li><strong>Pod</strong>: Kubernetes 中最小的部署单元，包含一个或多个容器</li>\n<li><strong>Node</strong>: 工作机器，可以是物理机或虚拟机</li>\n<li><strong>Cluster</strong>: 一组 Node 的集合，由 Master 节点管理</li>\n<li><strong>Service</strong>: 定义一组 Pod 的访问方式</li>\n<li><strong>Deployment</strong>: 声明式地管理 Pod 的副本</li>\n</ul>"},"title":"Kubernetes 入门手册"} }],
  ["/posts/wsl-guide.html", { loader: () => import(/* webpackChunkName: "posts_wsl-guide.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/posts/wsl-guide.html.js"), meta: {"_blog":{"title":"WSL 入门使用教程","author":"","date":"2024-01-20T00:00:00.000Z","category":["WSL","Windows"],"tag":["WSL","Linux","Windows","开发环境"],"excerpt":"\n<h2>什么是 WSL？</h2>\n<p>WSL（Windows Subsystem for Linux）是 Windows 系统提供的 Linux 子系统，可以在 Windows 中原生运行 Linux 二进制可执行文件。与传统虚拟机不同，WSL 与 Windows 共享文件系统，启动速度快，资源占用少，非常适合开发者在 Windows 环境下使用 Linux 命令行工具。</p>\n<h2>WSL 2 vs WSL 1</h2>\n<table>\n<thead>\n<tr>\n<th>特性</th>\n<th>WSL 1</th>\n<th>WSL 2</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>架构</td>\n<td>Linux 系统调用转换层</td>\n<td>轻量级虚拟机</td>\n</tr>\n<tr>\n<td>性能</td>\n<td>文件 I/O 更快</td>\n<td>系统调用兼容性好</td>\n</tr>\n<tr>\n<td>文件 I/O</td>\n<td>更快</td>\n<td>稍慢</td>\n</tr>\n<tr>\n<td>Docker 支持</td>\n<td>需额外配置</td>\n<td>原生支持</td>\n</tr>\n<tr>\n<td>内存占用</td>\n<td>更少</td>\n<td>稍多</td>\n</tr>\n</tbody>\n</table>"},"title":"WSL 入门使用教程"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"分类"} }],
  ["/category/%E6%8A%80%E6%9C%AF/", { loader: () => import(/* webpackChunkName: "category_技术_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/category/技术/index.html.js"), meta: {"title":"分类 技术"} }],
  ["/category/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/", { loader: () => import(/* webpackChunkName: "category_开发环境_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/category/开发环境/index.html.js"), meta: {"title":"分类 开发环境"} }],
  ["/category/docker/", { loader: () => import(/* webpackChunkName: "category_docker_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/category/docker/index.html.js"), meta: {"title":"分类 Docker"} }],
  ["/category/%E5%AE%B9%E5%99%A8%E5%8C%96/", { loader: () => import(/* webpackChunkName: "category_容器化_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/category/容器化/index.html.js"), meta: {"title":"分类 容器化"} }],
  ["/category/kubernetes/", { loader: () => import(/* webpackChunkName: "category_kubernetes_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/category/kubernetes/index.html.js"), meta: {"title":"分类 Kubernetes"} }],
  ["/category/wsl/", { loader: () => import(/* webpackChunkName: "category_wsl_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/category/wsl/index.html.js"), meta: {"title":"分类 WSL"} }],
  ["/category/windows/", { loader: () => import(/* webpackChunkName: "category_windows_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/category/windows/index.html.js"), meta: {"title":"分类 Windows"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"标签"} }],
  ["/tag/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/", { loader: () => import(/* webpackChunkName: "tag_开发环境_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/开发环境/index.html.js"), meta: {"title":"标签 开发环境"} }],
  ["/tag/%E9%85%8D%E7%BD%AE/", { loader: () => import(/* webpackChunkName: "tag_配置_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/配置/index.html.js"), meta: {"title":"标签 配置"} }],
  ["/tag/%E9%95%9C%E5%83%8F%E6%BA%90/", { loader: () => import(/* webpackChunkName: "tag_镜像源_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/镜像源/index.html.js"), meta: {"title":"标签 镜像源"} }],
  ["/tag/docker/", { loader: () => import(/* webpackChunkName: "tag_docker_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/docker/index.html.js"), meta: {"title":"标签 Docker"} }],
  ["/tag/python/", { loader: () => import(/* webpackChunkName: "tag_python_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/python/index.html.js"), meta: {"title":"标签 Python"} }],
  ["/tag/java/", { loader: () => import(/* webpackChunkName: "tag_java_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/java/index.html.js"), meta: {"title":"标签 Java"} }],
  ["/tag/%E5%AE%B9%E5%99%A8/", { loader: () => import(/* webpackChunkName: "tag_容器_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/容器/index.html.js"), meta: {"title":"标签 容器"} }],
  ["/tag/%E8%99%9A%E6%8B%9F%E5%8C%96/", { loader: () => import(/* webpackChunkName: "tag_虚拟化_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/虚拟化/index.html.js"), meta: {"title":"标签 虚拟化"} }],
  ["/tag/devops/", { loader: () => import(/* webpackChunkName: "tag_devops_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/devops/index.html.js"), meta: {"title":"标签 DevOps"} }],
  ["/tag/%E5%AE%89%E8%A3%85/", { loader: () => import(/* webpackChunkName: "tag_安装_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/安装/index.html.js"), meta: {"title":"标签 安装"} }],
  ["/tag/%E6%95%99%E7%A8%8B/", { loader: () => import(/* webpackChunkName: "tag_教程_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/教程/index.html.js"), meta: {"title":"标签 教程"} }],
  ["/tag/kubernetes/", { loader: () => import(/* webpackChunkName: "tag_kubernetes_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/kubernetes/index.html.js"), meta: {"title":"标签 Kubernetes"} }],
  ["/tag/%E5%85%A5%E9%97%A8/", { loader: () => import(/* webpackChunkName: "tag_入门_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/入门/index.html.js"), meta: {"title":"标签 入门"} }],
  ["/tag/wsl/", { loader: () => import(/* webpackChunkName: "tag_wsl_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/wsl/index.html.js"), meta: {"title":"标签 WSL"} }],
  ["/tag/linux/", { loader: () => import(/* webpackChunkName: "tag_linux_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/linux/index.html.js"), meta: {"title":"标签 Linux"} }],
  ["/tag/windows/", { loader: () => import(/* webpackChunkName: "tag_windows_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/tag/windows/index.html.js"), meta: {"title":"标签 Windows"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"文章"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/桌面/start/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"时间线"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
