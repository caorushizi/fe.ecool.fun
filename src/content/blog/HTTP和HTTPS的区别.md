---
title: HTTP和HTTPS的区别
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: 545992b45fc069c82ed26c1cf8da9144
description: >-
  `HTTPS`是在`HTTP`的基础上加入了`SSL`协议，`SSL`依靠证书来验证服务器的身份，并为浏览器和服务器之间的通信加密（在传输层）`HTTP`+加密+认证+完整性保护=`HTTPS`1.`
difficulty: 2
questionNumber: 62
source: >-
  https://fe.ecool.fun/topic-answer/4ce73150-a0ff-495a-a669-191b7bd7c830?orderBy=updateTime&order=desc&tagId=16
---

`HTTPS`是在`HTTP`的基础上加入了`SSL`协议，`SSL`依靠证书来验证服务器的身份，并为浏览器和服务器之间的通信加密（在传输层）  
`HTTP` + 加密 + 认证 + 完整性保护 = `HTTPS`

1.  `HTTPS`协议需要到 CA 申请证书或自制证书
2.  `HTTP`的信息是明文传输；  
    `HTTPS`则是具有安全性的 ssl 加密
3.  `HTTP`是直接与 TCP 进行数据传输；  
    而`HTTPS`运行在`SSL/TLS`(安全传输层协议)之上，`SSL/TLS`运行在`TCP`之上，用的端口也不一样，前者是 80（需要国内备案），后者是 443
4.  `HTTP`的连接很简单，是无状态的；  
    `HTTPS`协议是由`SSL+HTTP`协议构建的，可进行加密传输、身份认证的网络协议，比`HTTP`协议安全
