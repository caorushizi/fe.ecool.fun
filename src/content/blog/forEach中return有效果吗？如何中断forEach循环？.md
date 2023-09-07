---
title: forEach中return有效果吗？如何中断forEach循环？
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 8b2b2a258004a943094d4aecccac25d6
description: >-
  在forEach中用return不会返回，函数会继续执行。中断方法----*使用try监视代码块，在需要中断的地方抛出异常。*官方推荐方法（替换方法）：用every和some替代forEach函数。*
difficulty: 2.5
questionNumber: 271
source: >-
  https://fe.ecool.fun/topic-answer/0356a1c0-f9a2-4fb1-98a5-fa409247fa8f?orderBy=updateTime&order=desc&tagId=10
---

在 forEach 中用 return 不会返回，函数会继续执行。

## 中断方法

- 使用 try 监视代码块，在需要中断的地方抛出异常。
- 官方推荐方法（替换方法）：用 every 和 some 替代 forEach 函数。
  - every 在碰到 return false 的时候，中止循环。
  - some 在碰到 return true 的时候，中止循环。
