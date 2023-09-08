---
title: 使用哪个构造函数可以成功继承Dog类?
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - 选择题
postSlug: 769ea52a402456aa83a5bc54f96cbe04
description: >-
  ```javascriptclassDog{constructor(name){this.name=name;}};classLabradorextendsDog{//1constructor(nam
difficulty: 1
questionNumber: 108
source: >-
  https://fe.ecool.fun/topic-answer/c591d4b9-eff8-4a29-b01b-50130bde5d3b?orderBy=updateTime&order=desc&tagId=32
---

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

};
```
