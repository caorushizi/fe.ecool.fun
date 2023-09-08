---
title: 如何能打印出console.log语句后注释掉的值？
pubDatetime: 2021-07-03T16:00:00.000Z
author: caorushizi
tags:
  - 选择题
postSlug: 2bc6a3ed44f2c2621782113c6edfafac
description: >-
  ```javascriptfunction*startGame(){constanswer=yield"DoyouloveJavaScript?";if(answer!=="Yes"){return"
difficulty: 1
questionNumber: 103
source: >-
  https://fe.ecool.fun/topic-answer/3476a4fe-f6a3-4a70-a364-edef0bb45fa8?orderBy=updateTime&order=desc&tagId=32
---

```javascript
function* startGame() {
  const answer = yield "Do you love JavaScript?";
  if (answer !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```
