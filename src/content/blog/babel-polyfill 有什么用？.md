---
title: babel-polyfill 有什么用？
pubDatetime: 2021-07-10T16:00:00.000Z
author: caorushizi
tags:
  - 工具
postSlug: 7552f7190eb810cce7ba9a4021f0a099
description: >-
  Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promis
difficulty: 2
questionNumber: 22
source: >-
  https://fe.ecool.fun/topic-answer/dcfb407b-223e-40ec-a3d2-7d7ef9514774?orderBy=updateTime&order=desc&tagId=29
---

Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。

举例来说，ES6 在 Array 对象上新增了 Array.from 方法。Babel 就不会转码这个方法。如果想让这个方法运行，必须使用 babel-polyfill，为当前环境提供一个垫片。
