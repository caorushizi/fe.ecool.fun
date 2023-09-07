---
title: null是对象吗？为什么？
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 779986426c41bcfe826c5f2f93195491
description: >-
  null不是对象。虽然typeofnull会输出object，但是这只是JS存在的一个悠久Bug。在JS的最初版本中使用的是32位系统，为了性能考虑使用低位存储变量的类型信息，000开头代表是对象然而
difficulty: 1.5
questionNumber: 280
source: >-
  https://fe.ecool.fun/topic-answer/2caef7c7-6f12-4104-9a51-b360dc775357?orderBy=updateTime&order=desc&tagId=10
---

null 不是对象。

虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象然而 null 表示为全零，所以将它错误的判断为 object 。
