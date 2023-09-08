---
title: display:none与visibility:hidden有什么区别？
pubDatetime: 2021-09-25T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: 624024249a5a8dc6fece2711fb81c4b4
description: >-
  表现上---*display:none是彻底消失，不在文档流中占位，浏览器也不会解析该元素；*visibility:hidden是视觉上消失了，可以理解为透明度为0的效果，在文档流中占位，浏览器会解析
difficulty: 1
questionNumber: 50
source: >-
  https://fe.ecool.fun/topic-answer/b61122b0-5971-4bc9-afc2-4987d4aa06d7?orderBy=updateTime&order=desc&tagId=11
---

## 表现上

- display:none 是彻底消失，不在文档流中占位，浏览器也不会解析该元素；
- visibility:hidden 是视觉上消失了，可以理解为透明度为 0 的效果，在文档流中占位，浏览器会解析该元素；

## 性能上

- 使用 visibility:hidden 比 display:none 性能上要好，display:none 切换显示时，页面产生回流（当页面中的一部分元素需要改变规模尺寸、布局、显示隐藏等，页面重新构建，此时就是回流。所有页面第一次加载时需要产生一次回流），而 visibility 切换是否显示时则不会引起回流。
