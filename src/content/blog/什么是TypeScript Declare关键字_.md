---
title: 什么是TypeScript Declare关键字?
pubDatetime: 2021-07-10T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: 8dacc8ddbed06512e023e64df44d7fed
description: >-
  我们知道所有的JavaScript库/框架都没有TypeScript声明文件，但是我们希望在TypeScript文件中使用它们时不会出现编译错误。为此，我们使用declare关键字。在我们希望定义可能
difficulty: 2.5
questionNumber: 33
source: >-
  https://fe.ecool.fun/topic-answer/290f820a-5d60-466a-aa8c-c51ee79a8f2a?orderBy=updateTime&order=desc&tagId=19
---

我们知道所有的 JavaScript 库/框架都没有 TypeScript 声明文件，但是我们希望在 TypeScript 文件中使用它们时不会出现编译错误。为此，我们使用 declare 关键字。在我们希望定义可能存在于其他地方的变量的环境声明和方法中，可以使用 declare 关键字。

例如，假设我们有一个名为 myLibrary 的库，它没有 TypeScript 声明文件，在全局命名空间中有一个名为 myLibrary 的命名空间。如果我们想在 TypeScript 代码中使用这个库，我们可以使用以下代码:

    declare var myLibrary;

TypeScript 运行时将把 myLibrary 变量赋值为任意类型。这是一个问题，我们不会得到智能感知在设计时，但我们将能够使用库在我们的代码。
