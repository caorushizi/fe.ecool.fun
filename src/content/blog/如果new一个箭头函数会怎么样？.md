---
title: 如果new一个箭头函数会怎么样？
pubDatetime: 2021-08-22T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: 50fd795604e966c7f4fe2772e8319b75
description: >-
  箭头函数是ES6中的提出来的，它没有prototype，也没有自己的this指向，更不可以使用arguments参数，所以不能New一个箭头函数。new操作符的实现步骤如下：1、创建一个空的简单Jav
difficulty: 2
questionNumber: 15
source: >-
  https://fe.ecool.fun/topic-answer/31134096-417d-48df-8030-68dd004c40d1?orderBy=updateTime&order=desc&tagId=24
---

箭头函数是 ES6 中的提出来的，它没有 prototype，也没有自己的 this 指向，更不可以使用 arguments 参数，所以不能 New 一个箭头函数。

new 操作符的实现步骤如下：

1、创建一个空的简单 JavaScript 对象（即{}）；

2、为步骤 1 新创建的对象添加属性\_\_proto\_\_，将该属性链接至构造函数的原型对象 ；

3、将步骤 1 新创建的对象作为 this 的上下文 ；

4、如果该函数没有返回对象，则返回 this。

所以，上面的第二、三步，箭头函数都是没有办法执行的。
