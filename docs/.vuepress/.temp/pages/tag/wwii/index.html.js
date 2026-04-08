import comp from "D:/aaa/vuepress-starter/docs/.vuepress/.temp/pages/tag/wwii/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/wwii/\",\"title\":\"标签 WWII\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"标签 WWII\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"WWII\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
