---
title: 说说下面代码的输出结果
pubDatetime: 2024-07-19T10:33:17.000Z
author: caorushizi
tags:
  - JavaScript
postSlug: b42993a0-daf4-47df-b933-2fbded17cdff
description: >-
  Promise.resolve().then(() => { console.log(0) return Promise.resolve(4)
  }).then((res) => { console.log(res) }) Promise.resolve().then(() => {
  console.log(1) }).then(() => { console.log(2) }).then(() =
difficulty: 3
questionNumber: 2063
source: https://fe.ecool.fun/topic/b42993a0-daf4-47df-b933-2fbded17cdff
---

```
Promise.resolve().then(() => {
  console.log(0)
  return Promise.resolve(4)
}).then((res) => {
  console.log(res)
})

Promise.resolve().then(() => {
  console.log(1)
}).then(() => {
  console.log(2)
}).then(() => {
  console.log(3)
}).then(() => {
  console.log(5)
}).then(() =>{
  console.log(6)
})
```

---

输出结果是：

```
0
1
2
3
4
5
6
```

## 1、分析

一般遇到`Promise.resolve()`时，相当于`new Promise(resolve => {resolve()})`都是同步完成的，不会消耗微任务。 但以下情况时，需要注意，我们先看三组代码：

```js
//代码1
new Promise((resolve) => {
  resolve(Promise.resolve(4)); //resolve了一个Promise
}).then((res) => {
  console.log(res);
});
```

```js
//代码2
Promise.resolve()
  .then(() => {
    return Promise.resolve(4); //return了一个Promise
  })
  .then((res) => {
    console.log(res);
  });
```

```js
//代码3
Promise.resolve()
  .then(() => {
    return 4; //return了一个Number类型的4
  })
  .then((res) => {
    console.log(res);
  });
```

这三个输出结果，打印出来的都是数字4。

我们可以看出不同，代码3是我们最常见的情况。代码3里打印的res是`4`，和上边`return`的是同样的数据类型。那么代码1和代码2的res为什么不是`Object`类型的`Promise{<fulfilled>: 4}`呢？

在一般情况下：

```js
Promise.resolve().then(() => {
  return 4;
});
```

这段代码中，`Promise.resolve().then`是一个构造函数,`() => {return 4;}`是这个函数的参数，这个函数调用，最后返回一个值为`4`的`Promise`(即`new Promise(resolve => resolve(4)`).

而在

```js
new Promise((resolve) => {
  resolve(Promise.resolve(4)); //resolve了一个Promise
});
```

```js
Promise.resolve().then(() => {
  return Promise.resolve(4); //return了一个Promise
});
```

中，因为js在遇到`resolve`或者`return`一个`Promise`对象时，会先求得这个`Promise`对象的值，也就是这个`Promise`的状态为`fulfilled`或`rejected`的值(假如这个值是`'a'`)，再用这个值作为返回的新的`Promised`的值，这个新的`Promsie`(就是`new Promise(resolve => resolve('a')`)作为下级链式调用的`Promise`。

## 2、结论

在chrome内部实现的Promise和标准的Promise/A+规范存在差异。浏览器内部实现的区别。我们可以理解为，resolve或者return遇到一个Promise对象时，得到这个Promise的值之后，会把这个值用微任务包装起来，在return值向外传递(因为后边没有.then()了，所以是向父级的外层传递)时，会产生第二个微任务。

所以代码

```js
//代码1
new Promise((resolve) => {
  resolve(Promise.resolve(4)); //resolve了一个Promise
}).then((res) => {
  console.log(res);
});
```

可以理解为

```js
new Promise((resolve) => {
  resolve(4);
})
  .then()
  .then()
  .then((res) => {
    console.log(res);
  });
```

对应的，代码

```js
//代码2
Promise.resolve()
  .then(() => {
    return Promise.resolve(4); //return了一个Promise
  })
  .then((res) => {
    console.log(res);
  });
```

可以理解为

```js
Promise.resolve()
  .then(() => {
    return 4;
  })
  .then()
  .then()
  .then((res) => {
    console.log(res);
  });
```

这样理解的，核心就是会比正常的return一个非Promise的值时，多两个微任务.then().then()

另外的

```js
Promise.resolve()
  .then(() => {
    return Promise.resolve(Promise.resolve(Promise.resolve(4)));
  })
  .then((res) => {
    console.log(res);
  });
```

像这样的`return Promise.resolve(Promise.resolve(Promise.resolve(4)))`嵌套多层`Promise`，其实和`Promise.resolve(4)`是一样的，并不会多产生微任务。因为这两段代码的`Promsie`状态变为`fulfilled`的过程并不需要等待。而是拿到它的值之后，在向后运行的时候，会产生微任务。

但如果是

```js
Promise.resolve()
  .then(() => {
    return new Promise((resolve) => {
      resolve(4);
    })
      .then((res) => {
        return 4.1;
      })
      .then((res) => {
        return 4.2;
      });
  })
  .then((res) => {
    console.log(res);
  });
```

这时`.then(res => { console.log(res); })`想要运行，需要等待前边return 的Promise状态变为`fulfilled`才行，

```js
new Promise((resolve) => {
  resolve(4);
})
  .then((res) => {
    return 4.1;
  })
  .then((res) => {
    return 4.2;
  });
```

本身是会注册两个微任务的，而拿到它的值之后，在向后运行的时候，又会产生两个任务(包装值一次，return传递一次)。

## 3、回顾

我们再来看这个题目

```js
Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
```

按照上边的分析，可以对应转化为

```js
Promise.resolve()
  .then(() => {
    console.log(0);
    return 4;
  })
  .then()
  .then()
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
```

所以运行结果是0,1,2,3,4,5,6
