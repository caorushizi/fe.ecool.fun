---
title: js对象中，可枚举性（enumerable）是什么？
pubDatetime: 2021-07-31T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: cde0cbbc1b7918e184b0c5d4aaa50c69
description: >-
  可枚举性（enumerable）用来控制所描述的属性，是否将被包括在for...in循环之中（除非属性名是一个Symbol）。具体来说，如果一个属性的enumerable为false，下面三个操作不会
difficulty: 3
questionNumber: 242
source: >-
  https://fe.ecool.fun/topic-answer/83b73455-d22c-43ac-844d-d92c5ac6b662?orderBy=updateTime&order=desc&tagId=10
---

可枚举性（enumerable）用来控制所描述的属性，是否将被包括在 for...in 循环之中（除非属性名是一个 Symbol）。具体来说，如果一个属性的 enumerable 为 false，下面三个操作不会取到该属性。

- for..in 循环
- Object.keys 方法
- JSON.stringify 方法

```typescript
undefined;
```

上面代码中，d 属性的 enumerable 为 false，所以一般的遍历操作都无法获取该属性，使得它有点像“秘密”属性，但还是可以直接获取它的值。

至于 for...in 循环和 Object.keys 方法的区别，在于前者包括对象继承自原型对象的属性，而后者只包括对象本身的属性。如果需要获取对象自身的所有属性，不管 enumerable 的值，可以使用 Object.getOwnPropertyNames 方法。

可枚举属性是指那些内部 “可枚举” 标志设置为 true 的属性。对于通过直接的赋值和属性初始化的属性，该标识值默认为即为 true。但是对于通过 Object.defineProperty 等定义的属性，该标识值默认为 false。
