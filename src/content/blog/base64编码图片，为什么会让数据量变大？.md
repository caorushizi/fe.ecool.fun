---
title: base64编码图片，为什么会让数据量变大？
pubDatetime: 2021-08-08T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: e8108e815bdc5623747e0b7d0d24039b
description: >-
  Base64编码的思想是是采用64个基本的ASCII码字符对数据进行重新编码。它将需要编码的数据拆分成字节数组。以3个字节为一组。按顺序排列24位数据，再把这24位数据分成4组，即每组6位。再在每组的
difficulty: 3
questionNumber: 230
source: >-
  https://fe.ecool.fun/topic-answer/a93416a5-73ab-49be-98d0-42c829616f9a?orderBy=updateTime&order=desc&tagId=10
---

Base64 编码的思想是是采用 64 个基本的 ASCII 码字符对数据进行重新编码。它将需要编码的数据拆分成字节数组。以 3 个字节为一组。按顺序排列 24 位数据，再把这 24 位数据分成 4 组，即每组 6 位。再在每组的的最高位前补两个 0 凑足一个字节。这样就把一个 3 字节为一组的数据重新编码成了 4 个字节。当所要编码的数据的字节数不是 3 的整倍数，也就是说在分组时最后一组不够 3 个字节。这时在最后一组填充 1 到 2 个 0 字节。并在最后编码完成后在结尾添加 1 到 2 个"="。

（ 注 BASE64 字符表：ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/）

从以上编码规则可以得知，通过 Base64 编码，原来的 3 个字节编码后将成为 4 个字节，即字节增加了 33.3%，数据量相应变大。所以 20M 的数据通过 Base64 编码后大小大概为 20M\*133.3%=26.67M。
