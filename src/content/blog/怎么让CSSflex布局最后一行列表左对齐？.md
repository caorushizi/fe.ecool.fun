---
title: 怎么让CSSflex布局最后一行列表左对齐？
pubDatetime: 2022-02-26T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: e2644258493ce9dc87d40b0786a0dd01
description: >-
  justify-content对齐问题描述---------------------在CSSflex布局中，justify-content属性可以控制列表的水平对齐方式，例如space-between
difficulty: 3
questionNumber: 42
source: >-
  https://fe.ecool.fun/topic-answer/389a7ca7-43d2-4fbe-99ef-50bea32bef5c?orderBy=updateTime&order=desc&tagId=11
---

## justify-content 对齐问题描述

在 CSS flex 布局中，justify-content 属性可以控制列表的水平对齐方式，例如 space-between 值可以实现两端对齐。

但是，如果最后一行的列表的个数不满，则就会出现最后一行没有完全垂直对齐的问题。

如下代码：

```css
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.list {
  width: 24%;
  height: 100px;
  background-color: skyblue;
  margin-top: 15px;
}
```

```html
<div class="container">
  <div class="list"></div>
  <div class="list"></div>
  <div class="list"></div>
  <div class="list"></div>
  <div class="list"></div>
  <div class="list"></div>
  <div class="list"></div>
</div>
```

![](https://ae04.alicdn.com/kf/Hf1a4fff1d2894f1e9abe1106afa1ebd9R.png)

预览

怎么让最后一行左对齐呢？
