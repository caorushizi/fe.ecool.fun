---
title: Blob，ArrayBuffer，Base64有什么区别？
pubDatetime: 2023-07-07T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: 76dad229845e6a56f30602e0f8ef3764
description: >-
  Blob、ArrayBuffer和Base64是在Web开发中处理二进制数据的不同表示和操作方式。1.Blob（BinaryLargeObject）：Blob是一种表示二进制数据的对象，可以存储大量的
difficulty: 3
questionNumber: 2
source: >-
  https://fe.ecool.fun/topic-answer/65abec8a-88fd-4085-8695-e207fa3aec3f?orderBy=updateTime&order=desc&tagId=16
---

Blob、ArrayBuffer 和 Base64 是在 Web 开发中处理二进制数据的不同表示和操作方式。

1.  Blob（Binary Large Object）： Blob 是一种表示二进制数据的对象，可以存储大量的数据。它常用于处理文件、图像、音频和视频等媒体数据。Blob 对象可以通过`new Blob()`构造函数创建，也可以从其他数据源（例如，通过 XMLHttpRequest 下载的数据）生成。Blob 提供了一些方法和属性，用于读取和操作二进制数据。
2.  ArrayBuffer： ArrayBuffer 是一种用于表示通用的二进制数据缓冲区的对象。它在内存中分配一块连续的、固定大小的原始二进制数据，并提供了一些方法和属性来读取和操作这些数据。ArrayBuffer 不直接访问二进制数据，而是通过 TypedArray 视图或 DataView 对象来读写数据。
3.  Base64： Base64 是一种将二进制数据转换为可打印字符的编码方式。它通过将二进制数据按照一定规则进行编码，生成由 A-Z、a-z、0-9 和一些特殊字符组成的字符串。Base64 编码后的数据可以用于在文本协议中传输二进制数据，例如在网络请求中传递图片数据或在 HTML 中嵌入图片。

区别：

- Blob 和 ArrayBuffer 都是用于表示和处理二进制数据的对象，但 Blob 通常用于处理大量数据和文件，而 ArrayBuffer 用于处理更小粒度的数据。
- Blob 对象提供了一些方法和属性，用于操作和读取二进制数据，而 ArrayBuffer 本身并不直接提供数据访问方法，需要通过 TypedArray 视图或 DataView 对象来读写数据。
- Base64 是一种编码方式，用于将二进制数据转换为可打印字符，以便在文本协议中传输。Base64 编码后的数据可以作为字符串进行处理，而 Blob 和 ArrayBuffer 是二进制数据的对象表示。

需要根据具体的使用场景和需求选择适合的数据表示和处理方式。
