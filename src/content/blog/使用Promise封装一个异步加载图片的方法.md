---
title: 使用Promise封装一个异步加载图片的方法
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 05935dc7595f47c32a8e5abe46a11179
description: >-
  这个比较简单，只需要在图片的onload函数中，使用resolve返回一下就可以了。```jsfunctionloadImg(url){returnnewPromise((resolve,reject
difficulty: 3
questionNumber: 47
source: >-
  https://fe.ecool.fun/topic-answer/584f7b53-5e4b-48b9-ad7b-ae4789647ada?orderBy=updateTime&order=desc&tagId=26
---

这个比较简单，只需要在图片的 onload 函数中，使用 resolve 返回一下就可以了。

```js
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
    	reject(new Error('Could not load image at' + url));
    };
    img.src = url;
  });


```
