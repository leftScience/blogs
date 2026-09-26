import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'LeftScience',
  description: 'Java、Golang 与 Rust 的工程笔记。运行时、并发与工程边界。',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#f7f5f1' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/', activeMatch: '^/$' },
      { text: 'Java', link: '/java/', activeMatch: '/java/' },
      { text: 'Golang', link: '/golang/', activeMatch: '/golang/' },
      { text: 'Rust', link: '/rust/', activeMatch: '/rust/' }
    ],

    sidebar: {
      '/java/': [
        {
          text: 'Java',
          items: [
            { text: '概览', link: '/java/' }
            // 新文章放在 java/ 目录下，并在这里加一条链接
          ]
        }
      ],
      '/golang/': [
        {
          text: 'Golang',
          items: [
            { text: '概览', link: '/golang/' }
          ]
        }
      ],
      '/rust/': [
        {
          text: 'Rust',
          items: [
            { text: '概览', link: '/rust/' }
          ]
        }
      ]
    },

    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '更新于'
    },

    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色',
    darkModeSwitchTitle: '切换到深色',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除',
            displayDetails: '显示详情',
            backButtonTitle: '返回',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    notFound: {
      title: '页面不存在',
      quote: '这篇文档还没有写，或者链接写错了。',
      linkText: '回到首页',
      linkLabel: '回到首页'
    },

    footer: {
      message: 'Java · Golang · Rust',
      copyright: '© 2026 LeftScience'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leftScience/blogs' }
    ],

    editLink: {
      pattern: 'https://github.com/leftScience/blogs/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
})
