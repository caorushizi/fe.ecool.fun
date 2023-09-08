---
title: Map和Set的用法以及区别
pubDatetime: 2022-04-17T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: 585bf16c6ae1a8b7805125de9481af02
description: >-
  ###首先了解一下MapMap是一组键值对的结构，和JSON对象类似。**(1)Map数据结构如下**这里我们可以看到的是Map的数据结构是一个键值对的结构![](https://p9-juejin.
difficulty: 1
questionNumber: 12
source: >-
  https://fe.ecool.fun/topic-answer/487a7c86-fd00-4567-a6e2-dd6446e79e5e?orderBy=updateTime&order=desc&tagId=24
---

### 首先了解一下 Map

Map 是一组键值对的结构，和 JSON 对象类似。

**(1) Map 数据结构如下**

这里我们可以看到的是 Map 的数据结构是一个键值对的结构

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1d9cd0b4c2504300829aa34d1cc70eac~tplv-k3u1fbpfcp-watermark.image?)

预览

**(2) key 不仅可以是字符串还可以是对象**

    var obj ={name:"小如",age:9}
    let map = new Map()
    map.set(obj,"111")

打印结果如下

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fef5ef67750f4f2087c6d12185affdd1~tplv-k3u1fbpfcp-watermark.image?)

预览

**(3) Map 常用语法如下**

    //初始化`Map`需要一个二维数组(请看 Map 数据结构)，或者直接初始化一个空`Map`
    let map = new Map();

    //添加key和value值
    map.set('Amy','女')
    map.set('liuQi','男')

    //是否存在key，存在返回true,反之为false
    map.has('Amy') //true
    map.has('amy') //false

    //根据key获取value
    map.get('Amy') //女

    //删除 key为Amy的value
    map.delete('Amy')
    map.get('Amy') //undefined  删除成功

**(4) 一个 key 只能对应一个 value，多次对一个 key 放入 value，后面的值会把前面的值覆盖掉**

    var map =new Map
    map.set('Amy',"女")
    map.set('Amy',"男")
    console.log(map)

打印结果如下

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce93b0be447544238b45ab8fcb4aa102~tplv-k3u1fbpfcp-watermark.image?)

预览

### 再来了解一下 Set

Set 对象类似于数组，且成员的值都是唯一的

**(1) 打印出的数据结构如下**

这里打印出来是一个对象

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08746590e3fb41e5a62af8cc808de6bf~tplv-k3u1fbpfcp-watermark.image?)

预览

**(2) 最常用来去重使用，去重方法有很多但是都没有它运行的快。**

    var arr=[1,3,4,2,5,1,4]
    // 这里原本是一个对象用了es6的语法 转化成了数组，就是转化数组之前已经过滤掉了重复的元素了
    var arr2=[...new Set(arr)] //[1,3,4,2,5]

**(3) Set 常用语法如下**

    //初始化一个Set ，需要一个Array数组，要么空Set
    var set = new Set([1,2,3,5,6])
    console.log(set)  // {1, 2, 3, 5, 6}

    //添加元素到Set中
    set.add(7) //{1, 2, 3, 5, 6, 7}

    //删除Set中的元素
    set.delete(3) // {1, 2, 5, 6, 7}

    //检测是否含有此元素，有为true，没有则为false
    set.has(2) //true

### 总结 Map 和 Set 的区别

**(1) 这两种方法具有极快的查找速度;那么下面我们来对比一下 Map，Set，Array 的执行时间**

    //首先初始化数据
    var lng=100
    var arr =new Array(lng).fill(2)
    var set =new Set(arr)
    let map =new Map()
    for(var i=0;i<lng;i++){
    arr[i]=i
    map.set(i,arr[i])
    }

    // Array
    console.time()
    for(var j=0;j<lng;j++){
    arr.includes(j)
    }
    console.timeEnd()  //default: 0.01220703125 ms


    // Set
    console.time()
    for(var j=0;j<lng;j++){
    set.has(j)
    }
    console.timeEnd()  // default: 0.005859375 ms

    // Map
    console.time()
    for(var j=0;j<lng;j++){
    map.has(j)
    }
    console.timeEnd()
    // default: 0.007080078125 ms

通过以上几种方法我们可以看到，Set 执行时间最短，那么查找速度最快，当然了 Set 和 Map 的查找速度都很快想差不大，所以说这两种方法具有极快的查找速度。

**(2) 初始化需要的值不一样，Map 需要的是一个二维数组，而 Set 需要的是一维 Array 数组**

**(3) Map 和 Set 都不允许键重复**

**(4) Map 的键是不能修改，但是键对应的值是可以修改的；Set 不能通过迭代器来改变 Set 的值，因为 Set 的值就是键。**

**(5) Map 是键值对的存在，值也不作为健；而 Set 没有 value 只有 key，value 就是 key；**
