---
title: script标签放在header里和放在body底部里有什么区别？
pubDatetime: 2022-08-22T16:00:00.000Z
author: caorushizi
tags:
  - html
postSlug: f17900141c7bf73ea6e87aa55b103310
description: >-
  script通常被放在header或者body标签中，但位置的不同对于页面的加载效果也不一样。>demo中引用的js文件，都有延迟3秒才执行完成的设定。###放在header中```typescrip
difficulty: 2
questionNumber: 17
source: >-
  https://fe.ecool.fun/topic-answer/54940522-41b4-42f5-ae3e-83d520d1cff5?orderBy=updateTime&order=desc&tagId=12
---

script 通常被放在 header 或者 body 标签中，但位置的不同对于页面的加载效果也不一样。

> demo 中引用的 js 文件，都有延迟 3 秒才执行完成的设定。

### 放在 header 中

```typescript
undefined;
```

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/23/172407b4eb29b144~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

预览

你能看到 html **第一时间被加载进来**，但页面 body 内容迟迟没有渲染出来。因为在等待 header 标签中 script 脚本的加载，3 秒后，整个页面渲染完成。

### 放在 body 底部

```typescript
undefined;
```

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/23/172407b4eb50de2c~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

预览

这次 html 内容第一时间渲染完成，随后等待 js 的加载。

### 总结

**脚本会阻塞页面的渲染**，所以推荐将其放在 body 底部，因为当解析到 script 标签时，通常页面的大部分内容都已经渲染完成，让用户马上能看到一个非空白页面。

另外你能看到多个脚本之间都是异步向服务器请求，他们之间不互相依赖，最终只等待 3 秒，而非 3+3+3 秒。
