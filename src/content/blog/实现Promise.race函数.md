---
title: 实现Promise.race函数
pubDatetime: 2022-05-10T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 8260022e1183a1b2c3a857dbe24dba68
description: >-
  `Promise.race`函数返回一个`Promise`，它将与参数中第一个完成的promise状态相同。它可以是完成（resolves），也可以是失败（rejects），这要取决于第一个完成的方式
difficulty: 1
questionNumber: 39
source: >-
  https://fe.ecool.fun/topic-answer/d4b6e13e-5036-4231-bf64-dae0fd27b849?orderBy=updateTime&order=desc&tagId=26
---

`Promise.race` 函数返回一个 `Promise`，它将与参数中第一个完成的 promise 状态相同。它可以是完成（ resolves），也可以是失败（rejects），这要取决于第一个完成的方式是两个中的哪个。

如果传的迭代是空的，则返回的 promise 将永远等待。

如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，则 Promise.race 将解析为迭代中找到的第一个值。

```javascript
Promise.race = function (arr) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(arr)) {
      return reject(new TypeError("Promise.race accepts an array"));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};
```
