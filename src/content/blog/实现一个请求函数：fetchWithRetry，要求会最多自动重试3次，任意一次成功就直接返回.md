---
title: 实现一个请求函数：fetchWithRetry，要求会最多自动重试3次，任意一次成功就直接返回
pubDatetime: 2023-07-07T16:00:00.000Z
author: caorushizi
tags:
  - 编程题
postSlug: 53abbb7f2cdb1bce7f14c07db0f1952b
description: >-
  下面是一个简单的示例实现，并未包含对异常情况的处理、超时设置等较复杂的功能：```javascriptfunctionfetchWithRetry(url,options,maxRetry=3){re
difficulty: 3
questionNumber: 5
source: >-
  https://fe.ecool.fun/topic-answer/be0412b7-6af9-4ab5-9c7f-4a06cc8cc80d?orderBy=updateTime&order=desc&tagId=26
---

下面是一个简单的示例实现，并未包含对异常情况的处理、超时设置等较复杂的功能：

```javascript
function fetchWithRetry(url, options, maxRetry = 3) {
  return new Promise((resolve, reject) => {
    const doFetch = async attempt => {
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          resolve(response);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        if (attempt < maxRetry) {
          console.log(`Attempt ${attempt + 1} failed. Retrying...`);
          doFetch(attempt + 1);
        } else {
          reject(new Error("Max retries exceeded"));
        }
      }
    };

    doFetch(0);
  });
}
```
