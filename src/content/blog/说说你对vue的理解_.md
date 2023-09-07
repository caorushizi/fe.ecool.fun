---
title: 说说你对vue的理解?
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: e6f1a10e445aab0fe65e88974ff05ca2
description: >-
  Vue.js（/vjuː/，或简称为Vue）是一个用于创建用户界面的开源JavaScript框架，也是一个创建单页应用的Web应用框架。Vue是一套用于构建用户界面的渐进式MVVM框架。那怎么理解渐进
difficulty: 1.5
questionNumber: 60
source: >-
  https://fe.ecool.fun/topic-answer/052ca3d3-2a82-4f99-87fb-ccf6c4a8e630?orderBy=updateTime&order=desc&tagId=14
---

Vue.js（/vjuː/，或简称为 Vue）是一个用于创建用户界面的开源 JavaScript 框架，也是一个创建单页应用的 Web 应用框架。

Vue 是一套用于构建用户界面的渐进式 MVVM 框架。那怎么理解渐进式呢？渐进式含义：强制主张最少。

Vue.js 包含了声明式渲染、组件化系统、客户端路由、大规模状态管理、构建工具、数据持久化、跨平台支持等，但在实际开发中，并没有强制要求开发者之后某一特定功能，而是根据需求逐渐扩展。

Vue 所关注的核心是 MVC 模式中的视图层，同时，它也能方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互。

Vue.js 的核心库只关心视图渲染，且由于渐进式的特性，Vue.js 便于与第三方库或既有项目整合。Vue.js 实现了一套声明式渲染引擎，并在 runtime 或者预编译时将声明式的模板编译成渲染函数，挂载在观察者 Watcher 中，在渲染函数中（touch），响应式系统使用响应式数据的 getter 方法对观察者进行依赖收集（Collect as Dependency），使用响应式数据的 setter 方法通知（notify）所有观察者进行更新，此时观察者 Watcher 会触发组件的渲染函数（Trigger re-render），组件执行的 render 函数，生成一个新的 Virtual DOM Tree，此时 Vue 会对新老 Virtual DOM Tree 进行 Diff，查找出需要操作的真实 DOM 并对其进行更新。
