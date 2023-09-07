---
title: 写一个 repeat 方法，实现字符串的复制拼接
pubDatetime: 2022-02-27T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 6c2f7bfd70c4db5b1c1deef9811dcf60
description: >-
  实现的方法有很多，以下介绍几种。方法一---空数组join```typescriptundefined```方法二---改良方法1，省去创建数组这一步，提高性能。之所以创建一个带length属性的对象
difficulty: 1
questionNumber: 45
source: >-
  https://fe.ecool.fun/topic-answer/e797a169-0044-43d1-8fe6-4bad6e7372f9?orderBy=updateTime&order=desc&tagId=26
---

实现的方法有很多，以下介绍几种。

## 方法一

空数组 join

```typescript
undefined;
```

## 方法二

改良方法 1，省去创建数组这一步，提高性能。之所以创建一个带 length 属性的对象，是因为要调用数组的原型方法，需要指定 call 第一个参数为类数组对象。

```typescript
undefined;
```

## 方法三

改良方法 2，利用闭包缓存 join，避免重复创建对象、寻找方法。

```typescript
undefined;
```

## 方法四

使用二分法，减少操作次数

```typescript
undefined;
```

## 方法五

方法 4 的变种，免去创建数组与使用 join。缺点是循环中创建的字符串比要求的长。

```typescript
undefined;
```

## 方法六

方法 4 的改良。

```typescript
undefined;
```

## 方法七

与 6 相近，不过递归在浏览器中有优化。

```typescript
undefined;
```

## 方法八

一则反例，很慢，但是可行。

```typescript
undefined;
```

最后给出 MDN 中的`String.prototype.repeat`的 polyfill 方法，大家也可以进行参考：

```typescript
undefined;
```
