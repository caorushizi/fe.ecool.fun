---
title: 封装一个javascript的类型判断函数
pubDatetime: 2021-11-17T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 3116a27cb1458168b4604607c313d260
description: >-
  ```jsfunctiongetType(value){//判断数据是null的情况if(value===null){returnvalue+"";}//判断数据是引用类型的情况if(typeofva
difficulty: 2.5
questionNumber: 53
source: >-
  https://fe.ecool.fun/topic-answer/e1584502-c0d4-416f-abe4-cc0a01c6002d?orderBy=updateTime&order=desc&tagId=26
---

```js
function getType(value) {
  // 判断数据是 null 的情况
  if (value === null) {
    return value + "";
  }

  // 判断数据是引用类型的情况
  if (typeof value === "object") {
    let valueClass = Object.prototype.toString.call(value),
      type = valueClass.split(" ")[1].split("");

    type.pop();

    return type.join("").toLowerCase();
  } else {
    // 判断数据是基本数据类型的情况和函数的情况
    return typeof value;
  }
}
```
