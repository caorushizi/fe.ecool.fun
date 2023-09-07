---
title: 如何从html元素继承box-sizing？
pubDatetime: 2022-04-09T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: ebf2b605f8f5763d5df338f8694e7d0d
description: >-
  在大多数情况下我们在设置元素的border和padding并不希望改变元素的width,height值，这个时候我们就可以为该元素设置`box-sizing:border-box;`。如果不希望每次都
difficulty: 1
questionNumber: 35
source: >-
  https://fe.ecool.fun/topic-answer/6a8dda85-ad38-4eec-86b5-dad87ad3c929?orderBy=updateTime&order=desc&tagId=11
---

在大多数情况下我们在设置元素的 border 和 padding 并不希望改变元素的 width,height 值，这个时候我们就可以为该元素设置 `box-sizing:border-box;`。

如果不希望每次都重写一遍，而是希望他是继承而来的，那么我们可以使用如下代码：

```typescript
undefined;
```

这样的好处在于他不会覆盖其他组件的 box-sizing 值，又无需为每一个元素重复设置 box-sizing:border-box;
