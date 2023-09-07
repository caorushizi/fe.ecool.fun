---
title: cookie 怎么设置只在 https 时携带？
pubDatetime: 2022-09-18T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: 4072380de5e59f341a1f7125084a0366
description: >-
  答案：设置`cookie`的`secure`属性。`secure`选项用来设置`cookie`只在确保安全的请求中才会发送。当请求是`HTTPS`或者其他安全协议时，包含`secure`选项的`coo
difficulty: 1
questionNumber: 10
source: >-
  https://fe.ecool.fun/topic-answer/6bea229f-8bae-4472-bedb-1260ec4aea47?orderBy=updateTime&order=desc&tagId=16
---

答案：设置 `cookie` 的 `secure` 属性。

`secure`选项用来设置`cookie`只在确保安全的请求中才会发送。当请求是`HTTPS`或者其他安全协议时，包含 `secure` 选项的 `cookie` 才能被发送至服务器。

默认情况下，cookie 不会带 secure 选项(即为空)。所以默认情况下，不管是 HTTPS 协议还是 HTTP 协议的请求，cookie 都会被发送至服务端。

但要注意一点，secure 选项只是限定了在安全情况下才可以传输给服务端，但并不代表你不能看到这个 cookie。
