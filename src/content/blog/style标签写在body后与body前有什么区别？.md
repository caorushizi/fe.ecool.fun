---
title: style标签写在body后与body前有什么区别？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: 455e1e0f4505c653baba6ff5f5e0b004
description: >-
  页面加载自上而下当然是先加载样式。写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成
difficulty: 2
questionNumber: 43
source: >-
  https://fe.ecool.fun/topic-answer/14912aa6-d4d4-4af9-ad73-e7641f3a6212?orderBy=updateTime&order=desc&tagId=12
---

页面加载自上而下 当然是先加载样式。

写在 body 标签后由于浏览器以逐行方式对 HTML 文档进行解析，当解析到写在尾部的样式表（外联或写在 style 标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在 windows 的 IE 下可能会出现 FOUC 现象（即样式失效导致的页面闪烁问题）
