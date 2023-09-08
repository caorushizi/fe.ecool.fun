---
title: 给某个资源的链接，如https://www.baidu.com/index.html，请实现一个方法，获取该资源的后缀，如html
pubDatetime: 2023-03-12T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: d00e97ff84101aad2c7aea1fe8556576
description: >-
  本题主要考察字符串相关的方法，实现比较简单，下面列举两个实现方法。```jsvarfileName="https://www.baidu.com/index.html";functiongetFile
difficulty: 1
questionNumber: 23
source: >-
  https://fe.ecool.fun/topic-answer/478e5483-7797-4844-be41-c7b96a383c00?orderBy=updateTime&order=desc&tagId=26
---

本题主要考察字符串相关的方法，实现比较简单，下面列举两个实现方法。

```js
var fileName = "https://www.baidu.com/index.html";

function getFileExtension(url) {
  if (typeof url !== "string") {
    return "";
  }

  // 方法一
  return url.substring(url.lastIndexOf(".") + 1);

  // 方法二
  //return url.split('.').pop().toLowerCase();
}
```
