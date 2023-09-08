---
title: 实现debounce（防抖）函数
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 35881e584ba0f642ef542fe5279df391
description: >-
  触发高频时间后n秒内函数只会执行一次,如果n秒内高频时间再次触发,则重新计算时间。```jsconstdebounce=(fn,time)=>{lettimeout=null;returnfuncti
difficulty: 1
questionNumber: 90
source: >-
  https://fe.ecool.fun/topic-answer/c77b5c6f-9fcc-40a6-bbf0-9f412d6ce94c?orderBy=updateTime&order=desc&tagId=26
---

触发高频时间后 n 秒内函数只会执行一次,如果 n 秒内高频时间再次触发,则重新计算时间。

```js
const debounce = (fn, time) => {
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
};
```

防抖常应用于用户进行搜索输入节约请求资源，window 触发 resize 事件时进行防抖只触发一次。
