---
title: 使用input标签上传图片时，怎样触发默认拍照功能？
pubDatetime: 2021-12-26T16:05:59.000Z
author: caorushizi
tags:
  - HTML
postSlug: a7e1aeb6-aaf9-43fe-92ac-fd574fb60a96
description: >-
  capture 属性用于指定文件上传控件中媒体拍摄的方式。 可选值： user 前置 environment 后置 camera 相机 camcorder
  摄像机 microphone 录音 <input type='file' accept='image/*;' capture='camera'> 
difficulty: 1
questionNumber: 1587
source: https://fe.ecool.fun/topic/a7e1aeb6-aaf9-43fe-92ac-fd574fb60a96
---

capture 属性用于指定文件上传控件中媒体拍摄的方式。


可选值：
* user 前置
* environment 后置
* camera 相机
* camcorder 摄像机
* microphone 录音

```html
<input type='file' accept='image/*;' capture='camera'>
```
