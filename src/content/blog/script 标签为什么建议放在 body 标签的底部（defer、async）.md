---
title: script 标签为什么建议放在 body 标签的底部（defer、async）
pubDatetime: 2023-05-15T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: 5840322dc4321efd2d09f2f3b5b00920
description: >-
  因为浏览器在渲染html的时候是从上到下执行的，当遇到js文件的时候就会停止当前页面的渲染，转而去下载js文件。如果将script标签放在头部，在文件很大的情况下将导致首屏加载时间延长，影响用户体验。
difficulty: 1
questionNumber: 3
source: >-
  https://fe.ecool.fun/topic-answer/6f693f1d-67f6-4b01-aae8-dfeb47a444b5?orderBy=updateTime&order=desc&tagId=12
---

因为浏览器在渲染 html 的时候是从上到下执行的，当遇到 js 文件的时候就会停止当前页面的渲染，转而去下载 js 文件。

如果将 script 标签放在头部，在文件很大的情况下将导致首屏加载时间延长，影响用户体验。

## 解决办法

- 将 script 标签放在 body 的底部
- 通过 defer、async 属性将 js 文件转为异步加载
