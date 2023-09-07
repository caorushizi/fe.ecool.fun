---
title: WebSocket 中的心跳是为了解决什么问题？
pubDatetime: 2021-07-11T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: d126a0df38408aabf6c43274800853eb
description: >-
  *为了定时发送消息，使连接不超时自动断线，避免后端设了超时时间自动断线。所以需要定时发送消息给后端，让后端服务器知道连接还在通消息不能断。*为了检测在正常连接的状态下，后端是否正常。如果我们发了一个定
difficulty: 3
questionNumber: 46
source: >-
  https://fe.ecool.fun/topic-answer/14ad497b-56ee-461b-8c82-110f4d1c04b0?orderBy=updateTime&order=desc&tagId=16
---

- 为了定时发送消息，使连接不超时自动断线，避免后端设了超时时间自动断线。所以需要定时发送消息给后端，让后端服务器知道连接还在通消息不能断。
- 为了检测在正常连接的状态下，后端是否正常。如果我们发了一个定时检测给后端，后端按照约定要下发一个检测消息给前端，这样才是正常的。如果后端没有正常下发，就要根据设定的超时进行重连。
