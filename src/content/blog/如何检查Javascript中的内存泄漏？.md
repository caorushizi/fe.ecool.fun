---
title: 如何检查Javascript中的内存泄漏？
pubDatetime: 2021-09-25T16:00:00.000Z
author: caorushizi
tags:
  - 工具
postSlug: 4e8e6dc333599e29ea2c984e8bbb387b
description: >-
  浏览器---Chrome浏览器查看内存占用，按照以下步骤操作。![](https://i.loli.net/2021/09/25/luOGHT7a2EqMSf1.png)预览1、打开开发者工具，选择T
difficulty: 2
questionNumber: 18
source: >-
  https://fe.ecool.fun/topic-answer/6dd983d9-39fc-48ca-9e22-7599ab339f5b?orderBy=updateTime&order=desc&tagId=29
---

## 浏览器

Chrome 浏览器查看内存占用，按照以下步骤操作。

![](https://i.loli.net/2021/09/25/luOGHT7a2EqMSf1.png)

预览

    1、打开开发者工具，选择 Timeline 面板
    2、在顶部的Capture字段里面勾选 Memory
    3、点击左上角的录制按钮。
    4、在页面上进行各种操作，模拟用户的使用情况。
    5、一段时间后，点击对话框的 stop 按钮，面板上就会显示这段时间的内存占用情况。

如果内存占用基本平稳，接近水平，就说明不存在内存泄漏。

![](https://i.loli.net/2021/09/25/1jnvlaB8CY7Rqup.png)

预览

反之，就是内存泄漏了。

![](https://i.loli.net/2021/09/25/wUHKg48oArEZMt1.png)

预览

## 命令行

命令行可以使用 Node 提供的 process.memoryUsage 方法。

```typescript
undefined;
```

process.memoryUsage 返回一个对象，包含了 Node 进程的内存占用信息。该对象包含四个字段，单位是字节，含义如下。

![](https://i.loli.net/2021/09/25/Hncwkesmfd5iuG8.png)

预览

    rss（resident set size）：所有内存占用，包括指令区和堆栈。
    heapTotal："堆"占用的内存，包括用到的和没用到的。
    heapUsed：用到的堆的部分。
    external： V8 引擎内部的 C++ 对象占用的内存。

判断内存泄漏，以 `heapUsed` 字段为准。
