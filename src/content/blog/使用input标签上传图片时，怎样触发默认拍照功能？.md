---
title: 使用input标签上传图片时，怎样触发默认拍照功能？
pubDatetime: 2021-12-26T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: 59e0bf715ce700e2c055b99ed54832cf
description: >-
  capture属性用于指定文件上传控件中媒体拍摄的方式。可选值：*user前置*environment后置*camera相机*camcorder摄像机*microphone录音```html<inpu
difficulty: 1
questionNumber: 34
source: >-
  https://fe.ecool.fun/topic-answer/a7e1aeb6-aaf9-43fe-92ac-fd574fb60a96?orderBy=updateTime&order=desc&tagId=12
---

capture 属性用于指定文件上传控件中媒体拍摄的方式。

可选值：

- user 前置
- environment 后置
- camera 相机
- camcorder 摄像机
- microphone 录音

```html
<input type="file" accept="image/*;" capture="camera" />
```
