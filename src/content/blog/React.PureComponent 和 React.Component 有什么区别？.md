---
title: React.PureComponent 和 React.Component 有什么区别？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 6846fb62bb6ab8cbbbe106a7cdc48aa0
description: >-
  PureComponent和Component的区别是：Component需要手动实现shouldComponentUpdate，而PureComponent通过浅对比默认实现了shouldCompo
difficulty: 3
questionNumber: 94
source: >-
  https://fe.ecool.fun/topic-answer/ce52c8e9-5835-4021-ba1c-1cda46ba1578?orderBy=updateTime&order=desc&tagId=13
---

PureComponent 和 Component 的区别是：Component 需要手动实现 shouldComponentUpdate，而 PureComponent 通过浅对比默认实现了 shouldComponentUpdate 方法。

浅比较(shallowEqual)，即 react 源码中的一个函数，然后根据下面的方法进行是不是 PureComponent 的判断，帮我们做了本来应该我们在 shouldComponentUpdate 中做的事情

```typescript
undefined;
```

注意： 浅比较只比较了第一层，复杂数据结构可能会导致更新问题

总结: PureComponent 不仅会影响本身，而且会影响子组件，所以 PureComponent 最佳情况是展示组件
