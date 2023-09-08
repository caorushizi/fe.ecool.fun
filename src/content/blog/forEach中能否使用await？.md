---
title: forEach中能否使用await？
pubDatetime: 2021-07-31T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: af4d9bbf27c1560e602aee0c1ee8e96f
description: >-
  ```javascriptfunctiontest(){letarr=[3,2,1];arr.forEach(async(item)=>{constres=awaitfetch(item);conso
difficulty: 3
questionNumber: 243
source: >-
  https://fe.ecool.fun/topic-answer/d1d9bc22-287a-4fb0-9860-51fb461006de?orderBy=updateTime&order=desc&tagId=10
---

```javascript
function test() {
  let arr = [3, 2, 1];
  arr.forEach(async item => {
    const res = await fetch(item);
    console.log(res);
  });
  console.log("end");
}

function fetch(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, 500 * x);
  });
}

test();
```

上面代码的输出结果是：

```javascript
end;
1;
2;
3;
```

## 为什么

其实原因很简单，那就是 forEach 只支持同步代码。

我们可以参考下 Polyfill 版本的 forEach，简化以后类似就是这样的伪代码

```javascript
while (index < arr.length) {
  callback(item, index); //也就是我们传入的回调函数
}
```

从上述代码中我们可以发现，forEach 只是简单的执行了下回调函数而已，并不会去处理异步的情况。 并且即使你在 callback 中使用 break 也并不能结束遍历。

## 怎么解决

一般来说解决的办法有 2 种：

- for...of

因为 for...of 内部处理的机制和 forEach 不同，forEach 是直接调用回调函数，for...of 是通过迭代器的方式去遍历。

```javascript
async function test() {
  let arr = [3, 2, 1];
  for (const item of arr) {
    const res = await fetch(item);
    console.log(res);
  }
  console.log("end");
}
```

- for 循环

```javascript
async function test() {
  let arr = [3, 2, 1];
  for (var i = 0; i < arr.length; i++) {
    const res = await fetch(arr[i]);
    console.log(res);
  }
  console.log("end");
}

function fetch(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, 500 * x);
  });
}

test();
```
