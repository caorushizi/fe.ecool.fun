---
title: js中如何判断一个值是否是数组类型？
pubDatetime: 2021-09-25T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: e79a39bd63d3af79d98fedc55ada867b
description: >-
  instanceof----------```typescriptundefined```Array.isArray-------------```typescriptundefined```Obje
difficulty: 1
questionNumber: 207
source: >-
  https://fe.ecool.fun/topic-answer/f53e39b7-9de1-4a49-b95d-6c73591d5512?orderBy=updateTime&order=desc&tagId=10
---

## instanceof

```typescript
undefined;
```

## Array.isArray

```typescript
undefined;
```

## Object.prototype.isPrototypeOf

使用 Object 的原型方法 isPrototypeOf，判断两个对象的原型是否一样, isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。

```typescript
undefined;
```

## Object.getPrototypeOf

Object.getPrototypeOf() 方法返回指定对象的原型（内部\[\[Prototype\]\]属性的值）。

```typescript
undefined;
```

## Object.prototype.toString

借用 Object 原型的 call 或者 apply 方法，调用 toString()是否为\[object Array\]

```typescript
undefined;
```
