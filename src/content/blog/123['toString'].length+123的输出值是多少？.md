---
title: 123['toString'].length+123的输出值是多少？
pubDatetime: 2021-09-05T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: b8ff2c5c4af50ffb08821122e41fa4ce
description: >-
  function的length---------------```jsfunctionfn1(name){}functionfn2(name='林三心'){}functionfn3(name,age=
difficulty: 2
questionNumber: 214
source: >-
  https://fe.ecool.fun/topic-answer/3dc3b575-dc56-47b6-87b3-e83315630812?orderBy=updateTime&order=desc&tagId=10
---

## function 的 length

```js
function fn1(name) {}

function fn2(name = "林三心") {}

function fn3(name, age = 22) {}

function fn4(name, age = 22, gender) {}

function fn5(name = "林三心", age, gender) {}

console.log(fn1.length); // 1
console.log(fn2.length); // 0
console.log(fn3.length); // 1
console.log(fn4.length); // 1
console.log(fn5.length); // 0
```

function 的 length，就是第一个具有默认值之前的参数个数。

在函数的形参中，还有剩余参数这个东西，那如果具有剩余参数，会是怎么算呢？

    function fn1(name, ...args) {}

    console.log(fn1.length) // 1

可以看出，剩余参数是不算进 length 的计算之中的。

所以，123\['toString'\].length + 123 = ?的答案是 124

## 总结

length 是函数对象的一个属性值，指该函数有多少个必须要传入的参数，即形参的个数。形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数
