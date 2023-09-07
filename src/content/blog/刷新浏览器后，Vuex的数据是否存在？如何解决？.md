---
title: 刷新浏览器后，Vuex的数据是否存在？如何解决？
pubDatetime: 2022-05-11T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: a754d633b586f4c80d4b7ab07b2b3ec5
description: >-
  在vue项目中用vuex来做全局的状态管理，发现当刷新网页后，保存在vuex实例store里的数据会丢失。原因：因为`store`里的数据是保存在运行内存中的，当页面刷新时，页面会重新加载vue实例，
difficulty: 2
questionNumber: 18
source: >-
  https://fe.ecool.fun/topic-answer/7e9fd9a8-e8d8-44e6-8ffd-73faf1372a1b?orderBy=updateTime&order=desc&tagId=14
---

在 vue 项目中用 vuex 来做全局的状态管理， 发现当刷新网页后，保存在 vuex 实例 store 里的数据会丢失。

原因：因为 `store` 里的数据是保存在运行内存中的，当页面刷新时，页面会重新加载 vue 实例，store 里面的数据就会被重新赋值初始化。

我们有两种方法解决该问题：

1.  使用 `vuex-along`
2.  使用 `localStorage` 或者 `sessionStroage`

## 使用 vuex-along

`vuex-along` 的实质也是将 `vuex` 中的数据存放到 `localStorage` 或者 `sessionStroage` 中，只不过这个存取过程组件会帮我们完成，我们只需要用 vuex 的读取数据方式操作就可以了，简单介绍一下 `vuex-along` 的使用方法。

安装 `vuex-along`:

> npm install vuex-along --save

配置 `vuex-along`: 在 `store/index.js` 中最后添加以下代码:

```typescript
undefined;
```

## 使用 `localStorage` 或者 `sessionStroage`

```typescript
undefined;
```
