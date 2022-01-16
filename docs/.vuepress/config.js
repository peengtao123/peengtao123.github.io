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
				text: 'Home',
				link: '/'
			},
			{
				text: 'Guide',
				link: '/guide/'
			},
			{
				text: 'External',
				link: 'https://google.com'
			},
		],
		sidebar: [
			'/',
			'/page-a',
			['/page-b', 'Explicit link text']
		]
	}
}
