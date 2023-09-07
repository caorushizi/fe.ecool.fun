---
title: map和 filter 有什么区别？
pubDatetime: 2022-10-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 949caafafd73b4a679bda1a72717e390
description: >-
  参数--首先，map和filter函数的参数，是完全相同的>array.map(function(currentValue,index,arr),thisValue)>>array.filter(fu
difficulty: 1
questionNumber: 75
source: >-
  https://fe.ecool.fun/topic-answer/2a46f54f-7445-44fa-90ec-0ce0d2b44711?orderBy=updateTime&order=desc&tagId=10
---

## 参数

首先，map 和 filter 函数的参数，是完全相同的

> array.map(function(currentValue,index,arr), thisValue)
>
> array.filter(function(currentValue,index,arr), thisValue)

- currentValue：数组元素；
- index：索引
- arr：原数组；
- thisValue：作为该执行回调时使用，传递给函数，用作 "this" 的值

## 用途

但是在用途上，它们是有区别的：

1.  map 方法返回的新数组是原数组的映射，何为映射？就是和原数组的长度相同，数值做相应处理。
2.  filter 方法返回的值是过滤原数组后的新数组，和原数组长度不同，数值不变。

**示例**：

    let arr = ["1","2","3"];
    let a = arr.map((item,index,a) =>{
        return item + 1
    });
    console.log(a);//["11", "21", "31"]
    let b = arr.filter((item,index,a) =>{
        return item > 1
    })
    console.log(b);//["2", "3"]

另外，filter 可过滤 NaN、null、undefined、0

```typescript
undefined;
```
