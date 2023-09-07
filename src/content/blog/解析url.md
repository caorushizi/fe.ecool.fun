---
title: 解析url
pubDatetime: 2021-07-24T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 84d2572f561a5230f742ea36228d2732
description: >-
  /\*\**解析一个url，并生成window.location对象包含的域*location:*{*href:'包含完整的url',*origin:'包含协议到pathname之前的内容',*pro
difficulty: 1
questionNumber: 60
source: >-
  https://fe.ecool.fun/topic-answer/d9e5d51b-5b8d-4b80-8011-6766a0323bb3?orderBy=updateTime&order=desc&tagId=26
---

/\*\*

- 解析一个 url，并生成 window.location 对象包含的域
- location:
- {
-        href: '包含完整的url',

-        origin: '包含协议到pathname之前的内容',

-        protocol: 'url使用的协议，包含末尾的:',

-        username: '用户名', // 暂时不支持

-        password: '密码',  // 暂时不支持

-        host: '完整主机名，包含:和端口',

-        hostname: '主机名，不包含端口'

-        port: '端口号',

-        pathname: '服务器上访问资源的路径/开头',

-        search: 'query string，?开头',

-        hash: '#开头的fragment identifier'

- }

- @param {string} url 需要解析的 url
- @return {Object} 包含 url 信息的对象 \*/
