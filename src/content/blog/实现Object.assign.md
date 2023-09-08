---
title: 实现Object.assign
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: c4f0017872f38ae594ec27b9826d4ae8
description: >-
  Object.assign()方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象（请注意这个操作是浅拷贝）```jsObject.defineProperty(Object
difficulty: 3
questionNumber: 86
source: >-
  https://fe.ecool.fun/topic-answer/665b5487-848c-424b-b6a5-800169ee8fd5?orderBy=updateTime&order=desc&tagId=26
---

Object.assign()方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象（请注意这个操作是浅拷贝）

```js
Object.defineProperty(Object, "assign", {
  value: function (target, ...args) {
    if (target == null) {
      return new TypeError("Cannot convert undefined or null to object");
    }

    // 目标对象需要统一是引用数据类型，若不是会自动转换
    const to = Object(target);

    for (let i = 0; i < args.length; i++) {
      // 每一个源对象
      const nextSource = args[i];
      if (nextSource !== null) {
        // 使用for...in和hasOwnProperty双重判断，确保只拿到本身的属性、方法（不包含继承的）
        for (const nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  },
  // 不可枚举
  enumerable: false,
  writable: true,
  configurable: true,
});
```
