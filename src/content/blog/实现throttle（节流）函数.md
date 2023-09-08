---
title: 实现throttle（节流）函数
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: cfc29aad06b10d5868749781f19035bb
description: >-
  高频时间触发,但n秒内只会执行一次,所以节流会稀释函数的执行频率。```jsconstthrottle=(fn,time)=>{letflag=true;returnfunction(){if(!fl
difficulty: 1
questionNumber: 89
source: >-
  https://fe.ecool.fun/topic-answer/c50bec05-c350-46bd-a2a6-dd5f9a6cdf46?orderBy=updateTime&order=desc&tagId=26
---

高频时间触发,但 n 秒内只会执行一次,所以节流会稀释函数的执行频率。

```js
const throttle = (fn, time) => {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, time);
  };
};
```

节流常应用于鼠标不断点击触发、监听滚动事件。
