---
title: CSSOM树和DOM树是同时解析的吗？
pubDatetime: 2022-04-09T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: 4b6a4955633cbd73da9a23e029923ea0
description: >-
  浏览器会下下载HTML解析页面生成DOM树，遇到CSS标签就开始解析CSS，这个过程不会阻塞，但是如果遇到了JS脚本，此时假如CSSOM还没有构建完，需要等待CSSOM构建完，再去执行JS脚本，然后再
difficulty: 1
questionNumber: 31
source: >-
  https://fe.ecool.fun/topic-answer/9f396d9a-43dc-4f39-a53a-3d25fa1cf348?orderBy=updateTime&order=desc&tagId=12
---

浏览器会下下载 HTML 解析页面生成 DOM 树，遇到 CSS 标签就开始解析 CSS，这个过程不会阻塞，但是如果遇到了 JS 脚本，此时假如 CSSOM 还没有构建完，需要等待 CSSOM 构建完，再去执行 JS 脚本，然后再执行 DOM 解析，此时会阻塞。
