---
title: 如何确定页面的可用性时间，什么是PerformanceAPI？
pubDatetime: 2021-11-17T16:00:00.000Z
author: caorushizi
tags:
  - 性能优化
postSlug: c74d148033228b752e560b7ad6cf834c
description: >-
  PerformanceAPI用于精确度量、控制、增强浏览器的性能表现。这个API为测量网站性能，提供以前没有办法做到的精度。使用getTime来计算脚本耗时的缺点，首先，getTime方法（以及Dat
difficulty: 1
questionNumber: 11
source: >-
  https://fe.ecool.fun/topic-answer/f7192fdf-cbfe-4b62-96af-a614e6a37055?orderBy=updateTime&order=desc&tagId=20
---

Performance API 用于精确度量、控制、增强浏览器的性能表现。这个 API 为测量网站性能，提供以前没有办法做到的精度。

使用 getTime 来计算脚本耗时的缺点，首先，getTime 方法（以及 Date 对象的其他方法）都只能精确到毫秒级别（一秒的千分之一），想要得到更小的时间差别就无能为力了。其次，这种写法只能获取代码运行过程中的时间进度，无法知道一些后台事件的时间进度，比如浏览器用了多少时间从服务器加载网页。

为了解决这两个不足之处，ECMAScript 5 引入“高精度时间戳”这个 API，部署在 performance 对象上。它的精度可以达到 1 毫秒 的千分之一（1 秒的百万分之一）。

navigationStart：当前浏览器窗口的前一个网页关闭，发生 unload 事件时的 Unix 毫秒时间戳。如果没有前一个网页，则等于 fetchStart 属性。

loadEventEnd：返回当前网页 load 事件的回调函数运行结束时的 Unix 毫秒时间戳。如果该事件还没有发生，返回 0。

根据上面这些属性，可以计算出网页加载各个阶段的耗时。比如，网页加载整个过程的耗时的计算方法如下：

    var t = performance.timing;
    var pageLoadTime = t.loadEventEnd - t.navigationStart;
