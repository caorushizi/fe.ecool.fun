---
title: webpack、rollup、parcel优劣
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 工程化
postSlug: 96e031021f9e7027dc109d8390c8a844
description: >-
  *webpack适用于大型复杂的前端站点构建:webpack有强大的loader和插件生态,打包后的文件实际上就是一个立即执行函数，这个立即执行函数接收一个参数，这个参数是模块对象，键为各个模块的路径
difficulty: 1
questionNumber: 29
source: >-
  https://fe.ecool.fun/topic-answer/9dc34a20-34be-4c0f-a401-71d936cf4958?orderBy=updateTime&order=desc&tagId=28
---

- webpack 适用于大型复杂的前端站点构建: webpack 有强大的 loader 和插件生态,打包后的文件实际上就是一个立即执行函数，这个立即执行函数接收一个参数，这个参数是模块对象，键为各个模块的路径，值为模块内容。立即执行函数内部则处理模块之间的引用，执行模块等,这种情况更适合文件依赖复杂的应用开发.
- rollup 适用于基础库的打包，如 vue、d3 等: Rollup 就是将各个模块打包进一个文件中，并且通过 Tree-shaking 来删除无用的代码,可以最大程度上降低代码体积,但是 rollup 没有 webpack 如此多的的如代码分割、按需加载等高级功能，其更聚焦于库的打包，因此更适合库的开发.
- parcel 适用于简单的实验性项目: 他可以满足低门槛的快速看到效果,但是生态差、报错信息不够全面都是他的硬伤，除了一些玩具项目或者实验项目不建议使用
