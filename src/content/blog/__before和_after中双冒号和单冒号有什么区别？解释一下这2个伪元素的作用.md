---
title: "::before和:after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用"
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: 5183907f4e16860c3941d6790d00109c
description: >-
  *单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。*::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。:before和
difficulty: 1
questionNumber: 63
source: >-
  https://fe.ecool.fun/topic-answer/ec2aa05e-da02-4a15-9862-9eaee4aa54e5?orderBy=updateTime&order=desc&tagId=11
---

- 单冒号(:)用于 CSS3 伪类，双冒号(::)用于 CSS3 伪元素。
- ::before 就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于 dom 之中，只存在在页面之中。

:before 和 :after 这两个伪元素，是在 CSS2.1 里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着 Web 的进化，在 CSS3 的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after
