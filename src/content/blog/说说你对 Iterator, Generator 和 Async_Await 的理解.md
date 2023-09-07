---
title: 说说你对 Iterator, Generator 和 Async/Await 的理解
pubDatetime: 2023-03-03T16:00:00.000Z
author: caorushizi
tags:
  - es6
postSlug: 50cc021fde6fae0487ff170fe9a53870
description: >-
  这里重点理解他们三者分别是什么，有什么区别，以及分别适用什么场景Iterator========Iterator是最简单最好理解的。简单的说，我们常用的`forof`循环，都是通过调用被循环对象的一个
difficulty: 4
questionNumber: 7
source: >-
  https://fe.ecool.fun/topic-answer/82b536ee-2a79-4e64-b238-061656ca8ca9?orderBy=updateTime&order=desc&tagId=24
---

这里重点理解他们三者分别是什么，有什么区别，以及分别适用什么场景

# Iterator

Iterator 是最简单最好理解的。

简单的说，我们常用的 `for of` 循环，都是通过调用被循环对象的一个特殊函数 `Iterator` 来实现的，但是以前这个函数是隐藏的我们无法访问， 从 `Symbol` 引入之后，我们就可以通过 `Symbol.iterator` 来直接读写这个特殊函数。

对于循环语句来说，他并不关心被循环的对象到底是什么，他只负责调用 `data[Symbol.iterator]` 函数，然后根据返回值来进行循环。所以任何对象只要提供了标准的 Iterator 接口即可被循环，比如我们现在来创造一个自定义的数据：

    var students = {}
    students[Symbol.iterator] = function() {
      let index = 1;
      return { next() {
        return {done: index>100, value: index++} }
      }
    }

    for(var i of students) { console.log(i); }

除了这种方式外，我们也可以通过 `Generator` 来实现一个 `Iterator` 接口。

# Generator 基本语法

Generator 是 ES6 引入的新语法，Generator 是一个可以暂停和继续执行的函数。简单的用法，可以当做一个 Iterator 来用，进行一些遍历操作。复杂一些的用法，他可以在内部保存一些状态，成为一个状态机。

Generator 基本语法包含两部分：

- 函数名前要加一个星号
- 函数内部用 `yield` 关键字返回值

下面是一个简单的示例：

```typescript
undefined;
```

由于 Generator 也存在 `Symbol.iterator` 接口，所以他也可以被 `for` 循环调用：

```typescript
undefined;
```

不过这里要注意一个不同点，调用 `next` 的时候能得到 `3` ，但是用 `for` 则会忽略最后的 `return` 语句。 也就是 `for` 循环会忽略 `generator` 中的 `return` 语句.

另外 `yeild*` 语法可以用来在 `Generator` 中调用另一个 `Generator`，参见 [yield\* MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield%2A)

# Generator VS Iterator

Generator 可以看做是一个更加灵活的 `Iterator` ，他们之间是可以互相替代的，但是， `Generator` 由于可以通过 `yield` 随时暂停，因此可以很方便进行流程控制和状态管理，而 `Iterator` 就可能需要你写更多的代码进行相同的操作：

比如 Stack Overflow 上的这个中序遍历代码：

```typescript
undefined;
```

同样的功能用 `iterator` 实现就会变得麻烦很多。

Generator 也是实现简单的状态机的最佳选择，因为他是在函数内部进行 `yield` 操作，因此不会丢失当前状态：

```typescript
undefined;
```

同样的功能如果普通的函数，因为每次都是调用这个函数，所以函数内部并不能保存状态，因此就需要在函数外面用一个变量来保存当前状态：

```typescript
undefined;
```

其实 Babel 编译 `Generator` 的时候，也是用了一个 `Context` 来保存当前状态的，可以看看 Babel 编译后的代码，其中的 `_context` 就是当前状态，这里通过 `_context.next` 的值来控制调用 `next` 的时候应该进入到哪一个流程：

```typescript
undefined;
```

当然，如果是很复杂的，非线性状态变化的状态机，我还是会倾向于用一个类来实现。

# Generator 异步操作

Generator 的设计，可以很方便执行异步操作，现在我们需要写一个小函数，可以取到用户信息然后打印出来，我们用 generator 来写就是这样的：

```typescript
undefined;
```

但是，generator 本身并不会自动进行 `next` 操作，也就是，我们如果此时这样调用并不能打印出用户信息:

```typescript
undefined;
```

因为`Generator` 本身只是一个状态机，他需要由调用者来改变他的状态，所以我们需要额外加一段控制代码来控制 `fetchUser` 进行状态转换:

```typescript
undefined;
```

但是写了这些代码之后， `Generator` 的实现就变得非常不优雅了，如果我们内部有多个异步操作，控制代码就会变得很长。我们可以选择 co 库来帮我们做这个操作。

# Async/Await

我最开始接触到 Async/Await 的时候把它当成了一个 `promise` 的语法糖，但是经过我们对 `Generator` 的理解后，明白了其实他就是 `Generator` 的一个语法糖：

- `async` 对应的是 `*`
- `await` 对应的是 `yield`

他只是自动帮我们进行了 `Generator` 的流程控制而已。

和上面的获取用户信息实现一样的功能的话，基本语法如下：

```typescript
undefined;
```

因为有自动的流程控制，所以我们不用手动在 ajax 成功的时候手动调用 `next`。相比于 `Promise` 或者 `Generator` 的实现，代码要明显更加优雅。

如果有兴趣的话，可以参考一下 `Babel` 是如何编译 `Async/Await` 的，简单的说，代码分成了两部分，一部分是编译了一个 `Generator`，另一部分是通过 promise 实现了 generator 的流程控制。

对于如下代码：

```typescript
undefined;
```

编译后的代码：

```typescript
undefined;
```

所以我们可以大约这么认为： **async/await == generator + promise**

# async/await 并发

我们的代码在执行到 await 的时候会等待结果返回才执行下一行，这样如果我们有很多需要异步执行的操作就会变成一个串行的流程，可能会导致非常慢。

比如如下代码，我们需要遍历获取 redis 中存储的 100 个用户的信息：

```typescript
undefined;
```

由于每次数据库读取操作都要消耗时间，这个接口将会变得非常慢。如果我们把它变成一个并行的操作，将会极大提升效率：

```typescript
undefined;
```

# 总结

- `Iterator` 是一个循环接口，任何实现了此接口的数据都可以被 `for of` 循环遍历
- `Generator` 是一个可以暂停和继续执行的函数，他可以完全实现 `Iterator` 的功能，并且由于可以保存上下文，他非常适合实现简单的状态机。另外通过一些流程控制代码的配合，可以比较容易进行异步操作。
- `Async/Await` 就是 generator 进行异步操作的语法糖。而这个语法糖反而是被使用最广泛的，比如著名的 `Koa`
