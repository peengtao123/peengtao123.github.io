import comp from "D:/桌面/peengtao123.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/logo.webp\",\"actions\":[{\"text\":\"开始使用\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"介绍\",\"link\":\"https://www.runoob.com/docker/docker-desktop.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简单优先\",\"details\":\"最小的设置，以Markdown为中心的项目结构，帮助您专注于写作。\"},{\"title\":\"Vue驱动\",\"details\":\"享受Vue的开发体验，在Markdown中使用Vue组件，并使用Vue开发自定义主题。\"},{\"title\":\"高性能\",\"details\":\"VuePress为每个页面生成预渲染的静态HTML，并在页面加载后作为SPA运行。\"},{\"title\":\"主题\",\"details\":\"开箱即用提供默认主题。您也可以选择社区主题或创建自己的主题。\"},{\"title\":\"插件\",\"details\":\"灵活的插件API，允许插件为您的站点提供许多即插即用的功能。\"},{\"title\":\"打包器\",\"details\":\"默认打包器是Vite，同时也支持Webpack。选择您喜欢的！\"}],\"footer\":\"MIT 许可证 | 版权 © 2018-至今 VuePress 社区\"},\"headers\":[],\"git\":{\"updatedTime\":1775658103000,\"contributors\":[{\"name\":\"奔小康\",\"username\":\"\",\"email\":\"peengtao123@126.com\",\"commits\":4}],\"changelog\":[{\"hash\":\"e3f80db9fb0c9353a5cf25ee74068345be81f956\",\"time\":1775658103000,\"email\":\"peengtao123@126.com\",\"author\":\"奔小康\",\"message\":\"合理\"},{\"hash\":\"432a29158d43ef79fb113038a9c28a617621c31e\",\"time\":1775654318000,\"email\":\"peengtao123@126.com\",\"author\":\"奔小康\",\"message\":\"Update hero image path in README and index HTML\"},{\"hash\":\"d0301f8a241104b058167ac9c6687fb51c5cdf7e\",\"time\":1775654026000,\"email\":\"peengtao123@126.com\",\"author\":\"奔小康\",\"message\":\"init\"},{\"hash\":\"57c413d05d98e6095996ac25ea0adb9b22179bdc\",\"time\":1775647081000,\"email\":\"peengtao123@126.com\",\"author\":\"奔小康\",\"message\":\"init\"}]},\"filePathRelative\":\"README.md\"}")
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
