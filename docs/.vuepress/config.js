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
				text: 'docker',
				link: '/docker/'
			},
			{
				text: 'linux',
				link: '/linux/'
			},
			{
				text: 'vue',
				link: '/vue/'
			},
			{
				text: 'JVM',
				link: '/jvm/'
			},
			{
				text: 'bootstrap',
				link: '/bootstrap/'
			},
			{
				text: '外部链接',
				link: '/guide/'
			},
		],
		sidebar: {
			'/docker/': [
				'',
				'docker-architecture',
				'centos-docker-install',
				'docker-compose'
			],
			'/linux/': [
				'',
				'three',
				'four'
			],
			'/jvm/': [
				'',
				'contact',
				'about'
			]
		}
	}
}
