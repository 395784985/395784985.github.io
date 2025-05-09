import { defineConfig } from 'vitepress'

import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

// 动态生成侧边栏
import {set_sidebar} from './gen_sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    // Google adsense
    ['script', {
        async: 'async',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3661157653310294',
        crossorigin: 'anonymous',
    }],
  ],
  base: "/",
  title: "adong",
  description: "adong 个人主页",
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    codeTransformers: [transformerTwoslash()]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '个人主页',
    logo: 'logo.png',
    search: {
      provider: 'local', // 可以开启本地搜索
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '归档', items: [
        { text: '基础', link: '/01-basic/' },
        { text: 'Java', link: '/02-java/' },
      ]},
      { text: '笔记', link: '/03-notepad/' },
      { text: '小工具', items:[
        { text: '视频播放器', link: '/public/player/player.html' },
      ]},
    ],

    outline: {
      label: '文章目录'
    },

    sidebar: {
      // 调用 set_sidebar 动态生成侧边栏
      '/01-basic': set_sidebar('/01-basic'),
      '/02-java': set_sidebar('/02-java'),
      '/03-notepad': set_sidebar('/03-notepad'),
    },

    socialLinks: [
      { icon: 'github', link: 'https://395784985.github.io' }
    ],

    footer: {
      message: '终生学习，有教无类',
      copyright: '©2011-2025 adong. All Rights Reserved. '
    }
  }
})