---
title: typeof NaN 的结果是什么？
pubDatetime: 2021-08-22T18:38:05.000Z
author: caorushizi
tags:
  - JavaScript
postSlug: 0bd0c9bd-9e5f-47af-8a7d-3ba7aaa28dcd
description: >-
  NaN 指“不是一个数字”（not a number），NaN 是一个“警戒值”（sentinel
  value，有特殊用途的常规值），用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。 typeof NaN; //
  "number" NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 x === x 不成立）的值。而 NaN !==
difficulty: 0.5
questionNumber: 599
source: https://fe.ecool.fun/topic/0bd0c9bd-9e5f-47af-8a7d-3ba7aaa28dcd
---

NaN 指“不是一个数字”（not a number），NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。

```js
typeof NaN; // "number"
```

NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 x === x 不成立）的值。而 NaN !== NaN 为 true。
