---
title: Koa 中，如果一个中间件没有调用 await next()，后续的中间件还会执行吗？
pubDatetime: 2023-07-07T16:00:00.000Z
author: caorushizi
tags:
  - nodejs
postSlug: 3fb75bc50f1a3e8a22ecf40e7599b4ad
description: >-
  如果一个中间件没有调用`awaitnext()`，那么后续的中间件将不会执行。这是因为当一个中间件函数执行完成并且没有调用`awaitnext()`时，它不会将控制权交给下一个中间件，而是直接返回或抛
difficulty: 2
questionNumber: 2
source: >-
  https://fe.ecool.fun/topic-answer/96b1ba5e-0f25-4633-a8d1-d0a49ee9f463?orderBy=updateTime&order=desc&tagId=18
---

如果一个中间件没有调用 `await next()`，那么后续的中间件将不会执行。

这是因为当一个中间件函数执行完成并且没有调用 `await next()` 时，它不会将控制权交给下一个中间件，而是直接返回或抛出异常。

在 `Koa` 中，中间件函数通常会使用 `await next()` 语句来调用下一个中间件函数，并等待下一个中间件执行完毕并返回结果后再执行自己的逻辑。如果一个中间件没有调用 `await next()`，那么下一个中间件就不会被执行，当前中间件也不能得到后续中间件的处理结果，从而可能导致请求无法得到正确的响应或者程序出现错误。

因此，在编写中间件函数时，需要确保在遇到需要交给下一个中间件处理的情况下，要及时调用 `await next()` 来将控制权转交给下一个中间件，以保证整个请求处理流程的正常进行。

例如，一个检测用户权限的 middleware 可以决定是否继续处理请求，还是直接返回 403 错误：

```typescript
undefined;
```
