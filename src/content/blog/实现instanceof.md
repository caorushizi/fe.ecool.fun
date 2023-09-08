---
title: 实现instanceof
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: c421a3e63193980f0edd0f973b3e261f
description: >-
  instanceof运算符用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上。```jsconstmyInstanceof=(left,right)=>{//基本数据类型都返回f
difficulty: 2
questionNumber: 87
source: >-
  https://fe.ecool.fun/topic-answer/8b62ba3f-fe82-4bd5-b1a3-057b668ef01f?orderBy=updateTime&order=desc&tagId=26
---

instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

```js
const myInstanceof = (left, right) => {
  // 基本数据类型都返回false
  if (typeof left !== "object" || left === null) return false;
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
};
```
