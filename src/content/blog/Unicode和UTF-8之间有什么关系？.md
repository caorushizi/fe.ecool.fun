---
title: Unicode和UTF-8之间有什么关系？
pubDatetime: 2023-04-02T16:00:00.000Z
author: caorushizi
tags:
  - 计算机基础
postSlug: 297ca7516045d7a9fdfbefd3769782af
description: >-
  Unicode可以认为是字符的编号，即每个字符在Unicode表里面的序号，每个字符对应一个不同的Unicode编码，它只规定了符号的二进制代码，却没有规定这个二进制代码在计算机中如何编码传输。utf
difficulty: 1
questionNumber: 2
source: >-
  https://fe.ecool.fun/topic-answer/23cebacc-48d3-4b48-9393-5c424afffab0?orderBy=updateTime&order=desc&tagId=30
---

Unicode 可以认为是字符的编号，即每个字符在 Unicode 表里面的序号，每个字符对应一个不同的 Unicode 编码，它只规定了符号的二进制代码，却没有规定这个二进制代码在计算机中如何编码传输。

utf8 是一种编码方式，类似于哈夫曼编码过程，就是把常用（位置靠前）的 Unicode 字符用短编码表示，不常用的字符用长代码表示，从而实现更小的整个文档的文件大小。在 UTF-8 编码中，英文字母是一个字节，中文（非生僻字）是 2~3 个字节。

可以认为， utf8 是对 Unicode 的一种压缩算法。
