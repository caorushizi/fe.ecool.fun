---
title: mouseover 和 mouseenter 有什么区别？
pubDatetime: 2021-11-17T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 1e1f9872ba07a27c11690f91fab77b25
description: >-
  当鼠标移动到元素上时就会触发mouseenter事件，类似mouseover，它们两者之间的差别是mouseenter不会冒泡。由于mouseenter不支持事件冒泡，导致在一个元素的子元素上进入或离
difficulty: 1
questionNumber: 189
source: >-
  https://fe.ecool.fun/topic-answer/d9ddb08c-beb1-4aa4-8c54-cbccc0395fc5?orderBy=updateTime&order=desc&tagId=10
---

当鼠标移动到元素上时就会触发 mouseenter 事件，类似 mouseover，它们两者之间的差别是 mouseenter 不会冒泡。

由于 mouseenter 不支持事件冒泡，导致在一个元素的子元素上进入或离开的时候会触发其 mouseover 和 mouseout 事件，但是却不会触发 mouseenter 和 mouseleave 事件。
