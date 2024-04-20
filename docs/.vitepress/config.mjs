import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tampon Need To Know",
  description: "Some information of tampon you need to know",
  // 配置头部（head）标签
  head: [
    // 添加一个自定义的 favicon
    ['link', { rel: 'icon', href: '/assets/element5.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Introduction',
        link: '/intro/index',
        childern: [
          { text: 'sub', link: '/intro/sub' },
        ]
      },
      {
        text: 'Experiences',
        link: '/experience/index',
      }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          {
            text: 'Introduction',
            link: '/intro/'
          },
          {
            text: 'Experiences',
            link: '/experience/',
            collapsed: true,
            items: [{
              text: 'Review-a',
              link: '/experience/unfold1'
            },
            {
              text: 'Review-b',
              link: '/experience/unfold2'
            },
            {
              text: 'Review-c',
              link: '/experience/unfold3'
            }]
          }
        ]
      }
    ],

    footer: {
      copyright: 'Copyright © 2024-present Dorian'
    },

    // 访问外部资源网站
    socialLinks: [
      { icon: 'instagram', link: 'https://google.com/' }
    ],
  }
})
