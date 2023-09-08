---
title: Object.is和===有什么区别？
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 4d47b7bef69adb75ef3bf7a327910aa3
description: >-
  Object在严格等于的基础上修复了一些特殊情况下的失误，具体来说就是+0和-0，NaN和NaN。源码如下：```jsfunctionis(x,y){if(x===y){//运行到1/x===1/y的
difficulty: 2
questionNumber: 274
source: >-
  https://fe.ecool.fun/topic-answer/7e7da360-d6e1-4f9f-b987-7e740b8d8d7e?orderBy=updateTime&order=desc&tagId=10
---

Object 在严格等于的基础上修复了一些特殊情况下的失误，具体来说就是+0 和-0，NaN 和 NaN。

源码如下：

```js
function is(x, y) {
if (x === y) {
//运行到1/x === 1/y的时候x和y都为0，但是1/+0 = +Infinity， 1/-0 = -Infinity, 是不
一样的
return x !== 0 || y !== 0 || 1 / x === 1 / y;
} else {
//NaN===NaN是false,这是不对的，我们在这里做一个拦截，x !== x，那么一定是 NaN, y 同理
//两个都是NaN的时候返回true
return x !== x && y !== y;
}


```
