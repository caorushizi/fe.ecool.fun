---
title: 如何检查TypeScript中的null和undefined ？
pubDatetime: 2021-07-10T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: a4efeabfbf1335e0ef9456e2f9751f51
description: >-
  通过使用一个缓冲检查，我们可以检查空和未定义:if(x==null){}如果我们使用严格的检查，它将总是对设置为null的值为真，而对未定义的变量不为真。例子vara:number;varb:numb
difficulty: 4
questionNumber: 31
source: >-
  https://fe.ecool.fun/topic-answer/59af70f8-871d-4358-aac1-e5dc4a0ca6df?orderBy=updateTime&order=desc&tagId=19
---

通过使用一个缓冲检查，我们可以检查空和未定义:

    if (x == null) {
    }

如果我们使用严格的检查，它将总是对设置为 null 的值为真，而对未定义的变量不为真。

例子

    var a: number;
    var b: number = null;
    function check(x, name) {
        if (x == null) {
            console.log(name + ' == null');
        }
        if (x === null) {
            console.log(name + ' === null');
        }
        if (typeof x === 'undefined') {
            console.log(name + ' is undefined');
        }
    }
    check(a, 'a');
    check(b, 'b');

输出

    "a == null"
    "a is undefined"
    "b == null"
    "b === null"
