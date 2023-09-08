---
title: 手写一个jsonp
pubDatetime: 2022-05-22T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: b42583db08a9d5942e9227e2e622d383
description: >-
  JSONP核心原理：script标签不受同源策略约束，所以可以用来进行跨域请求，优点是兼容性好，但是只能用于GET请求；```jsconstjsonp=({url,params,callbackNam
difficulty: 3
questionNumber: 37
source: >-
  https://fe.ecool.fun/topic-answer/125134e6-1cc2-460b-9770-60d464365e89?orderBy=updateTime&order=desc&tagId=26
---

JSONP 核心原理：script 标签不受同源策略约束，所以可以用来进行跨域请求，优点是兼容性好，但是只能用于 GET 请求；

```js
const jsonp = ({ url, params, callbackName }) => {
  const generateUrl = () => {
    let dataSrc = "";
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        dataSrc += `${key}=${params[key]}&`;
      }
    }
    dataSrc += `callback=${callbackName}`;
    return `${url}?${dataSrc}`;
  };
  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement("script");
    scriptEle.src = generateUrl();
    document.body.appendChild(scriptEle);
    window[callbackName] = data => {
      resolve(data);
      document.removeChild(scriptEle);
    };
  });
};
```
