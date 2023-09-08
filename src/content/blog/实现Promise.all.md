---
title: 实现Promise.all
pubDatetime: 2021-08-12T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: a41047be473c3ecd59f8731eaa28869e
description: >-
  //简易版```javascriptPromise.myAll=function(promiseArr){returnnewPromise((resolve,reject)=>{constans=[]
difficulty: 3
questionNumber: 59
source: >-
  https://fe.ecool.fun/topic-answer/f1dfb420-8c92-4210-98af-130b79133d82?orderBy=updateTime&order=desc&tagId=26
---

// 简易版

```javascript
Promise.myAll = function (promiseArr) {
  return new Promise((resolve, reject) => {
    const ans = [];
    let index = 0;
    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i]
        .then(res => {
          ans[i] = res;
          index++;
          if (index === promiseArr.length) {
            resolve(ans);
          }
        })
        .catch(err => reject(err));
    }
  });
};
```

// 终极版

```javascript
// 输入不仅仅只有Array
function promiseAll(args) {
  return new Promise((resolve, reject) => {
    const promiseResults = [];
    let iteratorIndex = 0;
    // 已完成的数量，用于最终的返回，不能直接用完成数量作为iteratorIndex
    // 输出顺序和完成顺序是两码事
    let fullCount = 0;
    // 用于迭代iterator数据
    for (const item of args) {
      // for of 遍历顺序，用于返回正确顺序的结果
      // 因iterator用forEach遍历后的key和value一样，所以必须存一份for of的 iteratorIndex
      let resultIndex = iteratorIndex;
      iteratorIndex += 1;
      // 包一层，以兼容非promise的情况
      Promise.resolve(item)
        .then(res => {
          promiseResults[resultIndex] = res;
          fullCount += 1;
          // Iterator 接口的数据无法单纯的用length和size判断长度，不能局限于Array和 Map类型中
          if (fullCount === iteratorIndex) {
            resolve(promiseResults);
          }
        })
        .catch(err => {
          reject(err);
        });
    }
    // 处理空 iterator 的情况
    if (iteratorIndex === 0) {
      resolve(promiseResults);
    }
  });
}
if (!Promise.all) Promise.all = promiseAll;
```
