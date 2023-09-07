---
title: CSRF攻击及防护
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - 前端安全
postSlug: a8a44a881ec121d9d82fac4dffc7eb0d
description: >-
  *跨站点请求伪造（Cross-SiteRequestForgeries），冒充用户发起请求（在用户不知情的情况下），完成一些违背用户意愿的事情（如修改用户信息，删初评论等）。***1、可能造成危害：*
difficulty: 3
questionNumber: 17
source: >-
  https://fe.ecool.fun/topic-answer/a1c9963f-fb40-4d8a-aa47-e5cca8c885b7?orderBy=updateTime&order=desc&tagId=21
---

- 跨站点请求伪造（Cross-Site Request Forgeries），冒充用户发起请求（在用户不知情的情况下）， 完成一些违背用户意愿的事情（如修改用户信息，删初评论等）。

- **1、可能造成危害：**

1.  利用已通过认证的用户权限更新设定信息等；
2.  利用已通过认证的用户权限购买商品；
3.  利用已通过的用户权限在留言板上发表言论。

- **2、防御：**

1.  验证码；强制用户必须与应用进行交互，才能完成最终请求。
2.  尽量使用 post ，限制 get 使用；get 太容易被拿来做 csrf 攻击；
3.  请求来源限制，此种方法成本最低，但是并不能保证 100% 有效，因为服务器并不是什么时候都能取到 Referer，而且低版本的浏览器存在伪造 Referer 的风险。
4.  token 验证 CSRF 防御机制是公认最合适的方案。

- **使用 token 的原理：**

1.  第一步：后端随机产生一个 token，把这个 token 保存到 session 状态中；同时后端把这个 token 交给前端页面；
2.  第二步：前端页面提交请求时，把 token 加入到请求数据或者头信息中，一起传给后端；
3.  后端验证前端传来的 token 与 session 是否一致，一致则合法，否则是非法请求。
