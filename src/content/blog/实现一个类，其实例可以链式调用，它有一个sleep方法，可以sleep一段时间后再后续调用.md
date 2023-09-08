---
title: 实现一个类，其实例可以链式调用，它有一个sleep方法，可以sleep一段时间后再后续调用
pubDatetime: 2022-05-15T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 185edf85d472b2b96cf4372e3329a5e5
description: >-
  ```jsconstboy=newPlayBoy('Tom')boy.sayHi().sleep(1000).play('王者').sleep(2000).play('跳一跳')//输出//大家好我是
difficulty: 3.5
questionNumber: 38
source: >-
  https://fe.ecool.fun/topic-answer/1cda0ef6-a1fa-45f7-b48f-f3784c45e9fa?orderBy=updateTime&order=desc&tagId=26
---

```js
const boy = new PlayBoy("Tom");
boy.sayHi().sleep(1000).play("王者").sleep(2000).play("跳一跳");
// 输出
// 大家好我是Tom
// 1s 之后
// 我在玩王者
// 2s 之后
// 我在玩跳一跳
```
