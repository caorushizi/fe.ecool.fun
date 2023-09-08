---
title: 实现AJAX
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 64ec9cab95b854212b0af31b991ba610
description: >-
  ```jsconstgetJSON=function(url){returnnewPromise((resolve,reject)=>{constxhr=XMLHttpRequest?newXMLHt
difficulty: 2
questionNumber: 82
source: >-
  https://fe.ecool.fun/topic-answer/19448048-9bd0-46ba-9cf4-3946003a83df?orderBy=updateTime&order=desc&tagId=26
---

```js
const getJSON = function (url) {
  return new Promise((resolve, reject) => {
    const xhr = XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Mscrosoft.XMLHttp");
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    };
    xhr.send();
  });
};
```
