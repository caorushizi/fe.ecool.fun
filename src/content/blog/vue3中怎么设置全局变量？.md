---
title: vue3中怎么设置全局变量？
pubDatetime: 2022-05-11T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: 476425628da33e618cfb835d49e27e10
description: >-
  方法一config.globalProperties---------------------------`vue2.x`挂载全局是使用`Vue.prototype.$xxxx=xxx`的形式来挂载，
difficulty: 1.5
questionNumber: 17
source: >-
  https://fe.ecool.fun/topic-answer/3e2c519b-9142-40e9-bef6-6b1d975be351?orderBy=updateTime&order=desc&tagId=14
---

## 方法一 config.globalProperties

`vue2.x`挂载全局是使用 `Vue.prototype.$xxxx=xxx` 的形式来挂载，然后通过 `this.$xxx`来获取挂载到全局的变量或者方法。

这在 `Vue 3` 中，就等同于 `config.globalProperties`。这些 `property` 将被复制到应用中作为实例化组件的一部分。

```js
// 之前 (Vue 2.x)
Vue.prototype.$http = () => {};

// 之后 (Vue 3.x)
const app = createApp({});
app.config.globalProperties.$http = () => {};
```

## 方法二 Provide / Inject

vue3 新的 `provide/inject` 功能可以穿透多层组件，实现数据从父组件传递到子组件。

可以将全局变量放在根组件的 `provide` 中，这样所有的组件都能使用到这个变量。

如果需要变量是响应式的，就需要在 `provide` 的时候使用 `ref` 或者 `reactive` 包装变量。
