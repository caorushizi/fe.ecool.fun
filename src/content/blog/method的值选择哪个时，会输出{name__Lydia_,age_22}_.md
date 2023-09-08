---
title: method的值选择哪个时，会输出{name:"Lydia",age:22}?
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - 选择题
postSlug: 739aec1ec32cfe8bf51f6d0baacdbee6
description: >-
  ```javascriptconstkeys=["name","age"]constvalues=["Lydia",22]constmethod=/*??*/Object[method](keys.m
difficulty: 1
questionNumber: 35
source: >-
  https://fe.ecool.fun/topic-answer/c08daadf-ef79-48b0-8cda-3ab379624fa5?orderBy=updateTime&order=desc&tagId=32
---

```javascript
const keys = ["name", "age"];
const values = ["Lydia", 22];

const method =
  /* ?? */
  Object[method](
    keys.map((_, i) => {
      return [keys[i], values[i]];
    })
  ); // { name: "Lydia", age: 22 }
```
