---
title: 如何在TypeScript中实现继承？
pubDatetime: 2021-07-10T16:00:00.000Z
author: caorushizi
tags:
  - typescript
postSlug: 4bae4de1b26db4a6f4bbc3abf04b2063
description: >-
  继承是一种从另一个类获取一个类的属性和行为的机制。它是OOPs语言的一个重要方面，并且具有从现有类创建新类的能力，继承成员的类称为基类，继承这些成员的类称为派生类。继承可以通过使用extend关键字来
difficulty: 2.5
questionNumber: 32
source: >-
  https://fe.ecool.fun/topic-answer/3bdbc545-1273-41a8-b93f-cb642dae0ada?orderBy=updateTime&order=desc&tagId=19
---

继承是一种从另一个类获取一个类的属性和行为的机制。它是 OOPs 语言的一个重要方面，并且具有从现有类创建新类的能力，继承成员的类称为基类，继承这些成员的类称为派生类。

继承可以通过使用 extend 关键字来实现。我们可以通过下面的例子来理解它。

    class Shape {
       Area:number
       constructor(area:number) {
          this.Area = area
       }
    }
    class Circle extends Shape {
       display():void {
          console.log("圆的面积: "+this.Area)
       }
    }
    var obj = new Circle(320);
    obj.display()
