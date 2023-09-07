---
title: null 和 undefined 有什么区别？
pubDatetime: 2023-03-25T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 01bbfe8fda6c59bac9870f0aafb9f856
description: >-
  首先Undefined和Null都是基本数据类型，这两个基本数据类型分别都只有一个值，就是undefined和null。undefined代表的含义是未定义，null代表的含义是空对象。一般变量声明了
difficulty: 1
questionNumber: 38
source: >-
  https://fe.ecool.fun/topic-answer/13d7618b-87b1-41c1-9dbe-dbc9991d71c5?orderBy=updateTime&order=desc&tagId=10
---

首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。

undefined 代表的含义是未定义，null 代表的含义是空对象。一般变量声明了但还没有定义的时候会返回 undefined，null 主要用于赋值给一些可能会返回对象的变量，作为初始化。

undefined 在 JavaScript 中不是一个保留字，这意味着可以使用 undefined 来作为一个变量名，但是这样的做法是非常危险的，它会影响对 undefined 值的判断。我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。

当对这两种类型使用 typeof 进行判断时，Null 类型化会返回 “object”，这是一个历史遗留的问题。当使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。

```typescript
undefined;
```
