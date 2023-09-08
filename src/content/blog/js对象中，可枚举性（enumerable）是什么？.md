---
title: js对象中，可枚举性（enumerable）是什么？
pubDatetime: 2021-07-31T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 579a0b7288467d64ebaa686e9285cca3
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

```javascript
var o = { a: 1, b: 2 };

o.c = 3;
Object.defineProperty(o, "d", {
  value: 4,
  enumerable: false,
});

o.d;
// 4

for (var key in o) console.log(o[key]);
// 1
// 2
// 3

Object.keys(o); // ["a", "b", "c"]

JSON.stringify(o); // => "{a:1,b:2,c:3}"
```

上面代码中，d 属性的 enumerable 为 false，所以一般的遍历操作都无法获取该属性，使得它有点像“秘密”属性，但还是可以直接获取它的值。

至于 for...in 循环和 Object.keys 方法的区别，在于前者包括对象继承自原型对象的属性，而后者只包括对象本身的属性。如果需要获取对象自身的所有属性，不管 enumerable 的值，可以使用 Object.getOwnPropertyNames 方法。

可枚举属性是指那些内部 “可枚举” 标志设置为 true 的属性。对于通过直接的赋值和属性初始化的属性，该标识值默认为即为 true。但是对于通过 Object.defineProperty 等定义的属性，该标识值默认为 false。
