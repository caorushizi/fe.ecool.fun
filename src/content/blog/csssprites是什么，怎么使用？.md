---
title: csssprites是什么，怎么使用？
pubDatetime: 2021-09-25T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: bdd1d14b1f5ca1499d78b62f11e50e80
description: >-
  是什么---CSSSprites是一种网页图片应用处理方式，就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background-repeat”，“
difficulty: 1
questionNumber: 49
source: >-
  https://fe.ecool.fun/topic-answer/cffcacf0-52fc-4d67-b9d0-3e7d477b92d0?orderBy=updateTime&order=desc&tagId=11
---

## 是什么

CSS Sprites 是一种网页图片应用处理方式，就是把网页中一些背景图片整合到一张图片文件中，再利用 CSS 的“background-image”，“background- repeat”，“background-position”的组合进行背景定位。

## 优点

其优点在于：

- 减少网页的 http 请求，提高性能，这也是 CSS Sprites 最大的优点，也是其被广泛传播和应用的主要原因；
- 减少图片的字节：多张图片合并成 1 张图片的字节小于多张图片的字节总和；
- 减少了命名困扰：只需对一张集合的图片命名，不需要对每一个小元素进行命名提高制作效率；
- 更换风格方便：只需要在一张或少张图片上修改图片的颜色或样式，整个网页的风格就可以改变，维护起来更加方便。

## 缺点

诚然 CSS Sprites 是如此的强大，但是也存在一些不可忽视的缺点：

- 图片合成比较麻烦；
- 背景设置时，需要得到每一个背景单元的精确位置；
- 维护合成图片时，最好只是往下加图片，而不要更改已有图片。
