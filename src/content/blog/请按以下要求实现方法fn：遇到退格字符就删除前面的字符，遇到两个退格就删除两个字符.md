---
title: 请按以下要求实现方法fn：遇到退格字符就删除前面的字符，遇到两个退格就删除两个字符
pubDatetime: 2023-05-31T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 13db4a0568a0045fcb67b45d4eba6732
description: >-
  ```js//比较含有退格的字符串，"<-"代表退格键，"<"和"-"均为正常字符//输入："a<-b<-","c<-d<-"，结果：true，解释：都为""//输入："<-<-ab<-","<-<-
difficulty: 3
questionNumber: 12
source: >-
  https://fe.ecool.fun/topic-answer/00499f71-c1c2-46aa-9e87-d3ae7b79f268?orderBy=updateTime&order=desc&tagId=26
---

```js
// 比较含有退格的字符串，"<-"代表退格键，"<"和"-"均为正常字符
// 输入："a<-b<-", "c<-d<-"，结果：true，解释：都为""
// 输入："<-<-ab<-", "<-<-<-<-a"，结果：true，解释：都为"a"
// 输入："<-<ab<-c", "<<-<a<-<-c"，结果：false，解释："<ac" !== "c"

function fn(str1, str2) {}
```
