---
title: newfn与newfn()有什么区别吗？
pubDatetime: 2022-06-05T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: c11e310e934c492c66ba2ab608991d8d
description: >-
  用`new`创建构造函数的实例时，通常情况下`new`的构造函数后面需要带括号（譬如：`newParent()`）。有些情况下`new`的构造函数后带括号和不带括号的情况一致，譬如：```jsfunc
difficulty: 1
questionNumber: 101
source: >-
  https://fe.ecool.fun/topic-answer/f2e93a54-e57f-4c52-bd8c-9b9474c437ac?orderBy=updateTime&order=desc&tagId=10
---

用 `new` 创建构造函数的实例时，通常情况下 `new` 的构造函数后面需要带括号（譬如：`new Parent()`）。

有些情况下`new`的构造函数后带括号和不带括号的情况一致，譬如：

```js
function Parent() {
  this.num = 1;
}
console.log(new Parent()); //输出Parent对象：{num:1}
console.log(new Parent()); //输出Parent对象：{num:1}
```

但有些情况下 new 的构造函数后带括号和不带括号的情况并不一致，譬如：

```js
function Parent() {
  this.num = 1;
}
console.log(new Parent().num); //1
console.log(new Parent.num()); //报错
```

结果分析：

从报错信息来看，`new Parent.num`执行顺序是这样的：先执行`Parent.num`，此时返回结果为`undefined`；后执行`new`，因`new`后面必须跟构造函数，所以`new undefined`会报错。

`new Parent().num`相当于`(new Parent()).num`，所以结果返回 1。

从结果来看，`new Parent.num`代码相当于`new (Parent.num)；`，`new Parent().num`相当于`(new Parent()).num`。由此看来 `new` 的构造函数后跟括号优先级会提升。
