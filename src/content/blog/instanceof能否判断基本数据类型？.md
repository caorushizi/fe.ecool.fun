---
title: instanceof能否判断基本数据类型？
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: f11b02a6ee35e9f9c985b7479216d2b4
description: >-
  能。比如下面这种方式:```typescriptundefined```其实就是自定义instanceof行为的一种方式，这里将原有的instanceof方法重定义，换成了typeof，因此能够判断基
difficulty: 2
questionNumber: 275
source: >-
  https://fe.ecool.fun/topic-answer/1d87535d-c1c8-4c6e-b6f5-583c80193217?orderBy=updateTime&order=desc&tagId=10
---

能。比如下面这种方式:

```typescript
undefined;
```

其实就是自定义 instanceof 行为的一种方式，这里将原有的 instanceof 方法重定义，换成了 typeof，因此能够判断基本数据类型。
