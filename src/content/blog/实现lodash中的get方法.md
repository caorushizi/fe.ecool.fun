---
title: 实现lodash中的get方法
pubDatetime: 2022-04-10T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 1dcf10e64e910ca667fadc037982fe2b
description: >-
  使用lodash中的get函数可避免长链的key时获取不到属性而出现问题，此时进行异常避免时及其服务，如`o.a&&o.a.b&&o.a.b.c&&o.a.b.c.d`实现类似`lodash.get`
difficulty: 2.5
questionNumber: 40
source: >-
  https://fe.ecool.fun/topic-answer/a8c7e778-4bc6-40f2-ba07-865a4b2200aa?orderBy=updateTime&order=desc&tagId=26
---

使用 lodash 中的 get 函数可避免长链的 key 时获取不到属性而出现问题，此时进行异常避免时及其服务，如 `o.a && o.a.b && o.a.b.c && o.a.b.c.d`

实现类似 `lodash.get` ，有以下测试用例:

    var object = { 'a': [{ 'b': { 'c': 3 } }] };

    get(object, 'a[0].b.c');
    // => 3

    get(object, ['a', '0', 'b', 'c']);
    // => 3

    get(object, 'a.b.c', 'default');
    // => 'default'
