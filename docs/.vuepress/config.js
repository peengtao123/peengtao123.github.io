module.exports = {
	title: '架构教程',
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
				text: '指南',
				link: '/guide/'
			},
			{
				text: 'jvm',
				link: '/jvm/'
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
			],
			'/guide/': [
				'',
				'contact',
				'about'
			],
			'/vue/': [
				'',
				'a'
			],
			'/': [
				''
			]
		}
	}
}
