---
title: koa和express有哪些不同？
pubDatetime: 2022-03-21T16:00:00.000Z
author: caorushizi
tags:
  - nodejs
postSlug: 1a1f6fbe8c277750835d4f1490af45e5
description: >-
  框架介绍----express框架是一个基于Node.js平台的极简、灵活的web应用开发框架，主要基于Connect中间件，并且自身封装了路由、视图处理等功能。koa是Express原班人马基于ES
difficulty: 2.5
questionNumber: 8
source: >-
  https://fe.ecool.fun/topic-answer/bce43604-1941-4945-bade-2e6622f4420f?orderBy=updateTime&order=desc&tagId=18
---

## 框架介绍

express 框架是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，主要基于 Connect 中间件，并且自身封装了路由、视图处理等功能。

koa 是 Express 原班人马基于 ES6 新特性重新开发的框架，主要基于 co 中间件，框架自身不包含任何中间件，很多功能需要借助第三方中间件解决，但是由于其基于 ES6 generator 特性的异步流程控制，解决了 "callback hell" 和麻烦的错误处理问题。

## 相同点

两个框架都对 http 进行了封装。相关的 api 都差不多，同一批人所写。

## 不同点

express 内置了许多中间件可供使用，而 koa 没有。

express 包含路由，视图渲染等特性，而 koa 只有 http 模块。

express 的中间件模型为线型，而 koa 的中间件模型为 U 型，也可称为洋葱模型构造中间件。

express 通过回调实现异步函数，在多个回调、多个中间件中写起来容易逻辑混乱。

```js
// express写法
app.get("/test", function (req, res) {
  fs.readFile("/file1", function (err, data) {
    if (err) {
      res.status(500).send("read file1 error");
    }
    fs.readFile("/file2", function (err, data) {
      if (err) {
        res.status(500).send("read file2 error");
      }
      res.type("text/plain");
      res.send(data);
    });
  });
});
```

koa 通过 generator 和 async/await 使用同步的写法来处理异步，明显好于 callback 和 promise。

```js
app.use(async (ctx, next) => {
  await next();
  var data = await doReadFile();
  ctx.response.type = "text/plain";
  ctx.response.body = data;
});
```

## **总结**

**Express**  
优点：线性逻辑，通过中间件形式把业务逻辑细分、简化，一个请求进来经过一系列中间件处理后再响应给用户，清晰明了。  
缺点：基于 callback 组合业务逻辑，业务逻辑复杂时嵌套过多，异常捕获困难。

**Koa**  
优点：首先，借助 co 和 generator，很好地解决了异步流程控制和异常捕获问题。其次，Koa 把 Express 中内置的 router、view 等功能都移除了，使得框架本身更轻量。  
缺点：社区相对较小。
