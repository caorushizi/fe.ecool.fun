---
title: 使用原生js给一个按钮绑定两个onclick事件
pubDatetime: 2021-09-25T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 7f7cbb367ae9c395a004063bcce483d5
description: >-
  ```javascript//事件监听绑定多个事件varbtn=document.getElementById("btn");btn.addEventListener("click",hello1);
difficulty: 0.5
questionNumber: 57
source: >-
  https://fe.ecool.fun/topic-answer/b4137265-8ebe-4fc8-be75-8dfaf125af6c?orderBy=updateTime&order=desc&tagId=26
---

```javascript
//事件监听 绑定多个事件
var btn = document.getElementById("btn");

btn.addEventListener("click", hello1);
btn.addEventListener("click", hello2);

function hello1() {
  alert("hello 1");
}
function hello2() {
  alert("hello 2");
}
```
