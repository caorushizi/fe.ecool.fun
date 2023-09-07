---
title: sql 注入
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - 前端安全
postSlug: 44b937fe3159f627e20c4532e1000bcf
description: >-
  就是通过把SQL命令插入到Web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗数据库服务器执行恶意的SQL命令,从而达到和服务器进行直接的交互**预防方案***i）后台进行输入验证，对敏感字符
difficulty: 2
questionNumber: 15
source: >-
  https://fe.ecool.fun/topic-answer/f4198437-3b03-4a26-83ae-7b820a23b85d?orderBy=updateTime&order=desc&tagId=21
---

就是通过把 SQL 命令插入到 Web 表单递交或输入域名或页面请求的查询字符串，最终达到欺骗数据库服务器执行恶意的 SQL 命令,从而达到和服务器  
进行直接的交互

**预防方案**

- i）后台进行输入验证，对敏感字符过滤。
- ii）使用参数化查询，能避免拼接 SQL，就不要拼接 SQL 语句。
