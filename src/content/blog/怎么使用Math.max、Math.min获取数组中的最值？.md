---
title: 怎么使用Math.max、Math.min获取数组中的最值？
pubDatetime: 2023-05-18T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: d11537b586bf52b28b0559e210ec8db8
description: >-
  `Math.min()`和`Math.max()`用法比较类似：>console.log(Math.min(1,5,2,7,3));//输出：1但它们不接受数组作为参数。如果想使用数组作为参数，有以下
difficulty: 1
questionNumber: 23
source: >-
  https://fe.ecool.fun/topic-answer/f1502312-3ac7-4089-b306-f64c301b7dd4?orderBy=updateTime&order=desc&tagId=10
---

`Math.min()`和`Math.max()`用法比较类似：

> console.log(Math.min(1, 5, 2, 7, 3)); // 输出：1

但它们不接受数组作为参数。

如果想使用数组作为参数，有以下两个方法：

- apply

```js
const arr = [1, 5, 2, 7, 3];
console.log(Math.min.apply(null, arr)); // 输出：1
```

- 扩展运算符

```js
const arr = [3, 5, 1, 6, 2, 8];

const maxVal = Math.max(...arr); // 获取数组中的最大值
```
