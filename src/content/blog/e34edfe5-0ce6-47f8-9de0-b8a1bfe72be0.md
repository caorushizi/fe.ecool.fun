---
title: 下面代码中，p标签的背景色是什么？
pubDatetime: 2022-05-08T21:35:17.000Z
author: caorushizi
tags:
  - CSS
postSlug: 70ff40049f8fa38bfa55896448bd4c90
description: >-
  <style type="text/css"> #parent p { background-color: red; } div
  .a.b.c.d.e.f.g.h.i.j.k p{ background-color: green; </style> ...... <div
  id="parent"> <div class="a b c d e f g h i j k"> <p>xxxx</p> </
difficulty: 1
questionNumber: 1790
source: https://fe.ecool.fun/topic/e34edfe5-0ce6-47f8-9de0-b8a1bfe72be0
---

```html
<style type="text/css">
  #parent p { background-color: red;  }
   div .a.b.c.d.e.f.g.h.i.j.k p{ background-color: green;
</style>
......
<div id="parent">
  <div class="a b c d e f g h i j k">
    <p>xxxx</p>
  </div>
</div>
```

大家需要注意，权重是按优先级进行比较的，而不是相加规则。

答案是 `red`。
