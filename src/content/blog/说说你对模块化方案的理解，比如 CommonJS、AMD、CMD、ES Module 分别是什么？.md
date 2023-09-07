---
title: 说说你对模块化方案的理解，比如 CommonJS、AMD、CMD、ES Module 分别是什么？
pubDatetime: 2023-03-04T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 3932c26d7de5323d2ef5b7a171bc27c8
description: >-
  `时间轴：CommonJS-->AMD-->CMD-->ESModule`###CommonJS*常用于：`服务器端`，`node`，`webpack`*特点：`同步/运行时加载`，`磁盘读取速度快`
difficulty: 4
questionNumber: 47
source: >-
  https://fe.ecool.fun/topic-answer/f5f2f81e-c0c8-409e-ba00-3f3428ae535b?orderBy=updateTime&order=desc&tagId=10
---

`时间轴：CommonJS --> AMD --> CMD --> ES Module`

### CommonJS

- 常用于：`服务器端`，`node`，`webpack`
- 特点：`同步/运行时加载`，`磁盘读取速度快`
- 语法：

```typescript
undefined;
```

**注意**  
不可以`exports = xxx`，这样写会无效，因为更改了 exports 的地址，而 `exports` 是 `module.exports` 的引用指向的是同一个内存，模块最后导出的是 `module.exports`

```typescript
undefined;
```

### AMD

- 常用于：不常用，`CommonJs的浏览器端实现`
- 特点：
  - `异步加载`：因为面向浏览器端，为了不影响渲染肯定是异步加载
  - `依赖前置`：所有的依赖必须写在最初的依赖数组中，速度快，但是会浪费资源，预先加载了所有依赖不管你是否用到
- 语法：

```typescript
undefined;
```

### CMD

- 常用于：不常用，`根据CommonJs和AMD实现，优化了加载方式`
- 特点：
  - `异步加载`
  - `按需加载/依赖就近`：用到了再引用依赖，方便了开发，缺点是速度和性能较差
- 语法：

```typescript
undefined;
```

### ES module

- 常用于：`目前浏览器端的默认标准`
- 特点：`静态编译：` 在编译的时候就能确定依赖关系，以及输入和输出的变量
- 语法：

```typescript
undefined;
```

**注意**

1.  `export default`在同一个文件中只可存在一个（一个模块只能有一个默认输出）
2.  一个模块中可以同时使用 export default 和 export

```typescript
undefined;
```
