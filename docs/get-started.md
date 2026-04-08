# 开始使用

这是一个普通页面，包含VuePress的基础知识。

## 页面

您可以在vuepress目录中添加Markdown文件，每个Markdown文件将被转换为您站点中的一个页面。

有关更多详细信息，请参见[路由][]。

## 内容

每个Markdown文件[将被渲染为HTML，然后转换为Vue SFC][content]。

VuePress支持基本的Markdown语法和[一些扩展][synatex-extensions]，您也可以在其中[使用Vue功能][vue-feature]。

## 配置

VuePress使用`.vuepress/config.js`（或.ts）文件作为[站点配置][config]，您可以使用它来配置您的站点。

对于[客户端配置][client-config]，您可以创建`.vuepress/client.js`（或.ts）。

同时，您也可以使用[frontmatter][]为每个页面添加配置。

## 布局和自定义

以下是控制`@vuepress/theme-default`布局的常见配置：

- [导航栏][]
- [侧边栏][]

查看[默认主题文档][default-theme]以获取完整参考。

您可以使用`.vuepress/styles/index.scss`文件[添加额外样式][style]。

[routing]: https://vuejs.press/guide/page.html#routing
[content]: https://vuejs.press/guide/page.html#content
[synatex-extensions]: https://vuejs.press/guide/markdown.html#syntax-extensions
[vue-feature]: https://vuejs.press/guide/markdown.html#using-vue-in-markdown
[config]: https://vuejs.press/guide/configuration.html#client-config-file
[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
[frontmatter]: https://vuejs.press/guide/page.html#frontmatter
[navbar]: https://vuejs.press/reference/default-theme/config.html#navbar
[sidebar]: https://vuejs.press/reference/default-theme/config.html#sidebar
[default-theme]: https://vuejs.press/reference/default-theme/
[style]: https://vuejs.press/reference/default-theme/styles.html#style-file
