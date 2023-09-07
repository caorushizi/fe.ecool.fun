---
title: position：absolute绝对定位，是相对于谁的定位？
pubDatetime: 2022-04-05T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: 08298d5b3e3ef42c5e79e03edafe8cb8
description: >-
  CSSposition属性用于指定一个元素在文档中的定位方式。top，right，bottom和left属性则决定了该元素的最终位置。absolute的元素会被移出正常文档流，并不为元素预留空间，通过
difficulty: 0.5
questionNumber: 39
source: >-
  https://fe.ecool.fun/topic-answer/1f131907-c40f-485b-8ff1-67e7091fed68?orderBy=updateTime&order=desc&tagId=11
---

CSS position 属性用于指定一个元素在文档中的定位方式。top，right，bottom 和 left 属性则决定了该元素的最终位置。

absolute 的元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的 **非 static 定位祖先元素** 的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。
