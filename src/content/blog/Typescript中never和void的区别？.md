---
title: Typescript中never和void的区别？
pubDatetime: 2021-07-10T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: d065251f7601363f17403d68829296b4
description: >-
  *void表示没有任何类型（可以被赋值为null和undefined）。*never表示一个不包含值的类型，即表示永远不存在的值。*拥有void返回值类型的函数能正常运行。拥有never返回值类型的函
difficulty: 1.5
questionNumber: 36
source: >-
  https://fe.ecool.fun/topic-answer/12d1bf82-0196-45ec-bfa4-7e71fdeeb632?orderBy=updateTime&order=desc&tagId=19
---

- void 表示没有任何类型（可以被赋值为 null 和 undefined）。
- never 表示一个不包含值的类型，即表示永远不存在的值。
- 拥有 void 返回值类型的函数能正常运行。拥有 never 返回值类型的函数无法正常返回，无法终止，或会抛出异常。
