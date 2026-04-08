<template><div><h1 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用"><span>开始使用</span></a></h1>
<p>这是一个普通页面，包含VuePress的基础知识。</p>
<h2 id="页面" tabindex="-1"><a class="header-anchor" href="#页面"><span>页面</span></a></h2>
<p>您可以在vuepress目录中添加Markdown文件，每个Markdown文件将被转换为您站点中的一个页面。</p>
<p>有关更多详细信息，请参见[路由][]。</p>
<h2 id="内容" tabindex="-1"><a class="header-anchor" href="#内容"><span>内容</span></a></h2>
<p>每个Markdown文件<a href="https://vuejs.press/guide/page.html#content" target="_blank" rel="noopener noreferrer">将被渲染为HTML，然后转换为Vue SFC</a>。</p>
<p>VuePress支持基本的Markdown语法和<a href="https://vuejs.press/guide/markdown.html#syntax-extensions" target="_blank" rel="noopener noreferrer">一些扩展</a>，您也可以在其中<a href="https://vuejs.press/guide/markdown.html#using-vue-in-markdown" target="_blank" rel="noopener noreferrer">使用Vue功能</a>。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>VuePress使用<code v-pre>.vuepress/config.js</code>（或.ts）文件作为<a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">站点配置</a>，您可以使用它来配置您的站点。</p>
<p>对于<a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">客户端配置</a>，您可以创建<code v-pre>.vuepress/client.js</code>（或.ts）。</p>
<p>同时，您也可以使用<a href="https://vuejs.press/guide/page.html#frontmatter" target="_blank" rel="noopener noreferrer">frontmatter</a>为每个页面添加配置。</p>
<h2 id="布局和自定义" tabindex="-1"><a class="header-anchor" href="#布局和自定义"><span>布局和自定义</span></a></h2>
<p>以下是控制<code v-pre>@vuepress/theme-default</code>布局的常见配置：</p>
<ul>
<li>[导航栏][]</li>
<li>[侧边栏][]</li>
</ul>
<p>查看<a href="https://vuejs.press/reference/default-theme/" target="_blank" rel="noopener noreferrer">默认主题文档</a>以获取完整参考。</p>
<p>您可以使用<code v-pre>.vuepress/styles/index.scss</code>文件<a href="https://vuejs.press/reference/default-theme/styles.html#style-file" target="_blank" rel="noopener noreferrer">添加额外样式</a>。</p>
</div></template>


