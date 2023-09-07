---
title: CSS中的1像素问题是什么？有哪些解决方案？
pubDatetime: 2021-07-11T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: f94f111a53a20ab434e4a14546cca26d
description: >-
  1px边框问题的由来-----------苹果iPhone4首次提出了RetinaDisplay（视网膜屏幕）的概念，在iPhone4使用的视网膜屏幕中，把2x2个像素当1个物理像素使用，即使用2x2
difficulty: 3.5
questionNumber: 56
source: >-
  https://fe.ecool.fun/topic-answer/7904bc3e-62e0-44a1-ac3e-bdd737471b7e?orderBy=updateTime&order=desc&tagId=11
---

## 1px 边框问题的由来

苹果 iPhone4 首次提出了 Retina Display（视网膜屏幕）的概念，在 iPhone4 使用的视网膜屏幕中，把 2x2 个像素当 1 个物理像素使用，即使用 2x2 个像素显示原来 1 个物理像素显示的内容，从而让 UI 显示更精致清晰，这 2x2 个像素叫做逻辑像素。

像这种像素比（像素比（即 dpr）＝ 物理像素 / 逻辑像素）为 2 的视网膜屏幕也被称为二倍屏，目前市面上还有像素比更高的三倍屏、四倍屏。

而 CSS 中 1px 指的是物理像素，因此，设置为 1px 的边框在 dpr = 2 的视网膜屏幕中实际占用了 2 个逻辑像素的宽度，这就导致了界面边框变粗的视觉体验。

## 使用 transform 解决

通过设置元素的 box-sizing 为 border-box，然后构建伪元素，再使用 CSS3 的 transform 缩放，这是目前市面上最受推崇的解决方法。这种方法可以满足所有的场景，而且修改灵活，唯一的缺陷是，对于已使用伪元素的元素要多嵌套一个无用元素。具体的实现如下：

```typescript
undefined;
```

这样就可以得到 0.5px 的边框。

还可以结合媒体查询（@media）解决不同 dpr 值屏幕的边框问题，如下：

```typescript
undefined;
```

当然还有不少其他的解决方案：border-image、background-image、viewport + rem + js、box-shadow 等，但都有各自的缺点，不进行推荐，此处也不做详细介绍。
