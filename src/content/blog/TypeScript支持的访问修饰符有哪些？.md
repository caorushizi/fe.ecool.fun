---
title: TypeScript支持的访问修饰符有哪些？
pubDatetime: 2023-04-17T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: 640074f17e3e956aa26543b148446f9c
description: >-
  TypeScript支持访问修饰符public，private和protected，它们决定了类成员的可访问性。*公共（public），类的所有成员，其子类以及该类的实例都可以访问。*受保护（prot
difficulty: 1
questionNumber: 5
source: >-
  https://fe.ecool.fun/topic-answer/fa381450-0faf-4395-9207-7fa114c27440?orderBy=updateTime&order=desc&tagId=19
---

TypeScript 支持访问修饰符 public，private 和 protected，它们决定了类成员的可访问性。

- 公共（public），类的所有成员，其子类以及该类的实例都可以访问。
- 受保护（protected），该类及其子类的所有成员都可以访问它们。 但是该类的实例无法访问。
- 私有（private），只有类的成员可以访问它们。

如果未指定访问修饰符，则它是隐式公共的，因为它符合 JavaScript 的便利性。
