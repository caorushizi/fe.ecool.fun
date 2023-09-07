---
title: 如何提高webpack的打包速度
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 工程化
postSlug: 90fe1763553fa34539b664b777d08c73
description: >-
  *happypack:利用进程并行编译loader,利用缓存来使得rebuild更快,遗憾的是作者表示已经不会继续开发此项目,类似的替代者是[thread-loader](https://links.
difficulty: 1
questionNumber: 24
source: >-
  https://fe.ecool.fun/topic-answer/c4765da3-f74e-4190-b3c0-7b66f5cd05b0?orderBy=updateTime&order=desc&tagId=28
---

- happypack: 利用进程并行编译 loader,利用缓存来使得 rebuild 更快,遗憾的是作者表示已经不会继续开发此项目,类似的替代者是[thread-loader](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fwebpack-contrib%2Fthread-loader)
- [外部扩展(externals)](https://links.jianshu.com/go?to=https%3A%2F%2Fwebpack.docschina.org%2Fconfiguration%2Fexternals%2F): 将不怎么需要更新的第三方库脱离 webpack 打包，不被打入 bundle 中，从而减少打包时间,比如 jQuery 用 script 标签引入
- dll: 采用 webpack 的 DllPlugin 和 DllReferencePlugin 引入 dll，让一些基本不会改动的代码先打包成静态资源,避免反复编译浪费时间
- 利用缓存: `webpack.cache`、babel-loader.cacheDirectory、`HappyPack.cache`都可以利用缓存提高 rebuild 效率
- 缩小文件搜索范围: 比如 babel-loader 插件,如果你的文件仅存在于 src 中,那么可以`include: path.resolve(__dirname, 'src')`,当然绝大多数情况下这种操作的提升有限,除非不小心 build 了 node_modules 文件
