import comp from "D:/桌面/start/docs/.vuepress/.temp/pages/tag/tag-a/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/tag-a/\",\"title\":\"标签 tag A\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"标签 tag A\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"tag A\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
