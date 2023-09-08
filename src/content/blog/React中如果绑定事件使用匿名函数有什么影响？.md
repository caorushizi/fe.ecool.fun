---
title: React中如果绑定事件使用匿名函数有什么影响？
pubDatetime: 2021-07-04T16:00:00.000Z
author: caorushizi
tags:
  - react
postSlug: b30705804b4e854c97dcde744757490c
description: >-
  classDemo{render(){return<buttononClick={(e)=>{alert('我点击了按钮')}}>按钮</button>}}```这样的写法，因为使用的
difficulty: 1
questionNumber: 89
source: >-
  https://fe.ecool.fun/topic-answer/37cce645-6114-44e4-a440-3b7f0c9f8887?orderBy=updateTime&order=desc&tagId=13
---

```jsx
class Demo {
  render() {
    return (
      <button
        onClick={e => {
          alert("我点击了按钮");
        }}
      >
        按钮
      </button>
    );
  }
}
```

这样的写法，因为使用的是匿名函数，所以组件每次都会认为是一个新的 props，不会使用缓存优化，在性能上会有一定的损耗。
