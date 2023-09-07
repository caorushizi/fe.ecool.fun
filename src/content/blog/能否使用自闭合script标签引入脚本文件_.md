---
title: 能否使用自闭合script标签引入脚本文件?
pubDatetime: 2021-10-18T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: 9630891b522872d559729ed689c93348
description: >-
  不能。自闭合标签来自于XML语法，而不是HTML语法。根据现在的HTML语法，只有不需要结束标签的voidelement（如img之类的），或者是外部元素（如svg）可以使用自闭合。script标签显
difficulty: 1
questionNumber: 37
source: >-
  https://fe.ecool.fun/topic-answer/1592fd61-1555-4646-a2a0-438828b5b8e5?orderBy=updateTime&order=desc&tagId=12
---

不能。自闭合标签来自于 XML 语法，而不是 HTML 语法。

根据现在的 HTML 语法，只有不需要结束标签的 void element（如 img 之类的），或者是外部元素（如 svg）可以使用自闭合。script 标签显然不在此列。

```typescript
undefined;
```
