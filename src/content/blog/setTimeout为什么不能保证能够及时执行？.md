---
title: setTimeout为什么不能保证能够及时执行？
pubDatetime: 2021-11-17T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 3826ff0692993c8f16051e97935e88e3
description: >-
  ![](https://i.loli.net/2021/11/17/tJw8inv6lC52YQc.png)预览>主线程从任务队列中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Even
difficulty: 1
questionNumber: 200
source: >-
  https://fe.ecool.fun/topic-answer/87af03ec-e30e-40fb-b193-b203d070c112?orderBy=updateTime&order=desc&tagId=10
---

![](https://i.loli.net/2021/11/17/tJw8inv6lC52YQc.png)

预览

> 主线程从任务队列中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为 Event Loop。

setTimeout 并不能保证执行的时间，是否及时执行取决于 JavaScript 线程是拥挤还是空闲。

浏览器的 JS 引擎遇到 setTimeout，拿走之后不会立即放入异步队列，同步任务执行之后，timer 模块会到设置时间之后放到异步队列中。js 引擎发现同步队列中没有要执行的东西了，即运行栈空了就从异步队列中读取，然后放到运行栈中执行。所以 setTimeout 可能会多了等待线程的时间。

这时 setTimeout 函数体就变成了运行栈中的执行任务，运行栈空了，再监听异步队列中有没有要执行的任务，如果有就继续执行，如此循环，就叫 Event Loop。
