---
title: 实现一个等待函数，支持让async函数在执行时暂停一段时间，函数的入参为暂停的时间
pubDatetime: 2023-04-23T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 4655152b6c01784e7edcb28c39fc17b8
description: >-
  在使用`async/await`时，可以用await关键字等待一个Promise对象的结果，然后执行一些操作。在等待过程中，函数会暂停执行，直到Promise对象的状态发生改变。下面是一个示例代码，其
difficulty: 2
questionNumber: 18
source: >-
  https://fe.ecool.fun/topic-answer/1199c5d8-034c-4cb0-a3c7-55ef5f6ec56f?orderBy=updateTime&order=desc&tagId=26
---

在使用 `async/await` 时，可以用 await 关键字等待一个 Promise 对象的结果，然后执行一些操作。在等待过程中，函数会暂停执行，直到 Promise 对象的状态发生改变。

下面是一个示例代码，其中定义了一个名为 wait 的等待函数，它可以让 async 函数在执行时暂停一段时间：

```js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("start");
  await wait(2000); // 等待2秒钟
  console.log("end");
}

run();
```
