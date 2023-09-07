---
title: 如何实现jwt鉴权机制？说说你的思路
pubDatetime: 2021-07-28T16:00:00.000Z
author: caorushizi
tags:
  - nodejs
postSlug: 2f89efe89997f2f728d310e4b7afa090
description: >-
  ![](https://static.vue-js.com/efff62b0-cd88-11eb-ab90-d9ae814b240d.png)预览一、是什么-----JWT（JSONWebToken）
difficulty: 3.5
questionNumber: 11
source: >-
  https://fe.ecool.fun/topic-answer/53a6d5df-e7b0-4f11-a1ee-c55fd1f1f8c2?orderBy=updateTime&order=desc&tagId=18
---

![](https://static.vue-js.com/efff62b0-cd88-11eb-ab90-d9ae814b240d.png)

预览

## 一、是什么

JWT（JSON Web Token），本质就是一个字符串书写规范，如下图，作用是用来在用户和服务器之间传递安全可靠的信息

![](https://static.vue-js.com/052904c0-cd89-11eb-ab90-d9ae814b240d.png)

预览

在目前前后端分离的开发过程中，使用`token`鉴权机制用于身份验证是最常见的方案，流程如下：

- 服务器当验证用户账号和密码正确的时候，给用户颁发一个令牌，这个令牌作为后续用户访问一些接口的凭证
- 后续访问会根据这个令牌判断用户时候有权限进行访问

`Token`，分成了三部分，头部（Header）、载荷（Payload）、签名（Signature），并以`.`进行拼接。其中头部和载荷都是以`JSON`格式存放数据，只是进行了编码

![](https://static.vue-js.com/1175f990-cd89-11eb-85f6-6fac77c0c9b3.png)

预览

### header

每个 JWT 都会带有头部信息，这里主要声明使用的算法。声明算法的字段名为`alg`，同时还有一个`typ`的字段，默认`JWT`即可。以下示例中算法为 HS256

```typescript
undefined;
```

因为 JWT 是字符串，所以我们还需要对以上内容进行 Base64 编码，编码后字符串如下：

```typescript
undefined;
```

### payload

载荷即消息体，这里会存放实际的内容，也就是`Token`的数据声明，例如用户的`id`和`name`，默认情况下也会携带令牌的签发时间`iat`，通过还可以设置过期时间，如下：

```typescript
undefined;
```

同样进行 Base64 编码后，字符串如下：

```typescript
undefined;
```

### Signature

签名是对头部和载荷内容进行签名，一般情况，设置一个`secretKey`，对前两个的结果进行`HMACSHA25`算法，公式如下：

```typescript
undefined;
```

一旦前面两部分数据被篡改，只要服务器加密用的密钥没有泄露，得到的签名肯定和之前的签名不一致

## 二、如何实现

`Token`的使用分成了两部分：

- 生成 token：登录成功的时候，颁发 token
- 验证 token：访问某些资源或者接口时，验证 token

### 生成 token

借助第三方库`jsonwebtoken`，通过`jsonwebtoken` 的 `sign` 方法生成一个 `token`：

- 第一个参数指的是 Payload
- 第二个是秘钥，服务端特有
- 第三个参数是 option，可以定义 token 过期时间

```typescript
undefined;
```

在前端接收到`token`后，一般情况会通过`localStorage`进行缓存，然后将`token`放到`HTTP` 请求头`Authorization` 中，关于`Authorization` 的设置，前面要加上 Bearer ，注意后面带有空格

```typescript
undefined;
```

### 校验 token

使用 `koa-jwt` 中间件进行验证，方式比较简单

```typescript
undefined;
```

- secret 必须和 sign 时候保持一致
- 可以通过 unless 配置接口白名单，也就是哪些 URL 可以不用经过校验，像登陆/注册都可以不用校验
- 校验的中间件需要放在需要校验的路由前面，无法对前面的 URL 进行校验

获取`token`用户的信息方法如下：

```typescript
undefined;
```

注意：上述的`HMA256`加密算法为单秘钥的形式，一旦泄露后果非常的危险

在分布式系统中，每个子系统都要获取到秘钥，那么这个子系统根据该秘钥可以发布和验证令牌，但有些服务器只需要验证令牌

这时候可以采用非对称加密，利用私钥发布令牌，公钥验证令牌，加密算法可以选择`RS256`

## 三、优缺点

优点：

- json 具有通用性，所以可以跨语言
- 组成简单，字节占用小，便于传输
- 服务端无需保存会话信息，很容易进行水平扩展
- 一处生成，多处使用，可以在分布式系统中，解决单点登录问题
- 可防护 CSRF 攻击

缺点：

- payload 部分仅仅是进行简单编码，所以只能用于存储逻辑必需的非敏感信息
- 需要保护好加密密钥，一旦泄露后果不堪设想
- 为避免 token 被劫持，最好使用 https 协议
