import comp from "D:/aaa/vuepress-starter/docs/.vuepress/.temp/pages/tag/java/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/java/\",\"title\":\"标签 Java\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"标签 Java\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Java\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
