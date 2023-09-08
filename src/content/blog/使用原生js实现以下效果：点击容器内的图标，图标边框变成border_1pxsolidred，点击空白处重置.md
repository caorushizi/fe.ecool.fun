---
title: 使用原生js实现以下效果：点击容器内的图标，图标边框变成border:1pxsolidred，点击空白处重置
pubDatetime: 2022-10-29T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: 31d3258d38874086cda52d6437142793
description: >-
  ```jsconstbox=document.getElementById('box');functionisIcon(target){returntarget.className.includes(
difficulty: 2
questionNumber: 11
source: >-
  https://fe.ecool.fun/topic-answer/c3faa4b5-e73e-47f6-af7b-1f9c73d74126?orderBy=updateTime&order=desc&tagId=11
---

```js
const box = document.getElementById("box");

function isIcon(target) {
  return target.className.includes("icon");
}

box.onclick = function (e) {
  e.stopPropagation();
  const target = e.target;
  if (isIcon(target)) {
    target.style.border = "1px solid red";
  }
};

const doc = document;

doc.onclick = function (e) {
  const children = box.children;
  for (let i = 0; i < children.length; i++) {
    if (isIcon(children[i])) {
      children[i].style.border = "none";
    }
  }
};
```
