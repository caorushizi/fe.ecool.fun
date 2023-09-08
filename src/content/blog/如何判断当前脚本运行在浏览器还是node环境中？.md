---
title: 如何判断当前脚本运行在浏览器还是node环境中？
pubDatetime: 2021-11-17T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 550ff14a8dd45dac2bf585342d88ab58
description: >-
  ```jsthis===window?'browser':'node';```通过判断Global对象是否为window，如果不为window，当前脚本没有运行在浏览器中。
difficulty: 1.5
questionNumber: 199
source: >-
  https://fe.ecool.fun/topic-answer/a09650c2-d9af-4f1a-ad05-8b33757cbca7?orderBy=updateTime&order=desc&tagId=10
---

```js
this === window ? "browser" : "node";
```

通过判断 Global 对象是否为 window，如果不为 window，当前脚本没有运行在浏览器中。
