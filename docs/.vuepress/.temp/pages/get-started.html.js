import comp from "D:/桌面/chu/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"开始使用\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"页面\",\"slug\":\"页面\",\"link\":\"#页面\",\"children\":[]},{\"level\":2,\"title\":\"内容\",\"slug\":\"内容\",\"link\":\"#内容\",\"children\":[]},{\"level\":2,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]},{\"level\":2,\"title\":\"布局和自定义\",\"slug\":\"布局和自定义\",\"link\":\"#布局和自定义\",\"children\":[]}],\"git\":{\"updatedTime\":1775654026000,\"contributors\":[{\"name\":\"奔小康\",\"username\":\"\",\"email\":\"peengtao123@126.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"d0301f8a241104b058167ac9c6687fb51c5cdf7e\",\"time\":1775654026000,\"email\":\"peengtao123@126.com\",\"author\":\"奔小康\",\"message\":\"init\"},{\"hash\":\"57c413d05d98e6095996ac25ea0adb9b22179bdc\",\"time\":1775647081000,\"email\":\"peengtao123@126.com\",\"author\":\"奔小康\",\"message\":\"init\"}]},\"filePathRelative\":\"get-started.md\",\"excerpt\":\"\\n<p>这是一个普通页面，包含VuePress的基础知识。</p>\\n<h2>页面</h2>\\n<p>您可以在vuepress目录中添加Markdown文件，每个Markdown文件将被转换为您站点中的一个页面。</p>\\n<p>有关更多详细信息，请参见[路由][]。</p>\\n<h2>内容</h2>\\n<p>每个Markdown文件<a href=\\\"https://vuejs.press/guide/page.html#content\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">将被渲染为HTML，然后转换为Vue SFC</a>。</p>\\n<p>VuePress支持基本的Markdown语法和<a href=\\\"https://vuejs.press/guide/markdown.html#syntax-extensions\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">一些扩展</a>，您也可以在其中<a href=\\\"https://vuejs.press/guide/markdown.html#using-vue-in-markdown\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">使用Vue功能</a>。</p>\"}")
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
