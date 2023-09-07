---
title: 为什么JavaScript是单线程？
pubDatetime: 2021-07-31T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: f83c594c54fb9397b9b897ca0afa8aa0
description: >-
  JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，为什么JavaScript不能有多个线程呢？这样能提高效率啊。JavaScript的单线程，与它的用途有关。作为浏
difficulty: 1
questionNumber: 237
source: >-
  https://fe.ecool.fun/topic-answer/89dcd3da-6e76-4935-9232-ce96d2b801bb?orderBy=updateTime&order=desc&tagId=10
---

JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，为什么 JavaScript 不能有多个线程呢？这样能提高效率啊。

JavaScript 的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定 JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

所以，为了避免复杂性，从一诞生，JavaScript 就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM。所以，这个新标准并没有改变 JavaScript 单线程的本质。
