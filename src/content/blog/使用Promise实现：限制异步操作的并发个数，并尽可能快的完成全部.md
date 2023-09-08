---
title: 使用Promise实现：限制异步操作的并发个数，并尽可能快的完成全部
pubDatetime: 2022-01-09T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: f17d9aa3b67d1a94fa2a4615c282434c
description: >-
  有8个图片资源的url，已经存储在数组urls中。urls类似于`['https://image1.png','https://image2.png',....]`而且已经有一个函数`function
difficulty: 4.5
questionNumber: 46
source: >-
  https://fe.ecool.fun/topic-answer/462ff8a8-29ba-4e49-88ad-d60e7b3f4ee8?orderBy=updateTime&order=desc&tagId=26
---

有 8 个图片资源的 url，已经存储在数组 urls 中。

urls 类似于`['https://image1.png', 'https://image2.png', ....]`

而且已经有一个函数`function loadImg`，输入一个 url 链接，返回一个 Promise，该 Promise 在图片下载完成的时候 resolve，下载失败则 reject。

但有一个要求，任何时刻同时下载的链接数量不可以超过 3 个。

请写一段代码实现这个需求，要求尽可能快速地将所有图片下载完成。

```js
var urls = [
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      console.log("一张图片加载完成");
      resolve(img);
    };
    img.onerror = function() {
    	reject(new Error('Could not load image at' + url));
    };
    img.src = url;
  });
```
