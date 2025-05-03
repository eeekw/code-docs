import { defineUserConfig } from 'vuepress'

import theme from './theme.js'

export default defineUserConfig({
  base: '/code-docs/',

  lang: 'zh-CN',
  title: 'EK',
  description: '「少废话，看代码。」',

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
})
