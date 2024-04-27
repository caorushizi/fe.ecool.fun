---
title: 握手问题
pubDatetime: 2022-02-06T20:06:53.000Z
author: caorushizi
tags:
  - 趣味题
postSlug: c84ba953-ef1d-4c8a-a94c-a8e06adf2c0d
description: >-
  有5对夫妇举行家庭聚会。每一个人都可能和其他人握手，但夫妇之间绝对不握手。
  聚会结束时，A先生问大家握手几次，结果是每个人的握手次数都不相同，那么请问A先生的太太握手几次？ A先生的太太握了4次手。
  首先，分析题目：每一个人都可能和其他人握手, 但夫妇之间绝对不握手。 可得出每个人最多握八次手（除自己和亲爱的） 甲先生问各握了几次手时得到的回答是：
  0,1,2,3,4,5,6,7,8 解析如下：
difficulty: 3.5
questionNumber: 1650
source: https://fe.ecool.fun/topic/c84ba953-ef1d-4c8a-a94c-a8e06adf2c0d
---

有5对夫妇举行家庭聚会。每一个人都可能和其他人握手，但夫妇之间绝对不握手。

聚会结束时，A先生问大家握手几次，结果是每个人的握手次数都不相同，那么请问A先生的太太握手几次？

---

A先生的太太握了4次手。

首先，分析题目：**每一个人都可能和其他人握手, 但夫妇之间绝对不握手**。

可得出每个人最多握八次手（除自己和亲爱的）

甲先生问各握了几次手时得到的回答是：

0,1,2,3,4,5,6,7,8

解析如下：

- 回答握了8次的说明TA除了自己亲爱的以外，和每个人都握手了。所以TA和回答握手次数为0的那个人是一家人。

- 因为8君和除了0君外的人都握手了，所以1君的那一次握手肯定是和8君。7君握了七次手，没和0君、1君握，因为每人最多握8次手且0君是8君的爱人，则可得出7君和1君是一家人。

- 因为8君和除了0君外的人都握手了，7君和除0君、1君外的人都握手了，所以2君的两次握手应该分别是和7君、8君。6君握了6次手，没和0君、1君、2君握手，因为每人最多握8次手且0君是8君的爱人、1君是7君的爱人，所以2君和6君是一家人。

- 因为8君和除了0君外的人都握手了，7君和除0君、1君外的人都握手了，6君和除0君、1君、2君外的人都握手了，所以3君的三次握手应该分别是和6君、7君、8君握的。5君握了5次手，没和0君、1君、2君、3君握，因为每人最多握8次手且0君是8君的爱人、1君是7君的爱人、2君是6君的爱人，所以3君和5君是一家人。

- 由上可得，4君即为甲太太，也就是说甲太太握了4次手.

那甲太太分别是和谁握的呢？

当然是5、6、7、8君啦~