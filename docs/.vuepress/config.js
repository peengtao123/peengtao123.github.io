module.exports = {
  title: '程序员进阶指南',
  description: '年薪百万之路',
  themeConfig: {
    nav: [
      {
        text: 'spring',
        items: [
            {text: 'dubbo',link: 'http://dubbo.apache.org/zh/'},
        ]
      },
      {
        text: '持久化',
        items: [
          { text: 'Mybatis', link: 'https://mybatis.org/mybatis-3/zh/index.html' },
          { text: 'Hibernate', link: '/Hibernate/' }
        ]
      },
      {
        text: '系统',
        items: [
          {text: 'docker菜鸟教程',link: 'https://www.runoob.com/docker/docker-tutorial.html'}
        ]
      },
      {
        text: '前端',
        items: [
          {text: 'webpack',link: 'https://webpack.docschina.org/'},
          {text: 'vue官网',link: 'https://cn.vuejs.org/'},
          {text: 'Vue CLI',link: 'https://cli.vuejs.org/zh/'},
          {text: 'Bootstrap',link: 'https://www.bootcss.com/'},
          {text: 'ES6入门教程',link: 'https://es6.ruanyifeng.com/'},
        ]
      },
      {
        text: '工具网站',
        items: [
          {text: 'webpack',link: 'https://webpack.docschina.org/'},
        ]
      },
      { text: 'github', link: 'http://github.com/' },
    ],
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'spring',   // 必要的
        path: '/spring/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/spring/springboot',
          '/guide/dubbo'
        ]
      },
      {
        title: '大数据',
        path: '/bigdata/',
        children: [
            '/bigdata/spark',
            '/bigdata/hive',
            '/bigdata/hbase'
        ]
      },
      {
        title: '持久化',
        path: '/data/',
        children: [
          '/data/mybatis',
          '/data/mysql',
          '/data/hibernate',
          '/data/redis',
          '/data/mongoDb'
        ],
        //initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },
      {
        title: '基础设施',
        path: '/application/',
        children: [
          '/application/docker',
          '/application/elk',
          '/application/k8s',
          '/application/linux',
          '/application/nexus',
          '/application/gitlab',
          '/application/jenkins',
          '/application/maven',
          '/application/git'
        ]
      }
    ]
  }
}
