---
title: webpack的Loader和Plugin的不同
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 工程化
postSlug: 18c3749a223f2f0deb5c4c6c25d746c8
description: >-
  **不同的作用:*****Loader**直译为"加载器"。Webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件也打包的话，就会用到`loader`。所以Loa
difficulty: 1
questionNumber: 27
source: >-
  https://fe.ecool.fun/topic-answer/6ccbf43f-c512-4e3c-82ce-fe925b8a0c07?orderBy=updateTime&order=desc&tagId=28
---

**不同的作用:**

- **Loader**直译为"加载器"。Webpack 将一切文件视为模块，但是 webpack 原生是只能解析 js 文件，如果想将其他文件也打包的话，就会用到`loader`。 所以 Loader 的作用是让 webpack 拥有了加载和解析*非 JavaScript 文件*的能力。
- **Plugin**直译为"插件"。Plugin 可以扩展 webpack 的功能，让 webpack 具有更多的灵活性。 在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

**不同的用法:**

- **Loader**在`module.rules`中配置，也就是说他作为模块的解析规则而存在。 类型为数组，每一项都是一个`Object`，里面描述了对于什么类型的文件（`test`），使用什么加载(`loader`)和使用的参数（`options`）
- **Plugin**在`plugins`中单独配置。 类型为数组，每一项是一个`plugin`的实例，参数都通过构造函数传入。
