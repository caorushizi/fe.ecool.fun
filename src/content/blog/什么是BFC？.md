---
title: 什么是BFC？
pubDatetime: 2021-08-01T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: 7a8810e5673a24825b3a6023a092b01e
description: >-
  BFC：blockformattingcontext，块级格式化上下文。BFC是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。定位方案：*内部的B
difficulty: 3
questionNumber: 53
source: >-
  https://fe.ecool.fun/topic-answer/5c174882-c1e7-4c08-a71a-f4c991be552f?orderBy=updateTime&order=desc&tagId=11
---

BFC：block formatting context，块级格式化上下文。

BFC 是 Web 页面的可视 CSS 渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

定位方案：

- 内部的 Box 会在垂直方向上一个接一个放置。
- Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
- 每个元素的 margin box 的左边，与包含块 border box 的左边相接触。
- BFC 的区域不会与 float box 重叠。
- BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
- 计算 BFC 的高度时，浮动元素也会参与计算。

满足下列条件之一就可触发 BFC:

- 根元素，即 html
- float 的值不为 none（默认）
- overflow 的值不为 visible（默认）
- display 的值为 table-cell, table-caption, inline-block, flex, 或者 inline-flex 中的其中一个
- position 的值为 absolute 或 fixed
