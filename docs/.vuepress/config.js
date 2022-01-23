module.exports = {
    title: '高手聚集地',
    description: '只是玩玩',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
    ],
    markdown: {
        lineNumbers: true
    },
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        nav: [
            {
                text: 'spring',
                link: '/spring/'
            },
            {
                text: '容器技术',
                link: '/docker/'
            },
            {
                text: 'dubbo',
                link: '/dubbo/'
            },
            {
                text: '书籍',
                link: '/books/'
            }
        ],
        sidebar: {
			'/spring/':[
                {
                    title: 'spring',
                    children: [
                        ['spring','spring']
                    ]
                },
                {
                    title: 'springBoot',
                    children: [
                        ['springboot','springboot']
                    ]
                },
                {
                    title: 'springCloud',
                    children: [
                        ['springCloud','springCloud']
                    ]
                }
			],
            '/docker/': [
                {
                    title: 'Docker 安装',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        ['ubuntu-docker-install', 'Ubuntu Docker 安装'],
                        ['centos-docker-install', 'CentOS Docker 安装']
                    ]
                },
                {
                    title: 'Docker 使用',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        ['docker-hello-world', 'Docker Hello World'],
                        ['docker-container-usage', 'Docker 容器使用']
                    ],
                    initialOpenGroupIndex: -1 // 可选的, 默认值是 0
                }
            ],
            '/books/': [
                ''
            ],
            '/dubbo/': [
                '',
                'three',
                'four'
            ],
            // fallback
            '/': [
                ''
            ]
        }
    }
}
