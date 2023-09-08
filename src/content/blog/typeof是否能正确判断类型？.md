---
title: typeof是否能正确判断类型？
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: ff3faf2ede8268582336e0b41e3dfb94
description: >-
  对于原始类型来说，除了null都可以调用typeof显示正确的类型。```jstypeof1//'number'typeof'1'//'string'typeofundefined//'undefin
difficulty: 2
questionNumber: 276
source: >-
  https://fe.ecool.fun/topic-answer/a24f7d09-79df-4468-af94-654e8cfd3288?orderBy=updateTime&order=desc&tagId=10
---

对于原始类型来说，除了 null 都可以调用 typeof 显示正确的类型。

```js
typeof 1; // 'number'
typeof "1"; // 'string'
typeof undefined; // 'undefined'
typeof true; // 'boolean'
typeof Symbol(); // 'symbol'
```

但对于引用数据类型，除了函数之外，都会显示"object"。

```js
typeof []; // 'object'
typeof {}; // 'object'
typeof console.log; // 'function'
```

因此采用 typeof 判断对象数据类型是不合适的，采用 instanceof 会更好，instanceof 的原理是基于原型链的查询，只要处于原型链中，判断永远为 true

```js
const Person = function () {};
const p1 = new Person();
p1 instanceof Person; // true
var str1 = "hello world";
str1 instanceof String; // false
var str2 = new String("hello world");
str2 instanceof String; // true
```
