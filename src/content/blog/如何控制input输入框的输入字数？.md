---
title: 如何控制input输入框的输入字数？
pubDatetime: 2022-10-10T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: 072e6f7170d08c4f445743d2e151a6ea
description: >-
  一般是通过maxlength属性进行限制：```js<inputmaxlength="5"/>```另外还可以通过监听`οninput`事件，对输入值进行处理。
difficulty: 1
questionNumber: 11
source: >-
  https://fe.ecool.fun/topic-answer/9464fd89-1578-4f3b-a103-840b73b1987e?orderBy=updateTime&order=desc&tagId=12
---

一般是通过 maxlength 属性进行限制：

```js
<input maxlength="5" />
```

另外还可以通过监听 `οninput` 事件，对输入值进行处理。
