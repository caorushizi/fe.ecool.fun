---
title: TypeScript 中的 getter/setter 是什么？你如何使用它们？
pubDatetime: 2024-08-10T17:05:17.000Z
author: caorushizi
tags:
  - Typescript
postSlug: ffbc9199-6e3a-4e6f-a2dd-b77c339aef2c
description: >-
  Getter 和 setter 是特殊类型的方法，可帮助你根据程序的需要委派对私有变量的不同级别的访问。 Getters
  允许你引用一个值但不能编辑它。Setter 允许你更改变量的值，但不能查看其当前值。这些对于实现封装是必不可少的。
  例如，新雇主可能能够了解get公司的员工人数，但无权set了解员工人数。 const fullNameMaxLength = 10; class
  Employee
difficulty: 3
questionNumber: 459
source: https://fe.ecool.fun/topic/ffbc9199-6e3a-4e6f-a2dd-b77c339aef2c
---

Getter 和 setter 是特殊类型的方法，可帮助你根据程序的需要委派对私有变量的不同级别的访问。

Getters 允许你引用一个值但不能编辑它。Setter 允许你更改变量的值，但不能查看其当前值。这些对于实现封装是必不可少的。

例如，新雇主可能能够了解get公司的员工人数，但无权set了解员工人数。

```typescript
const fullNameMaxLength = 10;
class Employee {
  private _fullName: string = "";
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }
    this._fullName = newName;
  }
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}
```
