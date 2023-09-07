---
title: 什么是HTML5，以及和HTML的区别是什么？
pubDatetime: 2023-04-15T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: 747a6c8fe25010ec6e80938c7091755f
description: >-
  HTML5是HTML的新标准，其主要目标是无需任何额外的插件如Flash、Silverlight等，就可以传输所有内容。它囊括了动画、视频、丰富的图形用户界面等。HTML5是由万维网联盟（W3C）和`
difficulty: 1
questionNumber: 6
source: >-
  https://fe.ecool.fun/topic-answer/63d73ae0-ea78-4b4c-8a85-6be7513a62a4?orderBy=updateTime&order=desc&tagId=12
---

HTML5 是 HTML 的新标准，其主要目标是无需任何额外的插件如 Flash、Silverlight 等，就可以传输所有内容。它囊括了动画、视频、丰富的图形用户界面等。

HTML5 是由万维网联盟（W3C）和 `Web Hypertext Application Technology Working Group` 合作创建的 HTML 新版本。

## 区别

从文档声明类型上看：

HTML 是很长的一段代码，很难记住。如下代码：

```typescript
undefined;
```

HTML5 却只有简简单单的声明，方便记忆。如下：

    <!DOCTYPE html>

从语义结构上看：

- HTML4.0：没有体现结构语义化的标签，通常都是这样来命名的 `<div id="header"></div>`，这样表示网站的头部。
- HTML5：在语义上却有很大的优势。提供了一些新的标签，比如：`<header><article><footer>`。

## 拓展

不输入<!DOCTYPE html>，浏览器将无法识别 html 文件，因此 html 将无法正常工作。
