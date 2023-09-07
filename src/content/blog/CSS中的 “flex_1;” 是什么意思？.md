---
title: CSS中的 “flex:1;” 是什么意思？
pubDatetime: 2021-08-08T16:00:00.000Z
author: caorushizi
tags:
  - css
postSlug: 5d99ef7fd3414840f6789bedd604afc0
description: >-
  flex是flex-grow,flex-shrink和flex-basis的简写。除了auto(11auto)和none(00auto)这两个快捷值外，还有以下设置方式：*当flex取值为一个非负数字
difficulty: 1
questionNumber: 52
source: >-
  https://fe.ecool.fun/topic-answer/286f67d3-4e8d-48f5-962a-ed9cccc46335?orderBy=updateTime&order=desc&tagId=11
---

flex 是 flex-grow, flex-shrink 和 flex-basis 的简写。

除了 auto (1 1 auto) 和 none (0 0 auto)这两个快捷值外，还有以下设置方式：

- 当 flex 取值为一个非负数字，则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%，如下是等同的：

```typescript
undefined;
```

- 当 flex 取值为 0 时，对应的三个值分别为 0 1 0%

```typescript
undefined;
```

- 当 flex 取值为一个长度或百分比，则视为 flex-basis 值，flex-grow 取 1，flex-shrink 取 1，有如下等同情况（注意 0% 是一个百分比而不是一个非负数字）

```typescript
undefined;
```

- 当 flex 取值为两个非负数字，则分别视为 flex-grow 和 flex-shrink 的值，flex-basis 取 0%，如下是等同的：

```typescript
undefined;
```

- 当 flex 取值为一个非负数字和一个长度或百分比，则分别视为 flex-grow 和 flex-basis 的值，flex-shrink 取 1，如下是等同的：

  .item {flex: 11 32px;}
  .item {
  flex-grow: 11;
  flex-shrink: 1;
  flex-basis: 32px;
  }
