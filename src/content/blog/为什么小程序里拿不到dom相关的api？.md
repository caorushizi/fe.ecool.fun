---
title: 为什么小程序里拿不到dom相关的api？
pubDatetime: 2023-05-30T16:00:00.000Z
author: caorushizi
tags:
  - 小程序
postSlug: 1491df9122125bf04cb6955cbcbabd21
description: >-
  微信小程序采用了类似于Web的WXML和WXSS语言来描述页面结构和样式，但是却没有提供直接操作DOM的API。这是因为小程序本身是在一个JavaScript环境中运行的，其选用的是JavaScrip
difficulty: 1
questionNumber: 2
source: >-
  https://fe.ecool.fun/topic-answer/be1dfffb-1f1b-43b1-9223-4a57efd1d978?orderBy=updateTime&order=desc&tagId=23
---

微信小程序采用了类似于 Web 的 WXML 和 WXSS 语言来描述页面结构和样式，但是却没有提供直接操作 DOM 的 API。

这是因为小程序本身是在一个 JavaScript 环境中运行的，其选用的是 JavaScriptCore 引擎，而不是浏览器中常见的 V8 引擎。JavaScriptCore 与 V8 引擎的实现方式存在较大差异，其中一个显著的特点是 JavaScriptCore 的执行速度较慢。对于小程序开发者来说，直接操作 DOM 会比较耗时，会导致性能下降和体验差。

另外，小程序的设计初衷也是为了提供一种更轻量级、更快速启动的应用方式，它的定位是“去中心化、低门槛、高灵活性”的。如果允许开发者直接操作 DOM，那么就可能会打破这种设计理念，增加小程序的复杂性和开发难度。

因此，微信小程序暂时不支持直接操作 DOM。开发者需要通过其他方式来实现类似的功能，例如使用组件或自定义组件，利用微信小程序提供的 API 进行页面渲染和交互。
