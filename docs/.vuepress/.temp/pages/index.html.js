import comp from "D:/桌面/start/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"技术分享博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"技术分享博客\",\"heroImage\":\"/logo.webp\",\"actions\":[{\"text\":\"开始阅读\",\"link\":\"/timeline/\",\"type\":\"primary\"},{\"text\":\"浏览文章\",\"link\":\"/article/\",\"type\":\"secondary\"},{\"text\":\"分类\",\"link\":\"/category/\",\"type\":\"secondary\"},{\"text\":\"标签\",\"link\":\"/tag/\",\"type\":\"secondary\"},{\"text\":\"demo\",\"link\":\"https://peengtao123.github.io/demo/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"容器化技术\",\"details\":\"深入学习 Docker 和 Kubernetes，掌握现代容器化部署方案。\"},{\"title\":\"开发环境\",\"details\":\"搭建高效开发环境，配置镜像源和问题解决方案。\"},{\"title\":\"Linux 与 WSL\",\"details\":\"掌握 Windows Linux 子系统，提升命令行开发效率。\"},{\"title\":\"DevOps 实践\",\"details\":\"自动化部署、持续集成，打造高效开发流程。\"},{\"title\":\"持续更新\",\"details\":\"定期分享技术实践和经验总结，紧跟技术前沿。\"},{\"title\":\"简洁实用\",\"details\":\"以 Markdown 为中心，专注于内容和技术细节。\"}],\"footer\":\"MIT 许可证 | 版权 © 2024 技术分享博客\"},\"headers\":[],\"git\":{\"updatedTime\":1776865576000,\"contributors\":[{\"name\":\"奔小康\",\"username\":\"\",\"email\":\"peengtao123@126.com\",\"commits\":6}],\"changelog\":[{\"hash\":\"e9ad2ff06e4576efaefd47f5d1a9f8f2aeb364f6\",\"time\":1776865576000,\"email\":\"peengtao123@126.com\",\"author\":\"奔小康\",\"message\":\"aa\"},{\"hash\":\"9473f655fdec43956bf2a988101a3333bc7f51c6\",\"time\":1776862998000,\"email\":\"peengtao123@126.com\",\"author\":\"奔小康\",\"message\":\"refactor(docs): 重构博客内容结构和首页配置\"},{\"hash\":\"e3f80db9fb0c9353a5cf25ee74068345be81f956\",\"time\":1775658103000,\"email\":\"peengtao123@126.com\",\"author\":\"奔小康\",\"message\":\"合理\"},{\"hash\":\"432a29158d43ef79fb113038a9c28a617621c31e\",\"time\":1775654318000,\"email\":\"peengtao123@126.com\",\"author\":\"奔小康\",\"message\":\"Update hero image path in README and index HTML\"},{\"hash\":\"d0301f8a241104b058167ac9c6687fb51c5cdf7e\",\"time\":1775654026000,\"email\":\"peengtao123@126.com\",\"author\":\"奔小康\",\"message\":\"init\"},{\"hash\":\"57c413d05d98e6095996ac25ea0adb9b22179bdc\",\"time\":1775647081000,\"email\":\"peengtao123@126.com\",\"author\":\"奔小康\",\"message\":\"init\"}]},\"filePathRelative\":\"README.md\"}")
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
