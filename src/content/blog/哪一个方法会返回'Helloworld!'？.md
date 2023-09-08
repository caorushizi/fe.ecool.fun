---
title: 哪一个方法会返回'Helloworld!'？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - 选择题
postSlug: 624db4a54ece5129eecf390d35b71f25
description: >-
  ```javascriptconstmyMap=newMap()constmyFunc=()=>'greeting'myMap.set(myFunc,'Helloworld!')//1myMap.ge
difficulty: 0.5
questionNumber: 31
source: >-
  https://fe.ecool.fun/topic-answer/fc6beb89-dcf0-456e-a4d0-746ec0968295?orderBy=updateTime&order=desc&tagId=32
---

```javascript
const myMap = new Map();
const myFunc = () => "greeting";

myMap.set(myFunc, "Hello world!");

//1
myMap.get("greeting");
//2
myMap.get(myFunc);
//3
myMap.get(() => "greeting");
```
