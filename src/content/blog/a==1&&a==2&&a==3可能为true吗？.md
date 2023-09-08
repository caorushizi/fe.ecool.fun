---
title: a==1&&a==2&&a==3可能为true吗？
pubDatetime: 2021-12-26T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: e3e083234039c97e30c0eb7861a2234c
description: >-
  第一种方案-----把`a`定义为一个对象，通过重写toString方法。根据规则，==左边为对象类型，右边为Number，在比较时会调用`a`的toString方法，所以每次调用时都将返回值加1。`
difficulty: 2
questionNumber: 51
source: >-
  https://fe.ecool.fun/topic-answer/9b617ec3-5346-4f82-9fcf-d502817b8c2d?orderBy=updateTime&order=desc&tagId=26
---

## 第一种方案

把 `a` 定义为一个对象，通过重写 toString 方法。根据规则，== 左边为对象类型，右边为 Number，在比较时会调用 `a` 的 toString 方法，所以每次调用时都将返回值加 1。

```js
const a = {
  value: 1,
  toString: function () {
    return a.value++;
  },
};
console.log(a == 1 && a == 2 && a == 3); // true
```

## 第二种方案

用相同的方法重写 valueOf 方法。
