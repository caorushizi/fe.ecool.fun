---
title: 实现JSONP
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 3473eac7c34bad4eaca694212230c2c2
description: >-
  ```jsconstjsonp=({url,params,callbackName})=>{constgenerateUrl=()=>{letdataSrc='';for(letkeyinparams
difficulty: 3.5
questionNumber: 83
source: >-
  https://fe.ecool.fun/topic-answer/4c9292a2-a801-48c4-8d22-10642613c6f4?orderBy=updateTime&order=desc&tagId=26
---

```js
const jsonp = ({ url, params, callbackName }) => {
  const generateUrl = () => {
    let dataSrc = "";
    for (let key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
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
