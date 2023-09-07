---
title: react是否支持给标签设置自定义的属性，比如给video标签设置webkit-playsinline？
pubDatetime: 2022-10-10T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: 45fd406bcae7964c3256d58f942a764c
description: >-
  如果你在react中这么样写：```typescriptundefined```在react15中将被渲染成：```typescriptundefined```在react16及之后的版本中将被渲染成
difficulty: 3.5
questionNumber: 32
source: >-
  https://fe.ecool.fun/topic-answer/45f892d7-8da0-4fd9-8550-8a7865cfcd43?orderBy=updateTime&order=desc&tagId=13
---

如果你在 react 中这么样写：

```typescript
undefined;
```

在 react 15 中将被渲染成：

```typescript
undefined;
```

在 react 16 及之后的版本中将被渲染成：

```typescript
undefined;
```

但这个会有限制，如果自定义的属性不是 `string`, `number` 或者 `object`，该属性依然会被忽略。

所以目前可以这样添加 webkit-playsinline 属性：

```typescript
undefined;
```

另外，还可以通过 `setAttribute` 进行设置，比如：

```typescript
undefined;
```
