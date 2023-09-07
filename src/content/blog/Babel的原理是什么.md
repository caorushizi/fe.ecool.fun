---
title: Babel的原理是什么
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 工程化
postSlug: 2f860c5ba6dfea4da58aa254a98bea4f
description: >-
  babel的转译过程分为三个阶段，这三步具体是：*解析Parse:将代码解析生成抽象语法树(即AST)，即词法分析与语法分析的过程*转换Transform:对于AST进行变换一系列的操作，babel接
difficulty: 1
questionNumber: 22
source: >-
  https://fe.ecool.fun/topic-answer/0c12d28e-1d3d-4a8f-a796-51c8bdc50a18?orderBy=updateTime&order=desc&tagId=28
---

babel 的转译过程分为三个阶段，这三步具体是：

- 解析 Parse: 将代码解析生成抽象语法树( 即 AST )，即词法分析与语法分析的过程
- 转换 Transform: 对于 AST 进行变换一系列的操作，babel 接受得到 AST 并通过 babel-traverse 对其进行遍历，在此过程中进行添加、更新及移除等操作
- 生成 Generate: 将变换后的 AST 再转换为 JS 代码, 使用到的模块是 babel-generator
