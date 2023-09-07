---
title: Vue2.0为什么不能检查数组的变化，该怎么解决？
pubDatetime: 2022-04-05T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: cdce32ef103b2b3a984721a6dfd7d646
description: >-
  前言--我们都知道，Vue2.0对于响应式数据的实现有一些不足：*无法检测数组/对象的新增*无法检测通过索引改变数组的操作。分析--*无法检测数组/对象的新增？Vue检测数据的变动是通过Object.
difficulty: 3
questionNumber: 23
source: >-
  https://fe.ecool.fun/topic-answer/26f1a1e7-1bfd-4a0c-91b1-4e1c8455f60a?orderBy=updateTime&order=desc&tagId=14
---

## 前言

我们都知道，Vue2.0 对于响应式数据的实现有一些不足：

- 无法检测数组/对象的新增
- 无法检测通过索引改变数组的操作。

## 分析

- 无法检测数组/对象的新增？

Vue 检测数据的变动是通过 Object.defineProperty 实现的，所以无法监听数组的添加操作是可以理解的，因为是在构造函数中就已经为所有属性做了这个检测绑定操作。

- 无法检测通过索引改变数组的操作。即 vm.items\[indexOfItem\] = newValue？

[官方文档](https://cn.vuejs.org/v2/guide/list.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)中对于这两点都是简要的概括为“由于 JavaScript 的限制”无法实现，而 Object.defineProperty 是实现检测数据改变的方案，这个限制是指 Object.defineProperty

## 思考

### vm.items\[indexOfItem\] = newValue 真的不能被监听么？

> Vue 对数组的 7 个变异方法（push、pop、shift、unshift、splice、sort、reverse）实现了响应式。这里就不做测试了。我们测试一下通过索引改变数组的操作，能不能被监听到。
>
> 遍历数组，用 Object.defineProperty 对每一项进行监测

```typescript
undefined;
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b228cf688814f6c864d53b43f3f792b~tplv-k3u1fbpfcp-zoom-1.image)

预览

### 测试说明

通过索引改变 arr\[1\]，我们发现触发了 set，也就是 Object.defineProperty 是可以检测到通过索引改变数组的操作的，那 Vue2.0 为什么没有实现呢？是尤大能力不行？这肯定毋庸置疑。那他为什么不实现呢？

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/404f033ac36f47a7896e73beb469ae2c~tplv-k3u1fbpfcp-zoom-1.image)

预览

**小结**：是出于对性能原因的考虑，没有去实现它。而不是不能实现。

对于对象而言，每一次的数据变更都会对对象的属性进行一次枚举，一般对象本身的属性数量有限，所以对于遍历枚举等方式产生的性能损耗可以忽略不计，但是对于数组而言呢？数组包含的元素量是可能达到成千上万，假设对于每一次数组元素的更新都触发了枚举/遍历，其带来的性能损耗将与获得的用户体验不成正比，故 vue 无法检测数组的变动。

不过 Vue3.0 用 proxy 代替了 defineProperty 之后就解决了这个问题。

---

## 解决方案

### 数组

1.  this.$set(array, index, data)

    ```typescript
    undefined;
    ```

2.  splice

    ```typescript
    undefined;
    ```

3.  利用临时变量进行中转

    ```typescript
    undefined;
    ```

### 对象

1.  this.$set(obj, key ,value) - 可实现增、改
2.  watch 时添加`deep：true`深度监听，只能监听到属性值的变化，新增、删除属性无法监听

    ```typescript
    undefined;
    ```

3.  watch 时直接监听某个 key

    ```typescript
    undefined;
    ```
