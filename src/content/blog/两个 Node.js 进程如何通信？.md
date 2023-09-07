---
title: 两个 Node.js 进程如何通信？
pubDatetime: 2022-03-09T16:00:00.000Z
author: caorushizi
tags:
  - nodejs
postSlug: dc2677bacf1ec44a5da5084e135d836c
description: >-
  两个Node.js进程之间如何进行通信呢？这里要分两种场景：1.不同电脑上的两个Node.js进程间通信2.同一台电脑上两个Node.js进程间通信对于第一种场景，通常使用TCP或HTTP进行通信，而
difficulty: 3
questionNumber: 9
source: >-
  https://fe.ecool.fun/topic-answer/b317da28-bef7-4cb2-8fb4-2d41f1ec09d8?orderBy=updateTime&order=desc&tagId=18
---

两个 Node.js 进程之间如何进行通信呢？这里要分两种场景：

1.  不同电脑上的两个 Node.js 进程间通信
2.  同一台电脑上两个 Node.js 进程间通信

对于第一种场景，通常使用 TCP 或 HTTP 进行通信，而对于第二种场景，又分为两种子场景：

1.  Node.js 进程和自己创建的 Node.js 子进程通信
2.  Node.js 进程和另外不相关的 Node.js 进程通信

前者可以使用内置的 IPC 通信通道，后者可以使用自定义管道，接下来进行详细介绍：

## 不同电脑上的两个 Node.js 进程间通信

要想进行通信，首先得搞清楚如何标识网络中的进程？网络层的 ip 地址可以唯一标识网络中的主机，而传输层的协议和端口可以唯一标识主机中的应用程序（进程），这样利用三元组（ip 地址，协议，端口）就可以标识网络的进程了。

### 使用 TCP 套接字

TCP 套接字（socket）是一种基于 TCP/IP 协议的通信方式，可以让通过网络连接的计算机上的进程进行通信。一个作为 server 另一个作为 client，server.js 代码如下：

```typescript
undefined;
```

client.js 代码：

```typescript
undefined;
```

运行效果：

```typescript
undefined;
```

### 使用 HTTP 协议

因为 HTTP 协议也是基于 TCP 的，所以从通信角度看，这种方式本质上并无区别，只是封装了上层协议。server.js 代码为：

```typescript
undefined;
```

client.js 代码：

```typescript
undefined;
```

运行效果：

```typescript
undefined;
```

## 同一台电脑上两个 Node.js 进程间通信

虽然网络 socket 也可用于同一台主机的进程间通讯（通过 loopback 地址 127.0.0.1），但是这种方式需要经过网络协议栈、需要打包拆包、计算校验和、维护序号和应答等，就是为网络通讯设计的，而同一台电脑上的两个进程可以有更高效的通信方式，即 IPC（Inter-Process Communication），在 unix 上具体的实现方式为 unix domain socket，这是服务器端和客户端之间通过本地打开的套接字文件进行通信的一种方法，与 TCP 通信不同，通信时指定本地文件，因此不进行域解析和外部通信，所以比 TCP 快，在同一台主机的传输速度是 TCP 的两倍。

### 使用内置 IPC 通道

如果是跟自己创建的子进程通信，是非常方便的，child_process 模块中的 fork 方法自带通信机制，无需关注底层细节，例如父进程 parent.js 代码：

```typescript
undefined;
```

子进程 child.js 代码：

```typescript
undefined;
```

运行效果如下：

```typescript
undefined;
```

### 使用自定义管道

如果是两个独立的 Node.js 进程，如何建立通信通道呢？在 Windows 上可以使用命名管道（Named PIPE），在 unix 上可以使用 unix domain socket，也是一个作为 server，另外一个作为 client，其中 server.js 代码如下：

```typescript
undefined;
```

client.js 代码如下：

```typescript
undefined;
```

运行效果：

```typescript
undefined;
```
