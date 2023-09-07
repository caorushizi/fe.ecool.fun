---
title: TypeScript中的方法重写是什么?
pubDatetime: 2021-07-10T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: 0ae045c147fc121a1bb78f2bdb14cbf5
description: >-
  如果子类(子类)具有与父类中声明的相同的方法，则称为方法覆盖。换句话说，在派生类或子类中重新定义基类方法。方法重写的规则*该方法必须具有与父类相同的名称*该方法必须具有与父类相同的参数。*必须有一个I
difficulty: 3
questionNumber: 28
source: >-
  https://fe.ecool.fun/topic-answer/6f210355-da14-479e-86bc-7602839e7f42?orderBy=updateTime&order=desc&tagId=19
---

如果子类(子类)具有与父类中声明的相同的方法，则称为方法覆盖。换句话说，在派生类或子类中重新定义基类方法。

方法重写的规则

- 该方法必须具有与父类相同的名称
- 该方法必须具有与父类相同的参数。
- 必须有一个 IS-A 关系(继承)。

例子

    class NewPrinter extends Printer {
        doPrint(): any {
            super.doPrint();
            console.log("Called Child class.");
        }
        doInkJetPrint(): any {
            console.log("Called doInkJetPrint().");
        }
    }
    let printer: new () => NewPrinter;
    printer.doPrint();
    printer.doInkJetPrint();
