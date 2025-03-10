---
title: 前端路由 `a -> b -> c`这样前进，也可以返回 `c -> b -> a`，用什么数据结构来存比较高效
pubDatetime: 2024-07-19T10:44:28.000Z
author: caorushizi
tags:
  - JavaScript
postSlug: 58ceb7d9-5bcb-433a-acce-902aee7ef7f4
description: >-
  在前端路由中，常用的存储方式是栈（Stack）数据结构。栈是一种线性数据结构，具有后进先出（LIFO）的特点，即最后入栈的元素最先弹出栈。
  当用户访问一个新页面时，可以将当前页面路由信息压入栈中。例如，在访问页面 a 时，可以将 a 的路由信息存储在栈顶。当用户访问 b 页面时，再将 b
  的路由信息压入栈中，此时 a 的路由信息就被挤到了栈底。以此类推，当用户访问 c 页面时，c 的路由信息被压入
difficulty: 2
questionNumber: 2027
source: https://fe.ecool.fun/topic/58ceb7d9-5bcb-433a-acce-902aee7ef7f4
---

在前端路由中，常用的存储方式是栈（Stack）数据结构。栈是一种线性数据结构，具有后进先出（LIFO）的特点，即最后入栈的元素最先弹出栈。

当用户访问一个新页面时，可以将当前页面路由信息压入栈中。例如，在访问页面 a 时，可以将 a 的路由信息存储在栈顶。当用户访问 b 页面时，再将 b 的路由信息压入栈中，此时 a 的路由信息就被挤到了栈底。以此类推，当用户访问 c 页面时，c 的路由信息被压入栈顶，a 和 b 的路由信息都被挤到了栈底。

如果用户想要返回上一个页面，可以从栈顶弹出最后一个路由信息，并显示对应的页面。例如，在 c 页面返回 b 页面时，可以从栈顶弹出 c 的路由信息，然后显示 b 页面。此时，a 和 b 的路由信息还保留在栈中。如果用户再次返回上一个页面，则从栈顶弹出 b 的路由信息，然后显示 a 页面。此时，只有 a 的路由信息剩余在栈中。

使用栈数据结构来存储前端路由信息具有以下优点：

- 简单直观：栈数据结构易于理解和实现，符合前端路由的基本需求。
- 高效快速：在栈中压入和弹出元素都是 O(1) 的时间复杂度，不会对页面加载和响应产生太大的影响。
- 可扩展性：栈数据结构可以很容易地扩展到支持浏览器的前进和后退按钮。

在使用栈数据结构来存储前端路由信息时，还需要考虑如何处理浏览器刷新、从历史记录中跳转等特殊情况，并进行相应的错误处理。

> 面试题由“前端面试题宝典”（官网： https://fe.ecool.fun ）整理维护，如果您在其他网站或者小程序中使用，请向小助手（微信号：interview-fe）反馈。
