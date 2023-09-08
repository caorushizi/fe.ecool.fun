---
title: 如果使用Math.random()计算中奖概率会有什么问题吗？
pubDatetime: 2022-10-09T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 7484a1b50bb1ee0b2e2f8d93c029c7cf
description: >-
  ###一、引言我们日常开发经常会用到随机数，基本上我接触下来，都是使用`Math.random()`生成的。例如生成随机ID：```jsdocument.body.id=('_'+Math.rando
difficulty: 4
questionNumber: 71
source: >-
  https://fe.ecool.fun/topic-answer/96c01fd6-3a42-497e-aca3-4232d08b8e6b?orderBy=updateTime&order=desc&tagId=10
---

### 一、引言

我们日常开发经常会用到随机数，基本上我接触下来，都是使用 `Math.random()` 生成的。

例如生成随机 ID：

````js
document.body.id = ('_' + Math.random()).replace('0.', '');
``

请问这样实现有没有问题？

回答：没有问题。

例如随机排序：

```js
[1, 2, 3, 4, 5].sort(_ => Math.random() - .5);
````

请问这样实现有没有问题？

回答：没有问题。

但是，如果你希望实现加密操作，例如生成密钥，尤其是在 Node.js 服务层，则 `Math.random()` 就有问题了，会有潜在的安全风险，需要使用 `crypto.getRandomValues()` 方法。

### 二、Math.random 的安全风险

提到 `Math.random()` 的安全风险，有开发人员会说因为 `Math.random()` 返回的是伪随机数。

这个解释似是而非，和伪随机数没有关系，`getRandomValues()` 方法返回的也是伪随机数。

还有人说因为 `Math.random()` 返回的随机值范围不是均匀的，这个回答就不是似是而非了，而是大错特错。

那究竟为何是不安全的呢？

这个就要讲讲 `Math.random()` 方法的底层实现了，这里有[一篇文章](https://www.anquanke.com/post/id/231799)有深入介绍，我简述下其中的要点。

`Math.random()` 函数返回一个范围 0-1 的伪随机浮点数，其在 V8 中的实现原理是这样的：

为了保证足够的性能，`Math.random()` 随机数并不是实时生成的，而是直接生成一组随机数（64 个），并放在缓存中。

当这一组随机数取完之后再重新生成一批，放在缓存中。

由于 `Math.random()` 的底层算法是公开的（xorshift128+ 算法），V8 源码可见，因此，是可以使用其他语言模拟的，这就导致，如果攻击者知道了当前随机生成器的状态，那就可以知道缓存中的所有随机数，那就很容易匹配与破解。

例如抽奖活动，使用 `Math.random()` 进行随机，那么就可以估算出一段时间内所有的中奖结果，从而带来非常严重且致命的损失。

此时应该使用 `getRandomValues()` 方法。

### 三、了解 getRandomValues 方法

`Crypto.getRandomValues()` 方法返回的也是伪随机数，不是真随机，按照 MDN 的说法，是为了性能考虑，没有使用真随机。

实际上，按照我的认识，所有可以使用算法生成的随机数都可以看成是伪随机数，真随机数应该是存在自然界，例如粒子的起伏，声音的噪点，分子的分布等。

和 `Math.random()` 方法的区别在于，`getRandomValues()` 方法的随机种子生成器更加的无序，例如系统层面的无序源（有些硬件自带随机种子）。

然后不同浏览器下 `getRandomValues()` 方法生成的随机数可能是有区别的。

以及 `getRandomValues()` 方法的底层实现是没有缓存的，随机数都是实时生成的，因此，性能上是要比 `Math.random()` 差的，因此，如果是高并发的场景，同时随机数仅仅是用做随机，与安全和金钱不相关，请使用 `Math.random()` 而不是 `getRandomValues()`。

就 Web 前端而言，必须要使用 `getRandomValues()` 方法的场景很少，不过由于纯前端几乎不存在所谓的高并发，因此，你使用 `getRandomValues()` 方法也是可以的，有装逼的作用。

#### 语法和使用

```js
let randNumber = self.crypto.getRandomValues(new Uint32Array(1))[0];
// 一串随机整数，通常10位
console.log(randNumber);
```

语法为：

```js
crypto.getRandomValues(typedArray);
```

支持的参数 `typedArray` 表示整数型的类型数组，包括：Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array 或者 Uint32Array。

返回值回是所有被替换为随机数的新的数组。

不过 `getRandomValues()` 方法名称有些长，不利于记忆和敏捷使用，我们可以改造下，例如：

```js
Math.randomValue = function () {
  return self.crypto.getRandomValues(new Uint32Array(1))[0];
};
```

这样我们就可以使用 `Math.randomValue()` 方法返回足够安全的随机值了。
