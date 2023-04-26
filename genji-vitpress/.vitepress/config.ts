import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/docs/',
  outDir: '../docs',
  title: "pixi-graph-genji",
  description: "A pixi.js based on the realization of the relationship graph library",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '概览', link: '/guide/start' },
      // { text: 'API', link: '/api' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '快速上手', link: '/guide/start' },
            { text: '模式和行为', link: '/guide/mode' },
            { text: '事件监听', link: '/guide/events' },
            { text: '定制样式', link: '/guide/style' },
            { text: '在线例子', link: '/guide/example' },
            // { text: '大数据量', link: '/guide/big-data' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/724493602/pixi-graph-genji' }
    ]
  }
})
