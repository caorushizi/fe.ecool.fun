---
title: JS代码中的usestrict是什么意思？
pubDatetime: 2021-07-11T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: ecb5389a7cda9128fa993014064ddbbd
description: >-
  usestrict是一种ECMAscript5添加的(严格）运行模式，这种模式使得Javascript在更严格的条件下运行。设立"严格模式"的目的，主要有以下几个:*消除Javascript语法的一些
difficulty: 2
questionNumber: 249
source: >-
  https://fe.ecool.fun/topic-answer/c6027c9d-6c64-4765-9358-5d01c37149c4?orderBy=updateTime&order=desc&tagId=10
---

use strict 是一种 ECMAscript5 添加的(严格）运行模式，这种模式使得 Javascript 在更严格的条件下运行。

设立"严格模式"的目的，主要有以下几个:

- 消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;消除代码运行的一些不安全之处，保证代码运行的安全;
- 提高编译器效率，增加运行速度;
- 为未来新版本的 Javascript 做好铺垫。

区别:

- 禁止使用 with 语句。
- 禁止 this 关键字指向全局对象。
- 对象不能有重名的属性。
