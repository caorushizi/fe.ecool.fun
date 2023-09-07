---
title: AST语法树是什么？
pubDatetime: 2022-03-21T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: eb6b5b961ee63e931df3ed1e33382de0
description: >-
  概要--下面将通过以下几个方面对AST进行介绍1.为什么要了解AST，简要说明AST在开发中的重要性2.什么是AST，对AST有一个直观的认识3.AST是如何生成的，分析将代码解析成AST的原理4.A
difficulty: 3.5
questionNumber: 127
source: >-
  https://fe.ecool.fun/topic-answer/4b1c17f5-a42b-4853-9ff5-792a23d45050?orderBy=updateTime&order=desc&tagId=10
---

## 概要

下面将通过以下几个方面对 AST 进行介绍

1.  为什么要了解 AST，简要说明 AST 在开发中的重要性
2.  什么是 AST，对 AST 有一个直观的认识
3.  AST 是如何生成的，分析将代码解析成 AST 的原理
4.  AST 的具体应用，通过解读 babel 原理、vue 模板编译过程，Prettier 实现原理，来分析 AST 在开发中的具体使用。
5.  AST 还能做什么，结合工作，思考 AST 能为我们做些什么

## 为什么要学习 AST

AST（抽象语法树）在开发过程中扮演一个非常重要的角色，但是我们却很少去直接接触它。

无论是代码编译（babel），打包（webpack），代码压缩，css 预处理，代码校验（eslint），代码美化（pretiier），Vue 中对 template 的编译，这些的实现都离不开 AST。

了解学习 AST，能够帮助我们更好的对上面说的这些工具原理进行理解，同时，我们可以利用它去开发一些工具，来优化我们的开发流程，提高开发效率。

## 什么是 AST

AST 是对源代码的抽象语法结构的树状表现形式。

在不同的场景下，会有不同的解析器将源码解析成抽象语法树。

下面直观的看一下 AST 是什么样的

代码

    let answer = 2 * 3;

对应的 AST 语法树

    {
        "type": "Program",
        "body": [
            {
                "type": "VariableDeclaration",
                "declarations": [
                    {
                        "type": "VariableDeclarator",
                        "id": {
                            "type": "Identifier",
                            "name": "answer"
                        },
                        "init": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                            },
                            "right": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3"
                            }
                        }
                    }
                ],
                "kind": "let"
            }
        ],
        "sourceType": "script"
    }

那么 AST 是如何生成的呢？

## AST 是如何生成的

AST 是通过 JS Parser （解析器），将 js 源码转化为抽象语法树，主要分为两步

### 1\. 分词

将整个的代码字符串，分割成语法单元数组（token）。 JS 中的语法单元（token）指标识符（function，return），运算符，括号，数字，字符串等能解析的最小单元。主要有以下几种：

1.  标识符  
    没有被引号括起来的连续字符，可以包含字母、数字、\_、$，其中数字不能作为开头。  
    标识符可能是 var，return，function 等关键字，也可能是 true，false 这样的内置常量，或是一个变量。具体是哪种语义，分词阶段不区分，只要正确拆分即可。
2.  数字 十六进制，十进制，八进制以及科学表达式等都是最小单元
3.  运算符： +、-、 \*、/ 等
4.  字符串 对计算机而言，字符串只会参与计算和展示，具体里面细分没必要分析
5.  注释 不管是行注释还是块注释，对于计算机来说并不关心其内容，所以可以作为不可再拆分的最小单元
6.  空格 连续的空格，换行，缩进等，只要不在字符串中都没有实际的逻辑意义，所以连续的空格可以作为一个语法单元。
7.  其他，大括号，中括号，小括号，冒号 等等。

依然拿上面的代码作为例子，分词后生成的语法单元数组如下

    [
        {
            "type": "Keyword",
            "value": "var",
            "range": [
                0,
                3
            ]
        },
        {
            "type": "Identifier",
            "value": "answer",
            "range": [
                4,
                10
            ]
        },
        {
            "type": "Punctuator",
            "value": "=",
            "range": [
                11,
                12
            ]
        },
        {
            "type": "Numeric",
            "value": "2",
            "range": [
                13,
                14
            ]
        },
        {
            "type": "Punctuator",
            "value": "*",
            "range": [
                15,
                16
            ]
        },
        {
            "type": "Numeric",
            "value": "3",
            "range": [
                17,
                18
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                18,
                19
            ]
        }
    ]

### 2\. 语义分析

语义分析的目的是将分词得到的语法单元进行一个整体的组合，分析确定语法单元之间的关系。

简单来说，语义分析可以理解成对语句（statement）和表达式（expression）的识别。

1.  语句，一个具备边界的代码区域。相邻的两个语句之间从语法上讲互不影响。比如： `var a = 1; if(xxx){xxx}`
2.  表达式，指最终会有一个结果的一小段代码，它可以嵌入到另一个表达式中，且包含在表达式中。比如：`a++`， `i > 0 && i< 6`

语义分析是一个递归的过程，它会将分词分析出来的数组转化成树形的表达形式。同时，会验证语法，语法如果存在错误的话，会抛出语法错误。

## AST 的具体应用

文章一开始就说到了，babel，webpack，css 预处理，eslint 等都应用到了 AST 树，那么 AST 到底做了一个什么样的角色呢！？ 下面我们就来看一下。

首先看一下 babel 工作原理的实现。

### babel 实现原理

babel 是一个 javascript 编译器，用来将 es6 语法编译成 es5

babel 的工作可以分为 3 个阶段：

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/12/16efabb5dd074189~tplv-t2oaga2asx-image.image)

预览

第 1 步 解析（Parse）  
通过解析器 babylon 将代码解析成抽象语法树

第 2 步 转换（TransForm）  
通过 babel-traverse plugin 对抽象语法树进行深度优先遍历，遇到需要转换的，就直接在 AST 对象上对节点进行添加、更新及移除操作，比如遇到箭头函数，就转换成普通函数，最后得到新的 AST 树。

第 3 步 生成（Generate）  
通过 babel-generator 将 AST 树生成 es5 代码

### vue 模板编译过程

Vue 提供了 2 个版本，一个是 Runtime + Compiler ，另一个是 Runtime only 的，前者是包含编译代码的，会把编译的过程放在运行时做，后者是不包含编译代码的，需要借助 webpack 的 vue-loader 把模板编译 render 函数。不管使用哪个版本，都有一个环节，就是将模板编译成 render 函数。

下面我们分析下 vue 模板的编译过程，这也是 vue 源码实现中非常重要的一个模块。 vue 模板的编译过程分为 3 个阶段

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/12/16efabbb717ce350~tplv-t2oaga2asx-image.image)

预览

第 1 步 解析（Parse）

    const ast = parse(template.trim(), options)

将模板字符串解析生成 AST,这里的解析器是 vue 自己实现的，解析过程中会使用正则表达式对模板顺序解析，当解析到开始标签、闭合标签、文本的时候都会有相对应的回调函数执行，来达到构造 AST 树的目的。

生成的 AST 元素节点总共有 3 种类型，1 为普通元素， 2 为表达式，3 为纯文本。下面看一个例子

    <ul :class="bindCls" class="list" v-if="isShow">
        <li v-for="(item,index) in data" @click="clickItem(index)">{{item}}:{{index}}</li>
    </ul>

上面模板解析生成的 AST 树如下：

    ast = {
      'type': 1,
      'tag': 'ul',
      'attrsList': [],
      'attrsMap': {
        ':class': 'bindCls',
        'class': 'list',
        'v-if': 'isShow'
      },
      'if': 'isShow',
      'ifConditions': [{
        'exp': 'isShow',
        'block': // ul ast element
      }],
      'parent': undefined,
      'plain': false,
      'staticClass': 'list',
      'classBinding': 'bindCls',
      'children': [{
        'type': 1,
        'tag': 'li',
        'attrsList': [{
          'name': '@click',
          'value': 'clickItem(index)'
        }],
        'attrsMap': {
          '@click': 'clickItem(index)',
          'v-for': '(item,index) in data'
         },
        'parent': // ul ast element
        'plain': false,
        'events': {
          'click': {
            'value': 'clickItem(index)'
          }
        },
        'hasBindings': true,
        'for': 'data',
        'alias': 'item',
        'iterator1': 'index',
        'children': [
          'type': 2,
          'expression': '_s(item)+":"+_s(index)'
          'text': '{{item}}:{{index}}',
          'tokens': [
            {'@binding':'item'},
            ':',
            {'@binding':'index'}
          ]
        ]
      }]
    }

第 2 步 优化语法树（Optimize）

    optimize(ast, options)

vue 模板中并不是所有数据都是响应式的，有很多数据是首次渲染后就永远不会变化的，那么这部分数据生成的 DOM 也不会变化，我们可以在 patch 的过程跳过对他们的比对。  
此阶段会深度遍历生成的 AST 树，检测它的每一颗子树是不是静态节点，如果是静态节点则它们生成 DOM 永远不需要改变，这对运行时对模板的更新起到极大的优化作用。

遍历过程中，会对整个 AST 树中的每一个 AST 元素节点标记 static 和 staticRoot（递归该节点的所有 children，一旦子节点有不是 static 的情况，则为 false，否则为 true）。

经过该阶段，上面例子中的 ast 会变成

    ast = {
      'type': 1,
      'tag': 'ul',
      'attrsList': [],
      'attrsMap': {
        ':class': 'bindCls',
        'class': 'list',
        'v-if': 'isShow'
      },
      'if': 'isShow',
      'ifConditions': [{
        'exp': 'isShow',
        'block': // ul ast element
      }],
      'parent': undefined,
      'plain': false,
      'staticClass': 'list',
      'classBinding': 'bindCls',
      'static': false,
      'staticRoot': false,
      'children': [{
        'type': 1,
        'tag': 'li',
        'attrsList': [{
          'name': '@click',
          'value': 'clickItem(index)'
        }],
        'attrsMap': {
          '@click': 'clickItem(index)',
          'v-for': '(item,index) in data'
         },
        'parent': // ul ast element
        'plain': false,
        'events': {
          'click': {
            'value': 'clickItem(index)'
          }
        },
        'hasBindings': true,
        'for': 'data',
        'alias': 'item',
        'iterator1': 'index',
        'static': false,
        'staticRoot': false,
        'children': [
          'type': 2,
          'expression': '_s(item)+":"+_s(index)'
          'text': '{{item}}:{{index}}',
          'tokens': [
            {'@binding':'item'},
            ':',
            {'@binding':'index'}
          ],
          'static': false
        ]
      }]
    }

第 3 步 生成代码

    const code = generate(ast, options)

通过 generate 方法，将 ast 生成 render 函数

    with(this){
      return (isShow) ?
        _c('ul', {
            staticClass: "list",
            class: bindCls
          },
          _l((data), function(item, index) {
            return _c('li', {
              on: {
                "click": function($event) {
                  clickItem(index)
                }
              }
            },
            [_v(_s(item) + ":" + _s(index))])
          })
        ) : _e()
    }

### Prettier 实现原理

通过上面对 babel 实现原理和 vue 模板的编译原理可以看出，他们的实现有很多相同之处，都是先将源码解析成 AST 树，然后对 AST 树就行处理，最后生成想要的东西。

Prettier 的实现同样是这样，首先依然是将代码解析生成 AST 树，然后是对 AST 遍历，调整长句，整理空格，括号等，最后输出代码，这里就不赘述了。

### 小结

我们分析了 Babel 原理、vue 模板编译过程、Prettier 原理，这里我们简单总结一下。  
如果把源码比作一个机器，那么分词过程就是将这台机器拆分成一个个零件，语义分析过程就是分析每个零件的位置以及作用，然后根据需要对零件进行加工处理，最后再组装成一个新的机器。

## AST 还能做什么

那么工作中我们能使用 AST 做些什么呢？！

这里就要发挥想象了，看看我们日常工作中有什么需求是可以通过 AST 开发个工具来解决。  
比如，可以通过 AST 可以将代码自动转成流程图；  
或者根据自定义的注释规范，通过工具自动生成文档；  
或是通过工具自动生成骨架屏文件。
