module.exports = {
  title: '程序员进阶指南',
  description: '年薪百万之路',
  themeConfig: {
    nav: [
      {text: 'spring', link: '/spring/'},
      {
        text: '持久化',
        items: [
          { text: 'Mybatis', link: '/Mybatis/' },
          { text: 'Hibernate', link: '/Hibernate/' }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'spring',   // 必要的
        path: '/spring/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/spring/'
        ]
      },
      {
        title: '持久化',
        children: [
            '/guide/'
        ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}
