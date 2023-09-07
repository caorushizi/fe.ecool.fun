---
title: Vue 模板是如何编译的
pubDatetime: 2022-06-23T16:00:00.000Z
author: caorushizi
tags:
  - vue
postSlug: b1cb7e95ff724f55ab1473e663061788
description: >-
  ```typescriptundefined```这个大家都熟悉，调用render就会得到传入的模板(`.vue`文件)对应的虚拟DOM，那么这个render是哪来的呢？它是怎么把`.vue`文件转成
difficulty: 3.5
questionNumber: 15
source: >-
  https://fe.ecool.fun/topic-answer/418ef81f-96c6-4c4e-b218-df29be84890d?orderBy=updateTime&order=desc&tagId=14
---

```typescript
undefined;
```

这个大家都熟悉，调用 render 就会得到传入的模板(`.vue`文件)对应的虚拟 DOM，那么这个 render 是哪来的呢？它是怎么把 `.vue` 文件转成浏览器可识别的代码的呢？

render 函数是怎么来的有两种方式

- 第一种就是经过模板编译生成 render 函数
- 第二种是我们自己在组件里定义了 render 函数，这种会跳过模板编译的过程

本文将为大家分别介绍这两种，以及详细的编译过程原理

## 认识模板编译

我们知道 `<template></template>` 这个是模板，不是真实的 HTML，浏览器是不认识模板的，所以我们需要把它编译成浏览器认识的原生的 HTML

这一块的主要流程就是

1.  提取出模板中的原生 HTML 和非原生 HTML，比如绑定的属性、事件、指令等等
2.  经过一些处理生成 render 函数
3.  render 函数再将模板内容生成对应的 vnode
4.  再经过 patch 过程( Diff )得到要渲染到视图中的 vnode
5.  最后根据 vnode 创建真实的 DOM 节点，也就是原生 HTML 插入到视图中，完成渲染

上面的 1、2、3 条就是模板编译的过程了

那它是怎么编译，最终生成 render 函数的呢？

## 模板编译详解——源码

### baseCompile()

这就是模板编译的入口函数，它接收两个参数

- `template`：就是要转换的模板字符串
- `options`：就是转换时需要的参数

编译的流程，主要有三步：

1.  模板解析：通过正则等方式提取出 `<template></template>` 模板里的标签元素、属性、变量等信息，并解析成抽象语法树 `AST`
2.  优化：遍历 `AST` 找出其中的静态节点和静态根节点，并添加标记
3.  代码生成：根据 `AST` 生成渲染函数 `render`

这三步分别对应三个函数，后面会一一下介绍，先看一下 `baseCompile` 源码中是在哪里调用的

源码地址：`src/complier/index.js - 11行`

```typescript
undefined;
```

就这么几行代码，三步，调用了三个方法很清晰

我们先看一下最后 return 出去的是个啥，再来深入上面这三步分别调用的方法源码，也好更清楚的知道这三步分别是要做哪些处理

### 编译结果

比如有这样的模板

```typescript
undefined;
```

打印一下编译后的结果，也就是上面源码 return 出去的结果，看看是啥

```typescript
undefined;
```

看不明白也没有关系，注意看上面提到的三步都干了啥

- `ast` 字段，就是第一步生成的
- `static` 字段，就是标记，是在第二步中根据 `ast` 里的 `type` 加上去的
- `render` 字段，就是第三步生成的

有个大概的印象了，然后再来看源码

### 1\. parse()

源码地址：`src/complier/parser/index.js - 79行`

就是这个方法就是解析器的主函数，就是它通过正则等方法提取出 `<template></template>` 模板字符串里所有的 `tag`、`props`、`children` 信息，生成一个对应结构的 ast 对象

`parse` 接收两个参数

- `template` ：就是要转换的模板字符串
- `options`：就是转换时需要的参数。它包含有四个钩子函数，就是用来把 `parseHTML` 解析出来的字符串提取出来，并生成对应的 `AST`

核心步骤是这样的：

调用 `parseHTML` 函数对模板字符串进行解析

- 解析到开始标签、结束标签、文本、注释分别进行不同的处理
- 解析过程中遇到文本信息就调用文本解析器 `parseText` 函数进行文本解析
- 解析过程中遇到包含过滤器，就调用过滤器解析器 `parseFilters` 函数进行解析

每一步解析的结果都合并到一个对象上(就是最后的 AST)

这个地方的源码实在是太长了，有大几百行代码，我就只贴个大概吧，有兴趣的自己去看一下

```typescript
undefined;
```

上面解析文本时调用的 `chars()` 会根据不同类型节点加上不同 `type`，来标记 `AST` 节点类型，这个属性在下一步标记的时候会用到

type

AST 节点类型

1

元素节点

2

包含变量的动态文本节点

3

没有变量的纯文本节点

### 2\. optimize()

这个函数就是在 `AST` 里找出静态节点和静态根节点，并添加标记，为了后面 `patch` 过程中就会跳过静态节点的对比，直接克隆一份过去，从而优化了 `patch` 的性能

函数里面调用的外部函数就不贴代码了，大致过程是这样的

- **标记静态节点(markStatic)**。就是判断 type，上面介绍了值为 1、2、3 的三种类型

  - type 值为 1：就是包含子元素的节点，设置 static 为 false 并递归标记子节点，直到标记完所有子节点
  - type 值为 2：设置 static 为 false
  - type 值为 3：就是不包含子节点和动态属性的纯文本节点，把它的 static = true，patch 的时候就会跳过这个，直接克隆一份去

- **标记静态根节点(markStaticRoots)**，这里的原理和标记静态节点基本相同，只是需要满足下面条件的节点才能算作是静态根节点

  - 节点本身必须是静态节点
  - 必须有子节点
  - 子节点不能只有一个文本节点

源码地址：`src/complier/optimizer.js - 21行`

```typescript
undefined;
```

### 3\. generate()

这个就是生成 render 的函数，就是说最终会返回下面这样的东西

```typescript
undefined;
```

这个结构是不是有点熟悉？

了解虚拟 DOM 就可以看出来，上面的 render 正是虚拟 DOM 的结构，就是把一个标签分为 `tag`、`props`、`children`，没有错

在看 `generate` 源码之前，我们要先了解一下上面这最后返回的 `render` 字段是什么意思，再来看 `generate` 源码，就会轻松得多，不然连函数返回的东西是干嘛的都不知道怎么可能看得懂这个函数呢

#### render

我们来翻译一下上面编译出来的 `render`

这个 `with` 在 《**你不知道的 JavaScript**》上卷里介绍的是，用来欺骗词法作用域的关键字，它可以让我们更快的引用一个对象上的多个属性

看个例子

```typescript
undefined;
```

上面的 `with(this){}` 里的 `this` 就是当前组件实例。因为通过 `with` 改变了词法作用域中属性的指向，所以标签里使用 `name` 直接用就是了，而不需要 `this.name` 这样

那 `_c`、 `_v` 和 `_s` 是什么呢？

在源码里是这样定义的，格式是：**`_c`(缩写) = `createElement`(函数名)**

源码地址：`src/core/instance/render-helpers/index.js - 15行`

```typescript
undefined;
```

再来看是不是就清楚多了呢

```typescript
undefined;
```

接下来我们再来看 `generate()` 源码

#### generate

源码地址：`src/complier/codegen/index.js - 43行`

这个流程很简单，只有几行代码，就是先判断 `AST` 是不是为空，不为空就根据 AST 创建 vnode，否则就创建一个空 div 的 vnode

```typescript
undefined;
```

可以看出这里面主要就是通过 `genElement()` 方法来创建 `vnode` 的，所以我们来看一下它的源码，看是怎么创建的

#### genElement()

源码地址：`src/complier/codegen/index.js - 56行`

这里的逻辑还是很清晰的，就是一堆 `if/else` 判断传进来的 AST 元素节点的属性来执行不同的生成函数

> 这里还可以发现另一个知识点 v-for 的优先级要高于 v-if，因为先判断 for 的

```typescript
undefined;
```

每一种类型调用的生成函数就不一一列举了，总的来说最后创建出来的 vnode 节点类型无非就三种，元素节点、文本节点、注释节点

## 自定义的 render

先举个例子吧，三种情况如下

```typescript
undefined;
```

```typescript
undefined;
```

```typescript
undefined;
```

**上面三种，最后渲染的出来的就是完全一模一样的**，因为这个 `h` 就是上面模板编译后的那个 `_c`

这时有人可能就会问，为什么要自己写呢，不是有模板编译自动生成吗？

这个问题问得好！自己写肯定是有好处的

1.  自己把 vnode 给写了，就会直接跳过了模板编译，不用去解析模板里的动态属性、事件、指令等等了，所以性能上会有那么一丢丢提升。这一点在下面的渲染的优先级上就有体现
2.  还有一些情况，能让我们代码写法的更加灵活，更加方便简洁，不会冗余

比如 `Element-UI` 里面的组件源码里就有大量直接写 render 函数

接下来分别看下这两点是如何体现的

### 1\. 渲染优先级

先看一下在官网的生命周期里，关于模板编译的部分

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bdc3075e22f14a17a567ff3a9a09766b~tplv-k3u1fbpfcp-zoom-1.image)

预览

如图可以知道，如果有 `template`，就不会管 `el` 了，所以 **template 比 el 的优先级更高**，比如

那我们自己写了 render 呢？

```typescript
undefined;
```

这个代码执行后页面渲染出来只有 `<div>好好学习，天天向上</div>`

可以得出 **render 函数的优先级更高**

因为不管是 `el` 挂载的，还是 `template` 最后都会被编译成 `render` 函数，而如果已经有了 `render` 函数了，就跳过前面的编译了

这一点在源码里也有体现

在源码中找到答案：`dist/vue.js - 11927行`

```typescript
undefined;
```

### 2\. 更灵活的写法

比如说我们需要写很多 if 判断的时候

```typescript
undefined;
```

不知道你有没有写过类似上面这样的代码呢？

我们换一种方式来写出和上面一模一样的代码看看，直接写 render

```typescript
undefined;
```

搞定！就这！就这？

没错，就这！

或者下面这样，多次调用的时候就很方便

```typescript
undefined;
```
