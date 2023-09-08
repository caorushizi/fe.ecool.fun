---
title: 实现有并行限制的Promise调度器
pubDatetime: 2021-07-06T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 1fb9b39c82a29e79464dd656ad5f1c2d
description: >-
  ```jsclassScheduler{constructor(){this.queue=[];this.maxCount=2;this.runCounts=0;}add(promiseCreator
difficulty: 4
questionNumber: 79
source: >-
  https://fe.ecool.fun/topic-answer/47240d74-7170-41b6-b85d-2a6977ea9a11?orderBy=updateTime&order=desc&tagId=26
---

```js
class Scheduler {
  constructor() {
    this.queue = [];
    this.maxCount = 2;
    this.runCounts = 0;
  }
  add(promiseCreator) {
    this.queue.push(promiseCreator);
  }
  taskStart() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request();
    }
  }
  request() {
    if (!this.queue || !this.queue.length || this.runCounts >= this.maxCount) {
      return;
    }
    this.runCounts++;

    this.queue
      .shift()()
      .then(() => {
        this.runCounts--;
        this.request();
      });
  }
}

const timeout = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();
// 2
// 3
// 1
// 4
```
