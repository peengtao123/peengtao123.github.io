import comp from "D:/aaa/vuepress-starter/docs/.vuepress/.temp/pages/tag/技术/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/%E6%8A%80%E6%9C%AF/\",\"title\":\"标签 技术\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"标签 技术\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"技术\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
