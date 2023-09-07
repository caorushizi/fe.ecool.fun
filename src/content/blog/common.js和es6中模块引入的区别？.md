---
title: common.js和es6中模块引入的区别？
pubDatetime: 2021-07-11T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: 061921c5531156a56c186fb7559dbfd5
description: >-
  Common\]S是一种模块规范，最初被应用于Nodejs，成为Nodejs的模块规范。运行在浏览器端的JavaScript由于也缺少类似的规范，在ES6出来之前，前端也实现了一套相同的模块规范(例如
difficulty: 2
questionNumber: 22
source: >-
  https://fe.ecool.fun/topic-answer/b9a0ceb2-84b5-4a79-8548-d043a97d0096?orderBy=updateTime&order=desc&tagId=24
---

Common\]S 是一种模块规范，最初被应用于 Nodejs，成为 Nodejs 的模块规范。

运行在浏览器端的 JavaScript 由于也缺少类似的规范，在 ES6 出来之前，前端也实现了一套相同的模块规范(例如: AMD)，用来对前端模块进行管理。

自 ES6 起，引入了一套新的 ES6 Module 规范，在语言标准的层面上实现了模块功能，而且实现得相当简单，有望成为浏览器和服务器通用的模块解决方案。

在使用上的差别主要有:

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用 CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJs 是单个值导出，ES6 Module 可以导出多个
- CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层 CommonJs 的 this 是当前模块，ES6 Module 的 this 是 undefined
