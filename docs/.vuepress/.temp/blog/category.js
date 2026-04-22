export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"技术\":{\"path\":\"/category/%E6%8A%80%E6%9C%AF/\",\"indexes\":[0]},\"开发环境\":{\"path\":\"/category/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/\",\"indexes\":[0]},\"Docker\":{\"path\":\"/category/docker/\",\"indexes\":[1,2]},\"容器化\":{\"path\":\"/category/%E5%AE%B9%E5%99%A8%E5%8C%96/\",\"indexes\":[3,1,2]},\"Kubernetes\":{\"path\":\"/category/kubernetes/\",\"indexes\":[3]},\"WSL\":{\"path\":\"/category/wsl/\",\"indexes\":[4]},\"Windows\":{\"path\":\"/category/windows/\",\"indexes\":[4]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"开发环境\":{\"path\":\"/tag/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/\",\"indexes\":[4,0]},\"配置\":{\"path\":\"/tag/%E9%85%8D%E7%BD%AE/\",\"indexes\":[0]},\"镜像源\":{\"path\":\"/tag/%E9%95%9C%E5%83%8F%E6%BA%90/\",\"indexes\":[0]},\"Docker\":{\"path\":\"/tag/docker/\",\"indexes\":[3,1,2,0]},\"Python\":{\"path\":\"/tag/python/\",\"indexes\":[0]},\"Java\":{\"path\":\"/tag/java/\",\"indexes\":[0]},\"容器\":{\"path\":\"/tag/%E5%AE%B9%E5%99%A8/\",\"indexes\":[3,1,2]},\"虚拟化\":{\"path\":\"/tag/%E8%99%9A%E6%8B%9F%E5%8C%96/\",\"indexes\":[2]},\"DevOps\":{\"path\":\"/tag/devops/\",\"indexes\":[2]},\"安装\":{\"path\":\"/tag/%E5%AE%89%E8%A3%85/\",\"indexes\":[1]},\"教程\":{\"path\":\"/tag/%E6%95%99%E7%A8%8B/\",\"indexes\":[1]},\"Kubernetes\":{\"path\":\"/tag/kubernetes/\",\"indexes\":[3]},\"入门\":{\"path\":\"/tag/%E5%85%A5%E9%97%A8/\",\"indexes\":[3]},\"WSL\":{\"path\":\"/tag/wsl/\",\"indexes\":[4]},\"Linux\":{\"path\":\"/tag/linux/\",\"indexes\":[4]},\"Windows\":{\"path\":\"/tag/windows/\",\"indexes\":[4]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

