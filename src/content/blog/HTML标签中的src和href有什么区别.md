---
title: HTML标签中的src和href有什么区别
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: 2dd44fb7ca8097a34684cf664b73a006
description: >-
  *href是超文本引用，它是指向资源的位置，建立与目标文件的联系；*src目的是把资源下载到页面中；浏览器解析href不会阻塞对文档的处理（这就是官方建议使用link引入而不是@import的原因），
difficulty: 0.5
questionNumber: 53
source: >-
  https://fe.ecool.fun/topic-answer/53060972-481f-4025-a055-aa278d737fc1?orderBy=updateTime&order=desc&tagId=12
---

- href 是超文本引用，它是指向资源的位置，建立与目标文件的联系；
- src 目的是把资源下载到页面中；

浏览器解析 href 不会阻塞对文档的处理（这就是官方建议使用 link 引入而不是 @ import 的原因），src 会阻塞对文档的处理。
