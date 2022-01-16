module.exports = {
	title: '架构教程',
	description: 'Just playing around',
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
		nav: [{
				text: '首页',
				link: '/'
			},
			{
				text: '指导',
				link: '/guide/'
			},
			{
				text: '外部链接',
				link: 'https://google.com'
			},
		],
		sidebar: [
			['/guide/','指导'],
			['/page-a','sd'],
			['/page-b', '如何']
		]
	}
}
