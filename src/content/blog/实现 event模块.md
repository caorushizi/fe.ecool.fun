---
title: 实现 event模块
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 4c10a4dcd2339abdf35332cbd5e2a3ec
description: >-
  实现node中回调函数的机制，node中回调函数其实是内部使用了观察者模式。>观察者模式：定义了对象间一种一对多的依赖关系，当目标对象Subject发生改变时，所有依赖它的对象Observer都会得到
difficulty: 1
questionNumber: 81
source: >-
  https://fe.ecool.fun/topic-answer/3d3c752d-f969-44ce-acaf-18e43d52f069?orderBy=updateTime&order=desc&tagId=26
---

实现 node 中回调函数的机制，node 中回调函数其实是内部使用了观察者模式。

> 观察者模式：定义了对象间一种一对多的依赖关系，当目标对象 Subject 发生改变时，所有依赖它的对象 Observer 都会得到通知。
