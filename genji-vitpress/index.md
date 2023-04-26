---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "pixi-graph-genji"
  text: 一个以pixi.js基础实现的graph库
  image:
    src: https://724493602.github.io/imgs/logo.png
    alt: logo
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide/start
    - theme: alt
      text: Github
      icon: github
      link: https://github.com/724493602/pixi-graph-genji

features:
  - title: pixi.js
    details: 基于pixi.js,webgl渲染，速度快
  - title: layout
    details: 包含不同的布局方式,默认布局为d3 force
  - title: mode
    details: 可以切换不同的模式和行为
---


<style>
    :root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
}
</style>
