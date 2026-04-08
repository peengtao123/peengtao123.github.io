import comp from "D:/aaa/vuepress-starter/docs/.vuepress/.temp/pages/posts/archive2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/archive2.html\",\"title\":\"常见技术问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"1998-01-02T00:00:00.000Z\",\"category\":[\"技术\"],\"tag\":[\"技术\"],\"sticky\":13},\"headers\":[{\"level\":2,\"title\":\"Heading\",\"slug\":\"heading\",\"link\":\"#heading\",\"children\":[]}],\"git\":{\"updatedTime\":1775647081000,\"contributors\":[{\"name\":\"奔小康\",\"username\":\"\",\"email\":\"peengtao123@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"57c413d05d98e6095996ac25ea0adb9b22179bdc\",\"time\":1775647081000,\"email\":\"peengtao123@126.com\",\"author\":\"奔小康\",\"message\":\"init\"}]},\"filePathRelative\":\"posts/archive2.md\",\"excerpt\":\"\\n<h2>Heading</h2>\\n<p>https://pypi.tuna.tsinghua.edu.cn/simple</p>\\n<p>解决https://start.spring.io/连接不上的问题 https://start.aliyun.com</p>\\n<p>比如 ：https://services.gradle.org/distributions/gradle-7.3.3-bin.zip\\ngradle慢\\ndistributionUrl=https://mirrors.cloud.tencent.com/gradle/gradle-8.11.1-bin.zip</p>\\n<p>但是你电脑已经下载过gradle-7.4.1-all，选择版本的技巧是比预期的高，但是接近的版本，避免版本差异导致的其他问题</p>\"}")
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
