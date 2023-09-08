---
title: TypeScript中的类是什么？你如何定义它们？
pubDatetime: 2021-07-10T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: eb902a40217a98016d12629a199a0127
description: >-
  类表示一组相关对象的共享行为和属性。例如，我们的类可能是Student，其所有对象都具有该attendClass方法。另一方面，John是一个单独的type实例，Student可能有额外的独特行为，比
difficulty: 2
questionNumber: 40
source: >-
  https://fe.ecool.fun/topic-answer/75a70014-1972-40d8-8173-1f3a475a0570?orderBy=updateTime&order=desc&tagId=19
---

类表示一组相关对象的共享行为和属性。

例如，我们的类可能是 Student，其所有对象都具有该 attendClass 方法。另一方面，John 是一个单独的 type 实例，Student 可能有额外的独特行为，比如 attendExtracurricular.

你使用关键字声明类 class：

    class Student {
        studCode: number;
        studName: string;
        constructor(code: number, name: string) {
        	this.studName = name;
        	this.studCode = code;
        }
     }
