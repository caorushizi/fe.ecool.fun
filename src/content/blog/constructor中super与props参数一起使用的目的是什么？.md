---
title: constructor中super与props参数一起使用的目的是什么？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: be7da62563c4775e416ee67a5b86922e
description: >-
  在调用方法之前，子类构造函数无法使用this引用super()。在ES6中，在子类的constructor中必须先调用super才能引用this。在constructor中可以使用this.props
difficulty: 1
questionNumber: 97
source: >-
  https://fe.ecool.fun/topic-answer/a67eec57-8dc1-40ee-9c8a-ccfbe25ca58d?orderBy=updateTime&order=desc&tagId=13
---

在调用方法之前，子类构造函数无法使用 this 引用 super()。

在 ES6 中，在子类的 constructor 中必须先调用 super 才能引用 this。

在 constructor 中可以使用 this.props

- 使用 props：

```typescript
undefined;
```

- 不使用 props：

```typescript
undefined;
```

上面的代码片段揭示了 this.props 行为仅在构造函数中有所不同。外部构造函数相同。
