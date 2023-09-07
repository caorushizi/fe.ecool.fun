---
title: 页面导入样式时，使用link和@import有什么区别？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: d20bc789e7627758264c1d85d10fdb6d
description: >-
  link属于HTML标签，而@import是css提供的；页面被加载时，link会同时被加载，而@import引用的css会等到页面被加载完再加载；@import只在IE5以上才能识别，而link是X
difficulty: 1
questionNumber: 48
source: >-
  https://fe.ecool.fun/topic-answer/d7e46f80-9878-4757-8535-ee962dca4ee6?orderBy=updateTime&order=desc&tagId=12
---

link 属于 HTML 标签，而@import 是 css 提供的；

页面被加载时，link 会同时被加载，而@import 引用的 css 会等到页面被加载完再加载；

@import 只在 IE5 以上才能识别，而 link 是 XHTML 标签，无兼容问题；

link 方式的样式的权重高于@import 的权重。
