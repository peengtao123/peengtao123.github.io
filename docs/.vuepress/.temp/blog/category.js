export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"Kubernetes\":{\"path\":\"/category/kubernetes/\",\"indexes\":[1]},\"容器化\":{\"path\":\"/category/%E5%AE%B9%E5%99%A8%E5%8C%96/\",\"indexes\":[13,1]},\"技术\":{\"path\":\"/category/%E6%8A%80%E6%9C%AF/\",\"indexes\":[0]},\"开发环境\":{\"path\":\"/category/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/\",\"indexes\":[0]},\"Docker\":{\"path\":\"/category/docker/\",\"indexes\":[13]},\"Category A\":{\"path\":\"/category/category-a/\",\"indexes\":[2,3,4,5,6,7,8,9,10,11,12]},\"Category B\":{\"path\":\"/category/category-b/\",\"indexes\":[2,3,4,5,6,7,8,10,11,12]},\"Category C\":{\"path\":\"/category/category-c/\",\"indexes\":[14,15]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"Kubernetes\":{\"path\":\"/tag/kubernetes/\",\"indexes\":[1]},\"Docker\":{\"path\":\"/tag/docker/\",\"indexes\":[13,0,1]},\"容器\":{\"path\":\"/tag/%E5%AE%B9%E5%99%A8/\",\"indexes\":[13,1]},\"入门\":{\"path\":\"/tag/%E5%85%A5%E9%97%A8/\",\"indexes\":[1]},\"开发环境\":{\"path\":\"/tag/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/\",\"indexes\":[0]},\"配置\":{\"path\":\"/tag/%E9%85%8D%E7%BD%AE/\",\"indexes\":[0]},\"镜像源\":{\"path\":\"/tag/%E9%95%9C%E5%83%8F%E6%BA%90/\",\"indexes\":[0]},\"Python\":{\"path\":\"/tag/python/\",\"indexes\":[0]},\"Java\":{\"path\":\"/tag/java/\",\"indexes\":[0]},\"虚拟化\":{\"path\":\"/tag/%E8%99%9A%E6%8B%9F%E5%8C%96/\",\"indexes\":[13]},\"DevOps\":{\"path\":\"/tag/devops/\",\"indexes\":[13]},\"tag C\":{\"path\":\"/tag/tag-c/\",\"indexes\":[2,3,4,10,11,12]},\"tag D\":{\"path\":\"/tag/tag-d/\",\"indexes\":[2,3,4,10,11,12]},\"tag A\":{\"path\":\"/tag/tag-a/\",\"indexes\":[5,6,7,8,9]},\"tag B\":{\"path\":\"/tag/tag-b/\",\"indexes\":[5,6,7,8,9]},\"tag E\":{\"path\":\"/tag/tag-e/\",\"indexes\":[14,15]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

