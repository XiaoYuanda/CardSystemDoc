import { defineUserConfig, defaultTheme } from 'vuepress'

export default {
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/zh/': {
      lang: 'zh-CN',
    },
  },
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
    repo: 'https://gitlab.com/foo/bar',
    repoLabel: 'github',
    selectLanguageText: '语言',
    // 默认主题配置
    navbar: [
      // NavbarItem
      {
        text: '介绍',
        link: '/zh/guide/introduction.html',
      },
      // NavbarGroup
      
      {
        text: '下载',
        children: [
          {text:'window', link:'/download/window.md'},
          {text:'Android', link:'/download/Android.md'},
          {text:'ios', link:'/download/ios.md'},
          {text:'在线使用', link:'/download/online.md'},
        ]
      },
      {
        text: '关于',
        children: [
          {text:'常见问题', link:'/about/faq.md'},
          {text:'团队', link:'/about/team.md'},
        ]
      },
      // 字符串 - 页面文件路径
      // '/bar/README.md',
    ],
    home: '/',
    docsRepo: 'https://github.com/xiaoyuanda/cardSystemDoc',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
    backToHome: '返回首页吧',
    contributorsText: '贡献者'
  })
}