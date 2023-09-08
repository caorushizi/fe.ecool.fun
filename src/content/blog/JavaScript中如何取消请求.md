---
title: JavaScript中如何取消请求
pubDatetime: 2022-10-29T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: ed4ef90e8593430a135bc1a6acc3eb7c
description: >-
  众所周知，JavaScript实现异步请求就靠浏览器提供的两个API——**XMLHttpRequest和Fetch**。我们平常用的较多的是Promise请求库axios，它基于XMLHttpReq
difficulty: 2.5
questionNumber: 61
source: >-
  https://fe.ecool.fun/topic-answer/97eb452e-5d81-4758-b6f2-027dcf43027c?orderBy=updateTime&order=desc&tagId=10
---

众所周知，JavaScript 实现异步请求就靠浏览器提供的两个 API —— **XMLHttpRequest 和 Fetch**。我们平常用的较多的是 Promise 请求库 axios，它基于 XMLHttpRequest。

本篇带来 XMLHttpRequest、Fetch 和 axios 分别是怎样“取消请求”的。

### 取消 XMLHttpRequest 请求

当请求已经发送了，可以使用 **XMLHttpRequest.abort()** 方法取消发送，代码示例如下：

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "<http://127.0.0.1:3000/api/get>", true);
xhr.send();
setTimeout(() => {
  xhr.abort();
}, 1000);
```

取消请求，[readyState](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState) 会变成 `XMLHttpRequest.UNSENT`(0)；请求的 xhr.[status](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status) 会被设为 0 ；

不如在 Chrome DevTools Network 中，看看正常请求和取消请求的对比图：

![](https://pic.rmb.bdstatic.com/bjh/b14104626799dc65c94014992779438d.png?)

预览

### 取消 Fetch 请求

取消 Fetch 请求，需要用到 [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) API。我们可以构造一个 controller 实例：**`const controller = new AbortController()` ,** controller 它有一个只读属性 [AbortController.signal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)，可以作为参数传入到 fetch 中，用于将控制器与获取请求相关联；

代码示例如下：

```js
const controller = new AbortController();
void (async function () {
  const response = await fetch("<http://127.0.0.1:3000/api/get>", {
    signal: controller.signal,
  });
  const data = await response.json();
})();

setTimeout(() => {
  controller.abort();
}, 1000);
```

浏览器控制台对比图：

![](https://pic.rmb.bdstatic.com/bjh/b14104626799dc65c94014992779438d.png)

预览

我们其实可以在 controller.abort() 传入“取消请求的原因”参数，然后进行 try...catch 捕获

![](https://pic.rmb.bdstatic.com/bjh/e7c46993072985b60ee3340c1f355683.png)

预览

### 取消 axios 请求

axios 同样支持 [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

```js
const controller = new AbortController();
const API_URL = "<http://127.0.0.1:3000/api/get>";
void (async function () {
  const response = await axios.get(API_URL, {
    signal: controller.signal,
  });
  const { data } = response;
})();
setTimeout(() => {
  controller.abort();
}, 1000);
```

控制台截图：

![](https://pic.rmb.bdstatic.com/bjh/2e01899c949cd6a58c36a42297845a78.png)

预览

错误捕获：

![](https://pic.rmb.bdstatic.com/bjh/2419382f57d767775b75b6b7e711ad59.png)

预览

注意：axios 之前用于取消请求的 CancelToken 方法已经被弃用，更多请见文档 [axios-http.com/docs/cancel…](https://axios-http.com/docs/cancellation)；
