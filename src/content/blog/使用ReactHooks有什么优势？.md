---
title: 使用ReactHooks有什么优势？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 0bb76ff08f81432e0f8858c54f263fa0
description: >-
  hooks是react16.8引入的特性，他允许你在不写class的情况下操作state和react的其他特性。ReactHooks要解决的问题是状态共享，是继render-props和higher-
difficulty: 2
questionNumber: 78
source: >-
  https://fe.ecool.fun/topic-answer/4caa6281-4592-4f6b-ac70-73effa2bcf0d?orderBy=updateTime&order=desc&tagId=13
---

hooks 是 react 16.8 引入的特性，他允许你在不写 class 的情况下操作 state 和 react 的其他特性。

React Hooks 要解决的问题是状态共享，是继 render-props 和 higher-order components 之后的第三种状态共享方案，不会产生 JSX 嵌套地狱问题。

这个状态指的是状态逻辑，所以称为状态逻辑复用会更恰当，因为只共享数据处理逻辑，不会共享数据本身。
