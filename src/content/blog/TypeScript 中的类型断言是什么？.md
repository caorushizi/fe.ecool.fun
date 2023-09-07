---
title: TypeScript 中的类型断言是什么？
pubDatetime: 2021-07-10T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: 88a4e9061ea319790f7416a6c6714d73
description: >-
  TypeScript中的类型断言的工作方式类似于其他语言中的类型转换，但没有C#和Java等语言中可能的类型检查或数据重组。类型断言对运行时没有影响，仅由编译器使用。类型断言本质上是类型转换的软版本，
difficulty: 1.5
questionNumber: 44
source: >-
  https://fe.ecool.fun/topic-answer/15457f3a-3fba-48d2-902e-eda18ef47e18?orderBy=updateTime&order=desc&tagId=19
---

TypeScript 中的类型断言的工作方式类似于其他语言中的类型转换，但没有 C# 和 Java 等语言中可能的类型检查或数据重组。类型断言对运行时没有影响，仅由编译器使用。

类型断言本质上是类型转换的软版本，它建议编译器将变量视为某种类型，但如果它处于不同的形式，则不会强制它进入该模型。
