---
title: vue 中 $route 和 $router 有什么区别？
pubDatetime: 2023-05-21T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: 23b050eb67541a1317d963b60a415983
description: >-
  在Vue.js中，$route和$router都是与路由相关的对象，但它们之间有以下区别：1.$route：$route是一个当前路由信息的对象，包括当前URL路径、查询参数、路径参数等信息。$rou
difficulty: 1
questionNumber: 8
source: >-
  https://fe.ecool.fun/topic-answer/7f131792-7ef0-47c3-b794-c03b5339867c?orderBy=updateTime&order=desc&tagId=14
---

在 Vue.js 中，$route 和 $router 都是与路由相关的对象，但它们之间有以下区别：

1.  $route：$route 是一个当前路由信息的对象，包括当前 URL 路径、查询参数、路径参数等信息。$route 对象是只读的，不可以直接修改其属性值，而需要通过路由跳转来更新。
2.  $router：$router 是 Vue Router 的实例对象，包括了许多用于导航控制和路由操作的 API，例如 push、replace、go、forward 等方法。$router 可以用来动态地改变 URL，从而实现页面间的无刷新跳转。

因此，$route 和 $router 在功能上有所不同，$route 主要用于获取当前路由信息，$router 则是用于进行路由操作，例如跳转到指定的路由、前进、后退等。通常来说，$route 和 $router 是紧密关联的，并且常常一起使用。
