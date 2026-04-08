import comp from "D:/aaa/vuepress-starter/docs/.vuepress/.temp/pages/tag/tag-d/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/tag-d/\",\"title\":\"标签 tag D\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"标签 tag D\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"tag D\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
