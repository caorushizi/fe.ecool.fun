---
title: IconFont的原理是什么
pubDatetime: 2021-09-25T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: e29714dddc0debc5bede418852eb5943
description: >-
  IconFont的使用原理来自于css的`@font-face`属性。这个属性用来定义一个新的字体，基本用法如下：```css@font-face{font-family:<YourFontName>
difficulty: 2
questionNumber: 48
source: >-
  https://fe.ecool.fun/topic-answer/144bb888-936e-42c8-bdcb-445b5c4dc774?orderBy=updateTime&order=desc&tagId=11
---

IconFont 的使用原理来自于 css 的 `@font-face` 属性。

这个属性用来定义一个新的字体，基本用法如下：

```css
@font-face {
  font-family: <YourFontName>;
  src: <url> [<format>],[<source> [<format>]], *;
  [font-weight: <weight>];
  [font-style: <style>];
}
```

- font-family：为载入的字体取名字。
- src：\[url\]加载字体，可以是相对路径，可以是绝对路径，也可以是网络地址。\[format\]定义的字体的格式，用来帮助浏览器识别。主要取值为：【truetype(.ttf)、opentype（.otf）、truetype-aat、embedded-opentype(.eot)、svg(.svg)、woff(.woff)】。
- font-weight：定义加粗样式。
- font-style：定义字体样式。
