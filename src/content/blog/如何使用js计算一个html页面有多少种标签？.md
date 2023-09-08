---
title: 如何使用js计算一个html页面有多少种标签？
pubDatetime: 2021-08-14T16:00:00.000Z
author: caorushizi
tags:
  - 趣味题
postSlug: 54f5df44a643ca8298843c603650078b
description: >-
  分析--这道题看似简单，但是是一个很有价值的一道题目。它包含了很多重要的知识：*如何获取所有DOM节点*伪数组如何转为数组*去重解答--*获取所有的DOM节点。```javascriptdocumen
difficulty: 3
questionNumber: 17
source: >-
  https://fe.ecool.fun/topic-answer/e84bcf8c-1ee4-4c28-8e64-875b485369b5?orderBy=updateTime&order=desc&tagId=17
---

## 分析

这道题看似简单，但是是一个很有价值的一道题目。它包含了很多重要的知识：

- 如何获取所有 DOM 节点
- 伪数组如何转为数组
- 去重

## 解答

- 获取所有的 DOM 节点。

```javascript
document.querySelectorAll("*");
```

此时得到的是一个 NodeList 集合，我们需要将其转化为数组，然后对其筛选。

- 转化为数组

```javascript
[...document.querySelectorAll("*")];
```

一个拓展运算符就轻松搞定。

- 获取数组每个元素的标签名

```javascript
[...document.querySelectorAll("*")].map(ele => ele.tagName);
```

使用一个 map 方法，将我们需要的结果映射到一个新数组。

- 去重

```javascript
new Set([...document.querySelectorAll("*")].map(ele => ele.tagName)).size;
```

我们使用 ES6 中的 Set 对象，把数组作为构造函数的参数，就实现了去重，再使用 Set 对象的 size 方法就可以得到有多少种 HTML 元素了。
