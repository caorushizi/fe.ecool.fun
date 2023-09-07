---
title: 说一说TypeScript中的类及其特性。
pubDatetime: 2021-07-10T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: 857e9fa34691ac3dd3f6249061273d5a
description: >-
  TypeScript引入了类，以便它们可以利用诸如封装和抽象之类的面向对象技术的好处。TypeScript编译器将TypeScript中的类编译为普通的JavaScript函数，以跨平台和浏览器工作。
difficulty: 2.5
questionNumber: 38
source: >-
  https://fe.ecool.fun/topic-answer/d4a6dd39-06ce-454f-b1ef-4ec580faf27c?orderBy=updateTime&order=desc&tagId=19
---

TypeScript 引入了类，以便它们可以利用诸如封装和抽象之类的面向对象技术的好处。

TypeScript 编译器将 TypeScript 中的类编译为普通的 JavaScript 函数，以跨平台和浏览器工作。

一个类包括以下内容：

- 构造器（Constructor）
- 属性（Properties）
- 方法（Methods）

  class Employee {
  empID: number;
  empName: string;

      constructor(ID: number, name: string) {
          this.empName = name;
          this.empID = ID;
      }

      getSalary(): number {
          return 40000;
      }

  }

类的其他特性有：

- 继承（Inheritance）
- 封装（Encapsulation）
- 多态（Polymorphism）
- 抽象（Abstraction）
