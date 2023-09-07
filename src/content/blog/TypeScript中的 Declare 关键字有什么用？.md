---
title: TypeScript中的 Declare 关键字有什么用？
pubDatetime: 2021-07-10T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: 575ccd262c2c1e4cf26d94ec46f8d487
description: >-
  JavaScript库或框架没有TypeScript声明文件。但是，如果要在TypeScript文件中使用它们而没有任何编译错误，则必须使用declare关键字。declare关键字用于环境声明和您要
difficulty: 1
questionNumber: 25
source: >-
  https://fe.ecool.fun/topic-answer/59da2c47-26e6-46d9-86ad-d76d75006f29?orderBy=updateTime&order=desc&tagId=19
---

JavaScript 库或框架没有 TypeScript 声明文件。 但是，如果要在 TypeScript 文件中使用它们而没有任何编译错误，则必须使用 declare 关键字。 declare 关键字用于环境声明和您要定义可能在其他位置存在的变量的方法。

如果要在我们的 TypeScript 代码中使用该库，则可以使用以下代码：

```typescript
declare var myLibrary;
```

TypeScript 运行时会将 myLibrary 变量分配为 any。
