---
title: react是否支持给标签设置自定义的属性，比如给video标签设置webkit-playsinline？
pubDatetime: 2022-10-10T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: f53e3bf8ef7f25d0ce1e25da0a6bc20a
description: >-
  如果你在react中这么样写：```js//Yourcode:<divmycustomattribute="something"/>```在react15中将被渲染成：```js//React15ou
difficulty: 3.5
questionNumber: 32
source: >-
  https://fe.ecool.fun/topic-answer/45f892d7-8da0-4fd9-8550-8a7865cfcd43?orderBy=updateTime&order=desc&tagId=13
---

如果你在 react 中这么样写：

```js
// Your code:
<div mycustomattribute="something" />
```

在 react 15 中将被渲染成：

```js
// React 15 output:
<div />
```

在 react 16 及之后的版本中将被渲染成：

```js
// React 16 output:
<div mycustomattribute="something" />
```

但这个会有限制，如果自定义的属性不是 `string`, `number` 或者 `object`，该属性依然会被忽略。

所以目前可以这样添加 webkit-playsinline 属性：

```js
<video width="750" height="500" controls webkit-playsinline="true">
  <source
    src="https://media.w3.org/2010/05/sintel/trailer.mp4"
    type="video/mp4"
  />
</video>
```

另外，还可以通过 `setAttribute` 进行设置，比如：

```js
import * as React from "react";
import { Component } from "react";

export class VideoComponent extends Component {
  videoContainer: HTMLDivElement;
  componentDidMount() {
    const video = document.createElement("video");
    video.autoplay = true;
    video.loop = true;
    video.muted = true; // fixes autoplay in chrome
    video.setAttribute("playsinline", "true"); // fixes autoplay in webkit (ie. mobile safari)

    const source = document.createElement("source");
    source.src = "/path/to/your/video.mp4";
    source.type = "video/mp4";
    video.appendChild(source);

    this.videoContainer.appendChild(video);
  }
  render() {
    return (
      <div
        ref={ref => {
          this.videoContainer = ref;
        }}
      />
    );
  }
}
```
