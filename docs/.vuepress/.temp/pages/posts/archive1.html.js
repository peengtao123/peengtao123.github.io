import comp from "D:/aaa/vuepress-starter/docs/.vuepress/.temp/pages/posts/archive1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/archive1.html\",\"title\":\"Kubernetes 入门手册\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-01-01T00:00:00.000Z\",\"category\":[\"Kubernetes\",\"容器化\"],\"tag\":[\"Kubernetes\",\"Docker\",\"容器\",\"入门\"],\"archive\":false},\"headers\":[{\"level\":2,\"title\":\"什么是 Kubernetes？\",\"slug\":\"什么是-kubernetes\",\"link\":\"#什么是-kubernetes\",\"children\":[{\"level\":3,\"title\":\"核心概念\",\"slug\":\"核心概念\",\"link\":\"#核心概念\",\"children\":[]}]},{\"level\":2,\"title\":\"安装 Kubernetes\",\"slug\":\"安装-kubernetes\",\"link\":\"#安装-kubernetes\",\"children\":[{\"level\":3,\"title\":\"使用 Minikube（本地开发）\",\"slug\":\"使用-minikube-本地开发\",\"link\":\"#使用-minikube-本地开发\",\"children\":[]},{\"level\":3,\"title\":\"使用 kubeadm（生产环境）\",\"slug\":\"使用-kubeadm-生产环境\",\"link\":\"#使用-kubeadm-生产环境\",\"children\":[]}]},{\"level\":2,\"title\":\"基本命令\",\"slug\":\"基本命令\",\"link\":\"#基本命令\",\"children\":[{\"level\":3,\"title\":\"kubectl 常用命令\",\"slug\":\"kubectl-常用命令\",\"link\":\"#kubectl-常用命令\",\"children\":[]}]},{\"level\":2,\"title\":\"创建第一个应用\",\"slug\":\"创建第一个应用\",\"link\":\"#创建第一个应用\",\"children\":[{\"level\":3,\"title\":\"部署 Nginx\",\"slug\":\"部署-nginx\",\"link\":\"#部署-nginx\",\"children\":[]}]},{\"level\":2,\"title\":\"扩展和更新\",\"slug\":\"扩展和更新\",\"link\":\"#扩展和更新\",\"children\":[{\"level\":3,\"title\":\"扩展应用\",\"slug\":\"扩展应用\",\"link\":\"#扩展应用\",\"children\":[]},{\"level\":3,\"title\":\"滚动更新\",\"slug\":\"滚动更新\",\"link\":\"#滚动更新\",\"children\":[]}]},{\"level\":2,\"title\":\"监控和调试\",\"slug\":\"监控和调试\",\"link\":\"#监控和调试\",\"children\":[{\"level\":3,\"title\":\"查看资源使用情况\",\"slug\":\"查看资源使用情况\",\"link\":\"#查看资源使用情况\",\"children\":[]},{\"level\":3,\"title\":\"调试 Pod\",\"slug\":\"调试-pod\",\"link\":\"#调试-pod\",\"children\":[]}]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"git\":{\"updatedTime\":1775647081000,\"contributors\":[{\"name\":\"奔小康\",\"username\":\"\",\"email\":\"peengtao123@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"57c413d05d98e6095996ac25ea0adb9b22179bdc\",\"time\":1775647081000,\"email\":\"peengtao123@126.com\",\"author\":\"奔小康\",\"message\":\"init\"}]},\"filePathRelative\":\"posts/archive1.md\",\"excerpt\":\"\\n<h2>什么是 Kubernetes？</h2>\\n<p>Kubernetes（简称 K8s）是一个开源的容器编排平台，用于自动化部署、扩展和管理容器化应用程序。它由 Google 设计并捐赠给 Cloud Native Computing Foundation (CNCF)。</p>\\n<h3>核心概念</h3>\\n<ul>\\n<li><strong>Pod</strong>: Kubernetes 中最小的部署单元，包含一个或多个容器</li>\\n<li><strong>Node</strong>: 工作机器，可以是物理机或虚拟机</li>\\n<li><strong>Cluster</strong>: 一组 Node 的集合，由 Master 节点管理</li>\\n<li><strong>Service</strong>: 定义一组 Pod 的访问方式</li>\\n<li><strong>Deployment</strong>: 声明式地管理 Pod 的副本</li>\\n</ul>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
