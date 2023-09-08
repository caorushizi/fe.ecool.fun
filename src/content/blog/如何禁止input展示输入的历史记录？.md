---
title: 如何禁止input展示输入的历史记录？
pubDatetime: 2021-12-26T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: cfd7a55fbf19d54a59b410055a7a40c7
description: >-
  在输入input时会提示原来输入过的内容，还会出现下拉的历史记录，禁止这种情况只需在input中加入：autocomplete=“off”```html<inputtype="text"autocom
difficulty: 1
questionNumber: 36
source: >-
  https://fe.ecool.fun/topic-answer/9d0e350c-5b48-4122-b54c-dc55552ccc05?orderBy=updateTime&order=desc&tagId=12
---

在输入 input 时会提示原来输入过的内容，还会出现下拉的历史记录，禁止这种情况只需在 input 中加入： autocomplete=“off”

```html
<input type="text" autocomplete="off" />
```

autocomplete 属性是用来规定输入字段是否启用自动完成的功能。
