---
title: instanceof能否判断基本数据类型？
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 730acca8957b6d889374130109966457
description: >-
  能。比如下面这种方式:```jsclassPrimitiveNumber{static[Symbol.hasInstance](x){returntypeofx==='number'}}console
difficulty: 2
questionNumber: 275
source: >-
  https://fe.ecool.fun/topic-answer/1d87535d-c1c8-4c6e-b6f5-583c80193217?orderBy=updateTime&order=desc&tagId=10
---

能。比如下面这种方式:

```js
class PrimitiveNumber {
  static [Symbol.hasInstance](x) {
    return typeof x === "number";
  }
}
console.log(111 instanceof PrimitiveNumber); // true
```

其实就是自定义 instanceof 行为的一种方式，这里将原有的 instanceof 方法重定义，换成了 typeof，因此能够判断基本数据类型。
