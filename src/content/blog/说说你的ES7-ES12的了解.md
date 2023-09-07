---
title: 说说你的ES7-ES12的了解
pubDatetime: 2022-07-23T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: b95e83cd07fc033e38b7e9a1a291343b
description: >-
  ES2016(ES7)===========Array.prototype.includes()--------------------------`includes()`方法用来判断一个数组是否包含
difficulty: 2.5
questionNumber: 90
source: >-
  https://fe.ecool.fun/topic-answer/e9a726d4-0ce9-4e04-88c3-9e42bad984f7?orderBy=updateTime&order=desc&tagId=10
---

# ES2016(ES7)

## Array.prototype.includes()

`includes()`  方法用来判断一个数组是否包含一个指定的值，如果包含则返回  `true`，否则返回  `false`。

### 语法

    arr.includes(valueToFind[, fromIndex])

`valueToFind`，需要查找的元素值。

`fromIndex`  可选 从`fromIndex`  索引处开始查找  `valueToFind`。如果为负值（即从末尾开始往前跳  `fromIndex`  的绝对值个索引，然后往后搜寻）。默认为 0。

### 示例

```typescript
undefined;
```

### 注意点

使用 `includes()`查找字符串是区分大小写的。

```typescript
undefined;
```

使用 `includes()`只能判断简单类型的数据，对于复杂类型的数据，比如对象类型的数组，二维数组，这些是无法判断的.

```typescript
undefined;
```

能识别 NaN，indexOf 是不能识别 NaN 的

```typescript
undefined;
```

最后，如果只想知道某个值是否在数组中存在，而并不关心它的索引位置，建议使用 includes(),如果想获取一个值在数组中的位置，那么使用 indexOf 方法。

## 幂运算符 \*\*

比如我们想求 2 的 10 次方。

### 自己写函数实现

```typescript
undefined;
```

### Math.pow()

```typescript
undefined;
```

### 幂运算符 \*\*

```typescript
undefined;
```

**基本求幂**

```typescript
undefined;
```

**注意**

幂运算符的两个\*号之间不能出现空格，否则语法会报错。

# ES2017(ES8)

## Object.values()

`Object.values` 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。

```typescript
undefined;
```

## Object.entries()

Object.entries() 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历属性的键值对数组。

```typescript
undefined;
```

## Object.getOwnPropertyDescriptors()

`Object.getOwnPropertyDescriptors()`   方法用来获取一个对象的所有自身属性的描述符。

```typescript
undefined;
```

上面打印结果中的

- `value`表示当前对象的默认值
- `writable`表示对象属性是否可以修改
- `enumerable`表示当前这个属性是否可以出现在对象的枚举属性中
- `configurable`表示当前对象的属性能否用 delete 删除

那这些对象的属性我们怎么设置和修改他们呢，我们可以使用 es5 的 `Object.defineProperty()`

```typescript
undefined;
```

接下来我们演示下，一些属性设置为 false 的情况

```typescript
undefined;
```

我们可以看到设置 writable: false 和 configurable: false,为 false 时，对象的 name 对象的值不能改变和不能被删除，打印出来还是原来的对象。

**设置 enumerable 为 false 时**

```typescript
undefined;
```

当设置 enumerable: false 时，表示对象的属性不可被枚举，这时打印对象为空，遍历对象的键也为空。

## String.prototype.padStart

把指定字符串填充到字符串头部，返回新字符串。

### 语法

str.padStart(targetLength \[, padString\])

- `targetLength`

当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。

- `padString`  可选

填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的默认值为 " "

### 示例

```typescript
undefined;
```

### 应用场景

日期格式化：yyyy-mm-dd 的格式：

```typescript
undefined;
```

数字替换(手机号，银行卡号等）

```typescript
undefined;
```

## String.prototype.padEnd

把指定字符串填充到字符串尾部，返回新字符串。

语法同上

### 示例

```typescript
undefined;
```

### 应用场景

在 JS 前端我们处理时间戳的时候单位是 ms 毫秒，但是，后端同学返回的时间戳则不一样是毫秒，可能只有 10 位，以 s 秒为单位。所以，我们在前端处理这个时间戳的时候，保险起见，要先做一个 13 位的补全，保证单位是毫秒。

```typescript
undefined;
```

## 尾逗号 Trailing commas

ES8 允许函数的最后一个参数有尾逗号（Trailing comma）。 此前，函数定义和调用时，都不允许最后一个参数后面出现逗号。

```typescript
undefined;
```

上面代码中，如果在 param2 或 bar 后面加一个逗号，就会报错。

如果像上面这样，将参数写成多行（即每个参数占据一行），以后修改代码的时候，想为函数 clownsEverywhere 添加第三个参数，或者调整参数的次序，就势必要在原来最后一个参数后面添加一个逗号。这对于版本管理系统来说，就会显示添加逗号的那一行也发生了变动。这看上去有点冗余，因此新的语法允许定义和调用时，尾部直接可以加上一个逗号。

```typescript
undefined;
```

这样的规定也使得，函数参数与数组和对象的尾逗号规则，保持一致了。

## async/await

### 介绍

我们都知道使用 Promise 能很好地解决回调地狱的问题，但如果处理流程比较复杂的话，那么整段代码将充斥着 then，语义化不明显，代码不能很好地表示执行流程，那有没有比 Promise 更优雅的异步方式呢？那就是 async/await！我们一起来揭开它神秘的面撒吧！

前面添加了 async 的函数在执行后都会自动返回一个 Promise 对象:

```typescript
undefined;
```

添加 async 后

```typescript
undefined;
```

async 函数中使用 await，那么 await 这里的代码就会变成同步的了，意思就是说只有等 await 后面的 Promise 执行完成得到结果才会继续下去，await 就是等待。请看下面的示例：

```typescript
undefined;
```

### 使用场景

假如有这样一个使用场景：需要先请求 a 链接，等返回信息之后，再请求 b 链接的另外一个资源。下面代码展示的是使用 fetch 来实现这样的需求，fetch 被定义在 window 对象中，它返回的是一个 Promise 对象。

```typescript
undefined;
```

虽然上述代码可以实现这个需求，但语义化不明显，代码不能很好地表示执行流程。基于这个原因，ES8 引入了 async/await，这是 JavaScript 异步编程的一个重大改进，提供了在不阻塞主线程的情况下使用同步代码实现异步访问资源的能力，并且使得代码逻辑更加清晰。

```typescript
undefined;
```

通过上面代码，你会发现整个异步处理的逻辑都是使用同步代码的方式来实现的，而且还支持 try catch 来捕获异常，这感觉就在写同步代码，所以是非常符合人的线性思维的。

### 注意点

- await 只能在 async 标记的函数内部使用，单独使用会触发 Syntax error。
- await 后面需要跟异步操作，不然就没有意义，而且 await 后面的 Promise 对象不必写 then，因为 await 的作用之一就是获取后面 Promise 对象成功状态传递出来的参数。

### async/await 的缺陷

了解`Async/await`是非常有用的，但还有一些缺点需要考虑。

`Async/await`  让你的代码看起来是同步的，在某种程度上，也使得它的行为更加地同步。 `await`  关键字会阻塞其后的代码，直到 promise 完成，就像执行同步操作一样。它确实可以允许其他任务在此期间继续运行，但您自己的代码被阻塞。

这意味着您的代码可能会因为大量`await`的 promises 相继发生而变慢。每个`await`都会等待前一个完成，而你实际想要的是所有的这些 promises 同时开始处理（就像我们没有使用`async/await`时那样）。

有一种模式可以缓解这个问题——通过将  `Promise`  对象存储在变量中来同时开始它们，然后等待它们全部执行完毕。如果想更加深入的了解，请参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#asyncawait%C3%A7%C2%9A%C2%84%C3%A7%C2%BC%C2%BA%C3%A9%C2%99%C2%B7 "Permalink to async/await的缺陷")

# ES2018(ES9)

## Object Rest & Spread

在 ES9 新增 Object 的 Rest & Spread 方法，直接看下示例：

```typescript
undefined;
```

这块代码展示了 spread 语法，可以把 input 对象的数据都拓展到 output 对象，这个功能很实用。需要注意的是，**如果存在相同的属性名，只有最后一个会生效**。

### 注意点

```typescript
undefined;
```

如果属性的值是一个对象的话，该对象的引用会被拷贝，而不是生成一个新的对象。

我们再来看下 `Object rest` 的示例：

```typescript
undefined;
```

当对象 key-value 不确定的时候，把必选的 key 赋值给变量，用一个变量收敛其他可选的 key 数据，这在之前是做不到的。注意，**rest 属性必须始终出现在对象的末尾**，否则将抛出错误。

## for await of

异步迭代器(for-await-of)：循环等待每个 Promise 对象变为 resolved 状态才进入下一步。

我们知道 for...of 是同步运行的，看如下代码

```typescript
undefined;
```

上面打印结果如下图

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e9770e5600d0455c987be604f0d623cb~tplv-k3u1fbpfcp-watermark.image?)

上述代码证实了 for of 方法不能遍历异步迭代器，得到的结果并不是我们所期待的，于是 for await of 就粉墨登场啦！

**ES9 中可以用 for...await...of 的语法来操作**

```typescript
undefined;
```

for await of 环等待每个 Promise 对象变为 resolved 状态才进入下一步。所有打印的结果为 2000，1000，3000

## Promise.prototype.finally()

Promise.prototype.finally() 方法返回一个 Promise，在 promise 执行结束时，无论结果是 fulfilled 或者是 rejected，在执行 then()和 catch()后，都会执行 finally 指定的回调函数。这为指定执行完 promise 后，无论结果是 fulfilled 还是 rejected 都需要执行的代码提供了一种方式，避免同样的语句需要在 then()和 catch()中各写一次的情况。

### 示例

```typescript
undefined;
```

### 使用场景

**loading 关闭**

需要每次发送请求，都会有 loading 提示，请求发送完毕，就需要关闭 loading 提示框，不然界面就无法被点击。不管请求成功或是失败，这个 loading 都需要关闭掉，这时把关闭 loading 的代码写在 finally 里再合适不过了

## String 扩展

放松对标签模板里字符串转义的限制, 遇到不合法的字符串转义会返回 undefined，并且从 raw 上可获取原字符串。

下面是一个 es6 的标签模板 如果对这个语法感到陌生，请参考 [标签模板](https://es6.ruanyifeng.com/#docs/string#%C3%A6%C2%A0%C2%87%C3%A7%C2%AD%C2%BE%C3%A6%C2%A8%C2%A1%C3%A6%C2%9D%C2%BF)

```typescript
undefined;
```

参数打印如下：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6db7b7356279465d85c197b9d284425d~tplv-k3u1fbpfcp-watermark.image?)

ES9 开始，模板字符串允许嵌套支持常见转义序列，移除对 ECMAScript 在带标签的模版字符串中转义序列的语法限制。

```typescript
undefined;
```

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d484a5ff27d4001948e2f7955d3ba7c~tplv-k3u1fbpfcp-watermark.image?)

### 注意点

在模板字符串中，如果输入无效的 unicode 字符，还是会报错。只有在便签模板中 从 es9 开始才不会报错。

```typescript
undefined;
```

# ES2019(ES10)

## Object.fromEntries()

方法 Object.fromEntries() 把键值对列表转换为一个对象，这个方法是和 Object.entries() 相对的。

```typescript
undefined;
```

### 案例 1：Object 转换操作

```typescript
undefined;
```

### 案例 2：Map 转 Object

```typescript
undefined;
```

### 案例 3：过滤

course 表示所有课程，想请求课程分数大于 80 的课程组成的对象：

```typescript
undefined;
```

### 案例 4：url 的 search 参数转换

```typescript
undefined;
```

## Array.prototype.flat()

### 语法

    let newArray = arr.flat([depth])

- `depth`  可选 指定要提取嵌套数组的结构深度，默认值为 1。

### 示例

`flat()`   方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

```typescript
undefined;
```

## Array.prototype.flatMap()

flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。从方法的名字上也可以看出来它包含两部分功能一个是 map，一个是 flat（深度为 1）。

### 语法

```typescript
undefined;
```

- `callback`

可以生成一个新数组中的元素的函数，可以传入三个参数：

`currentValue`

当前正在数组中处理的元素

`index`

可选 数组中正在处理的当前元素的索引。

`array`

可选 被调用的  `map`  数组

- `thisArg`可选

执行  `callback`  函数时   使用的`this`  值。

### 示例

```typescript
undefined;
```

这个示例可以简单对比下 map 和 flatMap 的区别。当然还可以看下下面的示例：

```typescript
undefined;
```

`flatMap`  方法与  `map`  方法和深度 depth 为 1 的  `flat`  几乎相同.

## String.prototype.trimStart()

trimStart() 方法从字符串的开头删除空格，trimLeft()是此方法的别名。

```typescript
undefined;
```

## String.prototype.trimEnd()

trimEnd() 方法从一个字符串的右端移除空白字符，trimRight 是 trimEnd 的别名。

```typescript
undefined;
```

## 可选的 Catch Binding

在 ES10 之前我们都是这样捕获异常的：

```typescript
undefined;
```

在这里 err 是必须的参数，在 ES10 可以省略这个参数：

```typescript
undefined;
```

### 应用

**验证参数是否为 json 格式**

这个需求我们只需要返回 true 或 false，并不关心 catch 的参数。

```typescript
undefined;
```

## Symbol.prototype.description

我们知道，Symbol 的描述只被存储在内部的  `Description` ，没有直接对外暴露，我们只有调用 Symbol 的 toString() 时才可以读取这个属性：

```typescript
undefined;
```

现在可以通过 description 方法获取 Symbol 的描述:

```typescript
undefined;
```

## JSON.stringify() 增强能力

JSON.stringify 在 ES10 修复了对于一些超出范围的 Unicode 展示错误的问题。因为 JSON 都是被编码成 UTF-8，所以遇到 0xD800–0xDFFF 之内的字符会因为无法编码成 UTF-8 进而导致显示错误。在 ES10 它会用转义字符的方式来处理这部分字符而非编码的方式，这样就会正常显示了。

```typescript
undefined;
```

## 修订 Function.prototype.toString()

以前函数的 toString 方法来自 Object.prototype.toString(),现在的 Function.prototype.toString() 方法返回一个表示当前函数源代码的字符串。以前只会返回这个函数，不包含注释、空格等。

```typescript
undefined;
```

将返回注释、空格和语法等详细信息。

# ES2020(ES11)

## 空值合并运算符（Nullish coalescing Operator）

**空值合并操作符**（ `??` ）是一个逻辑操作符，当左侧的操作数为  `null`或者`undefined`时，返回其右侧操作数，否则返回左侧操作数。

```typescript
undefined;
```

与逻辑或操作符（`||`）不同，逻辑或操作符会在左侧操作数为假值时返回右侧操作数。也就是说，如果使用  `||`  来为某些变量设置默认值，可能会遇到意料之外的行为。比如为假值（例如`''`,`0`,`NaN`,`false`）时。见下面的例子。

```typescript
undefined;
```

### 注意点

将  `??`  直接与  AND（`&&`）和 OR（`||`）操作符组合使用是不可取的。

```typescript
undefined;
```

## 可选链 Optional chaining

### 介绍

**可选链**操作符( `?.` )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。`?.`  操作符的功能类似于  `.`  链式操作符，不同之处在于，在引用为  `null`  或者  `undefined` 的情况下不会引起错误，该表达式短路返回值是  `undefined`。与函数调用一起使用时，如果给定的函数不存在，则返回  `undefined`。

当尝试访问可能不存在的对象属性时，可选链操作符将会使表达式更短、更简明。在探索一个对象的内容时，如果不能确定哪些属性必定存在，可选链操作符也是很有帮助的。

```typescript
undefined;
```

在之前的语法中，想获取到深层属性或方法，不得不做前置校验，否则很容易命中  `Uncaught TypeError: Cannot read property...`  这种错误，这极有可能让你整个应用挂掉。

```typescript
undefined;
```

用了 Optional Chaining ，上面代码会变成

```typescript
undefined;
```

可选链中的 ? 表示如果问号左边表达式有值, 就会继续查询问号后面的字段。根据上面可以看出，用可选链可以大量简化类似繁琐的前置校验操作，而且更安全。

### 常见用法

```typescript
undefined;
```

### 与空值合并操作符一起使用

```typescript
undefined;
```

### 注意点

**可选链不能用于赋值**

```typescript
undefined;
```

## globalThis

在以前，从不同的 JavaScript 环境中获取全局对象需要不同的语句。在 Web 中，可以通过  `window`、`self`  取到全局对象，在 Node.js 中，它们都无法获取，必须使用  `global`。

在松散模式下，可以在函数中返回  `this`  来获取全局对象，但是在严格模式和模块环境下，`this`  会返回  `undefined`。

以前想要获取全局对象，可通过一个全局函数

```typescript
undefined;
```

现在`globalThis`  提供了一个标准的方式来获取不同环境下的全局  `this`  对象（也就是全局对象自身）。不像  `window`  或者  `self`  这些属性，它确保可以在有无窗口的各种环境下正常工作。所以，你可以安心的使用  `globalThis`，不必担心它的运行环境。

为便于记忆，你只需要记住，全局作用域中的  `this`  就是`globalThis`。以后就用 globalThis 就行了。

## BigInt

**`BigInt`**  是一种内置对象，它提供了一种方法来表示大于  `2的53次方 - 1`  的整数。这原本是 Javascript 中可以用  `Number`  表示的最大数字。**`BigInt`**  可以表示任意大的整数。

**使用 BigInt 有两种方式：**

### 方式一：数字后面增加 n

```typescript
undefined;
```

### 方式二：使用 BigInt 函数

```typescript
undefined;
```

### 运算

```typescript
undefined;
```

### 注意点

BigInt 不能用于  \[`Math`\]  对象中的方法；不能和任何  \[`Number`\]  实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，因为  `BigInt`  变量在转换成  \[`Number`\]  变量时可能会丢失精度。

## String.prototype.matchAll()

**`matchAll()`**   方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。

```typescript
undefined;
```

## Promise.allSettled()

我们都知道 Promise.all() 具有并发执行异步任务的能力。但它的最大问题就是如果其中某个任务出现异常(reject)，所有任务都会挂掉，Promise 直接进入 reject 状态。

场景：现在页面上有三个请求，分别请求不同的数据，如果一个接口服务异常，整个都是失败的，都无法渲染出数据

我们需要一种机制，如果并发任务中，无论一个任务正常或者异常，都会返回对应的的状态，这就是`Promise.allSettled`的作用

```typescript
undefined;
```

## Dynamic Import（按需 import）

`import()`可以在需要的时候，再加载某个模块。

```typescript
undefined;
```

上面代码中，`import()`方法放在`click`事件的监听函数之中，只有用户点击了按钮，才会加载这个模块。

# ES2021(ES12)

## 逻辑运算符和赋值表达式（&&=，||=，??=）

### &&=

逻辑与赋值 `x &&= y`等效于：

```typescript
undefined;
```

上面的意思是，当 x 为真时，x=y。 具体请看下面的示例:

```typescript
undefined;
```

### ||=

逻辑或赋值（`x ||= y`）运算仅在  `x`  为 false 时赋值。

**`x ||= y`  等同于：x || (x = y);**

```typescript
undefined;
```

### ??=

逻辑空赋值运算符  (`x ??= y`) 仅在  `x`  是  [nullish](https://developer.mozilla.org/zh-CN/docs/Glossary/Nullish) (`null`  或  `undefined`) 时对其赋值。

**`x ??= y`  等价于： x ?? (x = y);**

**示例一**

```typescript
undefined;
```

**示例二**

```typescript
undefined;
```

## String.prototype.replaceAll()

### 介绍

`replaceAll()`   方法返回一个新字符串，新字符串中所有满足  `pattern`  的部分都会被`replacement`  替换。`pattern`可以是一个字符串或一个`RegExp`，`replacement`可以是一个字符串或一个在每次匹配被调用的函数。

原始字符串保持不变。

### 示例

```typescript
undefined;
```

使用正则表达式搜索值时，它必须是全局的。

```typescript
undefined;
```

这将可以正常运行:

```typescript
undefined;
```

## **数字分隔符**

欧美语言中，较长的数值允许每三位添加一个分隔符（通常是一个逗号），增加数值的可读性。比如，`1000`可以写作`1,000`。

`ES2021`中允许 JavaScript 的数值使用下划线（`_`）作为分隔符。

```typescript
undefined;
```

这个数值分隔符没有指定间隔的位数，也就是说，可以每三位添加一个分隔符，也可以每一位、每两位、每四位添加一个。

```typescript
undefined;
```

小数和科学计数法也可以使用数值分隔符。

```typescript
undefined;
```

数值分隔符有几个使用注意点。

- 不能放在数值的最前面（leading）或最后面（trailing）。
- 不能两个或两个以上的分隔符连在一起。
- 小数点的前后不能有分隔符。
- 科学计数法里面，表示指数的`e`或`E`前后不能有分隔符。

下面的写法都会报错。

```typescript
undefined;
```

## **Promise.any**

方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。

```typescript
undefined;
```

只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。

`Promise.any()`跟`Promise.race()`方法很像，只有一点不同，就是`Promise.any()`不会因为某个 Promise 变成`rejected`状态而结束，必须等到所有参数 Promise 变成`rejected`状态才会结束。

## WeakRef and Finalizers

这两个新特性，都应该尽量避免使用，所以这里不做过多的讲解。如感兴趣，请参考

[WeakRef](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)

[Finalizers](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry)
