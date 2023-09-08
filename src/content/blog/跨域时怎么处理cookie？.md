---
title: 跨域时怎么处理cookie？
pubDatetime: 2023-04-15T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: 593ea301cfd1bb904b50943c121dc309
description: >-
  一个请求从发出到返回，需要浏览器和服务端的协调配合。浏览器要把自己的请求参数带给服务端，服务端校验参数之后，除了返回数据，也可能会顺便把请求是否缓存，cookie等信息告诉浏览器。当请求是跨域请求的时
difficulty: 1.5
questionNumber: 8
source: >-
  https://fe.ecool.fun/topic-answer/e41a4651-2c23-43c7-853c-cdf6039325f6?orderBy=updateTime&order=desc&tagId=16
---

一个请求从发出到返回，需要浏览器和服务端的协调配合。浏览器要把自己的请求参数带给服务端，服务端校验参数之后，除了返回数据，也可能会顺便把请求是否缓存，cookie 等信息告诉浏览器。当请求是跨域请求的时候，这个过程还要复杂一些。接下来咱们就看看跨域会有什么问题，又需要前后端进行怎样的配合。

### 普通跨域

我有一个朋友，叫小王。前端小王和后端同事小马准备联调一个登录的 api。假设是`/login`;小王在把登录账号和密码都准备好之后，愉快的发起了 post 提交。结果很意外，请求的响应被浏览器拦截了，浏览器还贴心的在 console 上抛出了一个错误。

![](https://pic.rmb.bdstatic.com/bjh/43f9059f0a8e824e492b2d05bb12f066.png)

预览

小王翻译了一下，原来是被 CORS 策略拦截掉了。这个策略大概意思是说，服务端如果允许不同 origin 的请求，那就需要在返回的 response header 里面带上`Access-Control-Allow-Origin`这个 header。否则浏览器在拿到响应并发现响应头里没有这个 header 时，就会把响应给吞掉，而不会交给 js 进行下一步处理。

小王把这个事情告诉了小马，然后小马在返回的 header 中加上了

```makefile
Access-Control-Allow-Origin: *
```

现在小王终于可以拿到返回的结果了。

> 这里要注意，浏览器不是在请求阶段就对请求进行拦截，而是正常发出请求，拿到服务端的响应之后，开始查看响应 header 里面有没有`Access-Control-Allow-Origin`这个 header，如果没有，响应的结果就不会到 js 那里去。

### 非简单请求的跨域

后来小王觉得在 post 中发送表单格式的 body 太麻烦，希望使用 JSON 格式的请求体提交。小马觉得就是几行代码的事，就同意了。但是小王改成 JSON 的消息体之后发现又被 CORS 拦截了，并抛出了下面的错误：

![](https://pic.rmb.bdstatic.com/bjh/4e5331af46fd53f9e16744139fd15728.png)

预览

在上面的报错中，我们看到了 preflight 的单词。那这又是怎么回事呢？原来，修改请求体之后，这个跨域请求不再是简单请求了，需要在发起请求之前先进行 preflight 请求。那么什么是简单请求呢？

- 请求方法包括`GET`, `HEAD`, `POST`
- response header 里面不能包含[cors 安全 header](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)以外的 header。
- Content-Type 只限于`text/plain`, `multipart/form-data`, `application/x-www-form-urlencoded`

由于 json 数据的 content-type 导致这个 post 请求不再是简单请求，而对于非简单请求，之前允许所有域名跨域访问是被禁止的。所以还是要修改`Access-Control-Allow-Origin`为特定的请求域名。在开发模式下，可能是`http://localhost:3000`之类的。

小马在重新修改`Access-Control-Allow-Origin`，小王又拿到了登录成功的结果。可以联调下一个 api 了。

### 带 cookie 的跨域

登录是基于 session 的，也就是说，登录成功后，server 会通过`set-cookie`，将 cookie 设置到浏览器中，这样，下次访问同源下的 api 时，cookie 就会被带上。

然而，奇怪的是，小王发现登录成功后，调用别的接口，cookie 并没有被带上，导致 server 无法识别出用户信息，最终返回错误（状态码为 401）。

### withCredentials

原来，浏览器发起**跨域请求**的时候，是不会主动带上 cookie 的，如果一个请求需要 cookie，需要开发者设置一个选项，以 fetch api 为例：

```js
fetch("http://baidu.com:3000", {
  // ...
  credentials: "include",
});
```

如果使用 xhr api 来请求，则需要这样写：

```js
var invocation = new XMLHttpRequest();
var url = "http://bar.other/resources/credentialed-content/";

function callOtherDomain() {
  if (invocation) {
    invocation.open("GET", url, true);
    invocation.withCredentials = true; // 带上cookie
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}
```

小王在设置请求之后又发起了一次请求。却发现 cookie 还是没有带上去。小王只好在 MDN 继续查看资料，发现在 set-cookie 时需要带一个 sameSite 的属性。

### sameSite

sameSite 是为了防止 csrf 攻击而产生的属性，如果不知道啥是 CSRF 攻击，可以自己先去查一下。

由于我们需要在请求中带上 cookie，所以需要在 set-cookie 时将 cookie 的 sameSite 设置为 none；又由于将 sameSite 设置为 none 时，也需要将 Secure 设置上，所以请求需要基于 https;

小王最后一次请求小马对 api 进行了上诉更改，服务器终于认出请求来自谁，并返回了正确的结果，跨域的踩坑之旅算是告一段落。

### 总结

很多时候，我们可能只会关注请求体是什么，响应有没有正确返回，而忽略了 header 部分。殊不知，header 在缓存，web 安全，浏览器正确解析结果中发挥了重要的作用，比如本文中的一系列`Access-Control-Allow-*`的 header。

为了让 web 更安全，CORS 还在不断地更新，比如这个[提案](https://web.dev/cors-rfc1918-feedback/)，规定从公网到私网，或者从私网访问 local network 时，需要设置跨域头，`Access-Control-Allow-Private-Network`。
