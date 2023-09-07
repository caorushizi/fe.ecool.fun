---
title: Object.is() 与比较操作符 “===”、“==” 的区别？
pubDatetime: 2021-08-22T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 81fc2ad5cf4bbacfaa65a77a72a36a2f
description: >-
  *使用双等号（==）进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。*使用三等号（===）进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回false。*使用
difficulty: 2
questionNumber: 223
source: >-
  https://fe.ecool.fun/topic-answer/c29d2196-388f-48a1-9715-70f39cc92f4d?orderBy=updateTime&order=desc&tagId=10
---

- 使用双等号（==）进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。
- 使用三等号（===）进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。
- 使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的。
