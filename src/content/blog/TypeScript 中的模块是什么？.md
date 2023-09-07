---
title: TypeScript 中的模块是什么？
pubDatetime: 2021-07-10T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: 26a786625a3fea3d6ced22d3db341433
description: >-
  TypeScript中的模块是相关变量、函数、类和接口的集合。你可以将模块视为包含执行任务所需的一切的容器。可以导入模块以轻松地在项目之间共享代码。modulemodule_name{classxyz
difficulty: 1
questionNumber: 45
source: >-
  https://fe.ecool.fun/topic-answer/70b0b59f-d4d7-41c2-be2b-94ffcbedb717?orderBy=updateTime&order=desc&tagId=19
---

TypeScript 中的模块是相关变量、函数、类和接口的集合。 你可以将模块视为包含执行任务所需的一切的容器。可以导入模块以轻松地在项目之间共享代码。

    module module_name{
      class xyz{
        export sum(x, y){
          return x+y;
        }
      }
    }
