---
title: 下面这段代码中，class为content的元素，实际高度是100px吗？
pubDatetime: 2022-06-10T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: 437d496fb2812e4c4d5215bf1660930e
description: >-
  ```html<!DOCTYPEhtml><htmllang="en"><head><metacharset="UTF-8"/><metaname="viewport"content="width=d
difficulty: 3
questionNumber: 24
source: >-
  https://fe.ecool.fun/topic-answer/bc918d0d-ecea-459c-930c-3c502708a997?orderBy=updateTime&order=desc&tagId=11
---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>

    <style>
      .parent {
        display: flex;
        flex-direction: column;
        height: 600px;
        width: 300px;
        background: yellow;
      }
      div {
        width: 100%;
      }
      .header {
        height: 200px;
        background: red;
      }
      .content {
        height: 100%;
        background: blue;
      }
      .footer {
        height: 200px;
        background: black;
      }
    </style>
  </head>
  <body>
    <div class="parent">
      <div class="header"></div>
      <div class="content"></div>
      <div class="footer"></div>
    </div>
  </body>
</html>
```
