---
title: >-
  offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight
  的区别？
pubDatetime: 2021-11-17T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 737cf6cd1209455bcaa8e115dabfa3c9
description: >-
  clientWidth/clientHeight返回的是元素的内部宽度，它的值只包含content+padding，如果有滚动条，不包含滚动条。clientTop返回的是上边框的宽度。clientLe
difficulty: 1
questionNumber: 192
source: >-
  https://fe.ecool.fun/topic-answer/00cd5cd3-49a5-4057-937b-4190d66c8198?orderBy=updateTime&order=desc&tagId=10
---

clientWidth/clientHeight 返回的是元素的内部宽度，它的值只包含 content + padding，如果有滚动条，不包含滚动条。

clientTop 返回的是上边框的宽度。

clientLeft 返回的左边框的宽度。

offsetWidth/offsetHeight 返回的是元素的布局宽度，它的值包含 content + padding + border 包含了滚动条。

offsetTop 返回的是当前元素相对于其 offsetParent 元素的顶部的距离。

offsetLeft 返回的是当前元素相对于其 offsetParent 元素的左部的距离。

scrollWidth/scrollHeight 返回值包含 content + padding + 溢出内容的尺寸。

scrollTop 属性返回的是一个元素的内容垂直滚动的像素数。

scrollLeft 属性返回的是元素滚动条到元素左边的距离。
