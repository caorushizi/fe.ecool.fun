---
title: 怎样能在index.js中调用sum.js中的sum方法？
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - 选择题
postSlug: b399ce245ae468fe120027406d0cd3ab
description: >-
  ```javascript//sum.jsexportdefaultfunctionsum(x){returnx+x;}//index.jsimport*assumfrom"./sum";```
difficulty: 1
questionNumber: 51
source: >-
  https://fe.ecool.fun/topic-answer/79eaaf8e-f456-4527-847e-58bad43fd47a?orderBy=updateTime&order=desc&tagId=32
---

```javascript
// sum.js
export default function sum(x) {
  return x + x;
}

// index.js
import * as sum from "./sum";
```
