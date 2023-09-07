---
title: html文档渲染过程，css文件和js文件的下载，是否会阻塞渲染？
pubDatetime: 2021-07-31T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 3b7775a212d4a3ff6571174ff8aea082
description: >-
  浏览器内有多个进程，其中渲染进程被称为浏览器内核，负责页面渲染和执行JS脚本等。渲染进程负责浏览器的解析和渲染，内部有JS引擎线程、GUI渲染线程、事件循环管理线程、定时器线程、HTTP线程。JS引擎
difficulty: 3
questionNumber: 236
source: >-
  https://fe.ecool.fun/topic-answer/55af61ba-c3c4-4714-a047-02dedd49d0df?orderBy=updateTime&order=desc&tagId=10
---

浏览器内有多个进程，其中渲染进程被称为浏览器内核，负责页面渲染和执行 JS 脚本等。渲染进程负责浏览器的解析和渲染，内部有 JS 引擎线程、 GUI 渲染线程、事件循环管理线程、定时器线程、HTTP 线程。

JS 引擎线程负责执行 JS 脚本，GUI 渲染线程负责页面的解析和渲染，两者是互斥的，也就是执行 JS 的时候页面是停止解析和渲染的。这是因为如果在页面渲染的同时 JS 引擎修改了页面元素，比如清空页面，会造成后续页面渲染的不必要和错误。而由于 JS 经常要操作 DOM ，就要涉及 JS 引擎线程和 GUI 渲染线程的通信，而线程间通信代价是非常昂贵的，这也是造成 JS 操作 DOM 效率不高的原因。

浏览器的 HTML/CSS 的解析和渲染都属于 GUI 渲染线程，所以和 JS 引擎线程是互斥、阻塞的。下面从代码实际运行的角度分析浏览器解析和渲染的顺序，以及互相间的阻塞关系。

## CSS 阻塞

- css 文件的下载和解析不会影响 DOM 的解析，但是会阻塞 DOM 的渲染。因为 CSSOM Tree 要和 DOM Tree 合成 Render Tree 才能绘制页面。下面的 test1 在 css 下载并解析完成前是默认样式， test2 在 css 下载并解析完成之前不会显示：

```typescript
undefined;
```

- css 文件没下载并解析完成之前，后续的 js 脚本不能执行。下面的 alert('ok') 在 css 下载并解析完成之前不会弹出来：

```typescript
undefined;
```

- css 文件的下载不会阻塞前面的 js 脚本执行。下面的 alert('ok') 会在 css 下载完成前弹出：

```typescript
undefined;
```

所以在需要提前执行不操作 dom 元素的 js 时，不妨把 js 放到 css 文件之前。

## js 阻塞

js 文件的下载和解析会阻塞 GUI 渲染进程，也就是会阻塞 DOM 和 CSS 的解析和渲染。

js 文件没下载并解析完成之前，后续的 HTML 和 CSS 无法解析：

```typescript
undefined;
```

- js 文件的下载不会阻塞前面 HTML 和 CSS 的解析：

```typescript
undefined;
```

## 需要注意的点

- 第一，GUI 渲染线程会尽可能早的将内容呈现到屏幕上，并不会等到所有的 HTML 都解析完成之后再去构建和布局 Render Tree，而是解析完一部分内容就显示一部分内容，同时，可能还在通过网络下载其余内容。下面 test1 会在 js 文件下载完成前渲染完成，而 test2 则会在 js 文件下载并执行完之后渲染：

```typescript
undefined;
```

- 第二，文件的下载是不会被阻塞的，不管是 css 还是 js 文件，浏览器的主线程会在页面解析前开启下载，所以就算在外部脚本执行前删除脚本，脚本也还是会下载。

```typescript
undefined;
```
