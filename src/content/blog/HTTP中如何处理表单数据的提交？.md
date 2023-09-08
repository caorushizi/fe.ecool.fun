---
title: HTTP中如何处理表单数据的提交？
pubDatetime: 2022-02-06T16:00:00.000Z
author: caorushizi
tags:
  - 计算机网络
postSlug: d3359aa306499496a0751ee145ed19bf
description: >-
  在http中，有两种主要的表单提交的方式，体现在两种不同的Content-Type取值:*application/x-www-form-urlencoded*multipart/form-data由于
difficulty: 3
questionNumber: 33
source: >-
  https://fe.ecool.fun/topic-answer/2efd0e6a-c70c-4df5-965d-4e13b48fbd21?orderBy=updateTime&order=desc&tagId=16
---

在 http 中，有两种主要的表单提交的方式，体现在两种不同的 Content-Type 取值:

- application/x-www-form-urlencoded
- multipart/form-data

由于表单提交一般是 POST 请求，很少考虑 GET，因此这里我们将默认提交的数据放在请求体中。

## application/x-www-form-urlencoded

对于`application/x-www-form-urlencoded`格式的表单内容，有以下特点:

- 其中的数据会被编码成以&分隔的键值对
- 字符以 URL 编码方式编码。

如：

    // 转换过程: {a: 1, b: 2} -> a=1&b=2 -> 如下(最终形式)
    "a%3D1%26b%3D2"

## multipart/form-data

对于 `multipart/form-data` 而言:

- 请求头中的 `Content-Type` 字段会包含 `boundary` ，且 `boundary` 的值有浏览器默认指定。例: `Content-Type: multipart/form-data;boundary=----WebkitFormBoundaryRRJKeWfHPGrS4LKe`。
- 数据会分为多个部分，每两个部分之间通过分隔符来分隔，每部分表述均有 HTTP 头部描述子包体，如 Content-Type，在最后的分隔符会加上--表示结束。

相应的请求体是下面这样:

    Content-Disposition: form-data;name="data1";
    Content-Type: text/plain
    data1
    ----WebkitFormBoundaryRRJKeWfHPGrS4LKe
    Content-Disposition: form-data;name="data2";
    Content-Type: text/plain
    data2
    ----WebkitFormBoundaryRRJKeWfHPGrS4LKe--

## 小结

值得一提的是，`multipart/form-data` 格式最大的特点在于:每一个表单元素都是独立的资源表述。另外，你可能在写业务的过程中，并没有注意到其中还有 boundary 的存在，如果你打开抓包工具，确实可以看到不同的表单元素被拆分开了，之所以在平时感觉不到，是以为浏览器和 HTTP 给你封装了这一系列操作。

而且，在实际的场景中，对于图片等文件的上传，基本采用`multipart/form-data`而不用`application/x-www-form-urlencoded`，因为没有必要做 URL 编码，带来巨大耗时的同时，也占用了更多的空间。
