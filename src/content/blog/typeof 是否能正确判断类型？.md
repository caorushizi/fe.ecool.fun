---
title: typeof 是否能正确判断类型？
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 88bde7ef1e1cf4c2ed924db9e0059108
description: >-
  对于原始类型来说，除了null都可以调用typeof显示正确的类型。```typescriptundefined```但对于引用数据类型，除了函数之外，都会显示"object"。```typescri
difficulty: 2
questionNumber: 276
source: >-
  https://fe.ecool.fun/topic-answer/a24f7d09-79df-4468-af94-654e8cfd3288?orderBy=updateTime&order=desc&tagId=10
---

对于原始类型来说，除了 null 都可以调用 typeof 显示正确的类型。

```typescript
undefined;
```

但对于引用数据类型，除了函数之外，都会显示"object"。

```typescript
undefined;
```

因此采用 typeof 判断对象数据类型是不合适的，采用 instanceof 会更好，instanceof 的原理是基于原型链的查询，只要处于原型链中，判断永远为 true

```typescript
undefined;
```
