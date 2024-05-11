import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Tampon-U-Need-2-Know/',
  title: " ",
  description: "Some information of tampon you need to know",
  // 配置头部（head）标签
  head: [
    // 添加一个自定义的 favicon,需要根据配置的 base 目录标签获取
    ['link', { rel: 'icon', href: '/Tampon-U-Need-2-Know/icon.png' }],
  ],
  themeConfig: {
    logo: '/element5.png',
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
      },
      {
        text: 'Summary',
        link: '/summary/index',
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
              text: 'Review-A',
              link: '/experience/unfold1'
            },
            {
              text: 'Review-B',
              link: '/experience/unfold2'
            },
            {
              text: 'Review-C',
              link: '/experience/unfold3'
            }]
          },
          {
            text: 'Summary',
            link: '/summary/'
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
