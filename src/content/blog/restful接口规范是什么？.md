---
title: restful接口规范是什么？
pubDatetime: 2022-04-05T16:00:00.000Z
author: caorushizi
tags:
  - javascript
postSlug: 6f0654c121dcdf9f30c9c56275d1aa6a
description: >-
  RESTfulAPI基础==============>本规范在API设计上遵循REST架构风格，本部分会针对如何实现RESTfulAPI，作出说明简介--REST，全称Representational
difficulty: 2.5
questionNumber: 121
source: >-
  https://fe.ecool.fun/topic-answer/485b5052-3119-4ced-9473-940489629f99?orderBy=updateTime&order=desc&tagId=10
---

# RESTful API 基础

> 本规范在 API 设计上遵循 REST 架构风格，本部分会针对如何实现 RESTful API，作出说明

## 简介

REST，全称 Representational State Transfer（表现层状态转化），由 [Roy Thomas Fielding](http://en.wikipedia.org/wiki/Roy_Fielding) 在他 2000 年的 [博士论文](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm) 中提出的，是一种被广泛使用的 API 架构风格。

## 资源 Resource

在 REST API 的设计中，首先需要面向资源进行建模，其中每个节点是一个“简单资源”或“集合资源”。 为方便起见，它们通常被分别称为资源和集合。

1.  一个集合包含**相同类型**的资源列表。 例如，一个用户拥有一组联系人。
2.  资源具有状态，以及零个或多个子资源。 每个子资源可以是一个简单资源或一个集合资源。

## 方法 Method

每个资源都会对应一组操作方法，用户通过 API 来完成对应的操作（使用 HTTP Method），常见的操作方法如下：

操作类型

HTTP 映射

举例

获取资源集合

GET <collection URL>

curl -X GET [https://foo.bar.com/api/v1/customers](https://foo.bar.com/api/v1/customers)

获取单个资源

GET <resource URL>

curl -X GET [https://foo.bar.com/api/v1/customers/123](https://foo.bar.com/api/v1/customers/123)

创建资源

POST <collection URL>

curl -X POST [https://foo.bar.com/api/v1/customers](https://foo.bar.com/api/v1/customers)

更新资源

PUT <resource URL>

curl -X PUT [https://foo.bar.com/api/v1/customers/123](https://foo.bar.com/api/v1/customers/123)

局部更新资源

PATCH <resource URL>

curl -X PATCH [https://foo.bar.com/api/v1/customers/123](https://foo.bar.com/api/v1/customers/123)

删除资源

DELETE <resource URL>

curl -X DELETE [https://foo.bar.com/api/v1/customers/123](https://foo.bar.com/api/v1/customers/123)

_其中：POST/PUT 与 PATCH 的区别在于全部更新，还是局部信息的更新，POST/PUT 为该资源的所有字段均被更新或者覆盖。_

# RESTful API 设计规范

## 面向资源设计 URL

### 面向使用者建模

资源不是数据模型， 也不是领域模型，它的语义应该面向使用者。

**反例：**

    # 面向数据模型设计资源，需要多次请求
    /customers/123
    /customers/123/baseinfo
    /customers/123/tags

**正例：**

    # 面向使用者设计，可以把资源定义为：顾客档案
    /customers_archives/123

### 资源与角色相关

不同角色的资源可以不同，不同角色使用的资源可以是不一样的，比如：

**管理员访问某个顾客的订单：**

    GET /customers/123/podcasts

**顾客访问自己的订单：**

    GET /my_podcasts

### 一类资源两个 URL

每个资源都应该只有两个基础 URL（Endpoint），一个 URL 用于集合，另一个用于集合中的某个特定元素。

    /customers      # customer 集合
    /customers/1    # customer 集合中的特定元素

### 使用一致的复数名词

避免混用复数和单数形式，只应该使用统一的复数名词来表达资源。

**反例：**

    GET /story
    GET /story/1

**正例：**

    GET /stories
    GET /stories/1

### 复杂的查询逻辑使用查询字符串

保持 URL 简单短小，将复杂或可选参数移动到查询字符串。

    GET /customers?country=usa&state=ca&city=sfo

### 表达资源之间的关联

当需要对关联在资源 1 下的资源 2 进行操作时，使用该形式构造 URL：

resources/:resource_id/sub_resources/:sub_resource_id

**反例：**

    GET /cusomters/podcasts/123
    GET /getCustomerPodcasts?customer_id=123

**正例：**

    GET /cusomters/5678/podcasts        # 获取某个客户的所有播客
    GET /cusomters/5678/podcasts/123    # 获取某个客户的某个播客
    POST /cusomters/5678/podcasts       # 为某个客户创建一个新播客

## 使用 HTTP Method 表示动作

URL 中不应该包含动词，而是全部使用 Method 来表示动作。

**反例：**

    GET /getCusomters
    GET /getAllMaleCusomters
    POST /createCusomter
    POST /updateCustomer
    POST /customer/create_for_management/

**正例：**

    GET /customers                # 获取客户列表
    GET /cusomters?gender=male    # 获取客户列表（过滤出男性）
    GET /customers/5              # 获取ID为5的客户
    POST /cusomters               # 创建新客户
    PUT /cusomters/5              # 更新已存在的客户5（全量字段）
    PATCH /cusomters/5            # 更新已存在的客户5（部分字段）
    DELETE /cusomters/5           # 删除客户12

## 使用 HATEOAS

HATEOAS 是 Hypermedia As The Engine Of Application State 的缩写，在 [Richardson Maturity Model](http://martinfowler.com/articles/richardsonMaturityModel.html)中，它是 REST 的最高级形态，采用 Hypermedia 的 API 在响应中除了返回资源本身外，还会额外返回一组 Link。 这组 Link 描述了对于该资源，客户端接下来可以做什么以及怎么做，例如：

    {

        "tracking_id": "123456",
        "status": "WAIT_PAYMENT",
        "items": [
            {
                "name": "potato",
                "quantity": 1
            }
        ],
        "_links": {
            "self": {
                "href": "http://localhost:57900/orders/123456"
            },
            "cancel": {
                "href": "http://localhost:57900/orders/123456"
            },
            "payment": {
                "href": "http://localhost:57900/orders/123456/payments"
            }
        }
    }

使用 HATEOAS 的好处包括但不限于：

1.  前端不再需要硬编码绝大多数的后端 API URL，而是由后端在响应中返回，后端在对 API 重命名时可以做到前端无感知。
2.  将一些业务规则统一收敛到后端，比如：有的功能对某个用户的可见性（权限）

## 自定义方法

> 结合实践，使用严格的 RESTful 会有一些语义不易表达（或者说表达起来很拧巴），所以在此基础上，并参考：[Google Clould API - 自定义方法](https://cloud.google.com/apis/design/custom_methods)，允许使用一些自定义方法来进行表达。这些方法**应该**仅用于标准方法不易表达的功能。通常情况下，**应该**尽可能优先考虑使用标准方法，而不是自定义方法，使用方式如下：

- 为了在表达上和资源区分开，自定义方法使用动词表示，表示针对资源的自定义动作
- 自定义方法统一只使用 GET / POST 这两种 method。

  # 一些自定义方法举例

  POST /cusomters/5/cancel
  POST /cusomters/5/undelete
  POST /cusomters/5/search # 考虑到搜索通常参数比较长，使用 GET 可能会导致超出长度
  GET /cusomters/batch_get

# API 格式约定

## URL 前缀

使用如下规则构建 URL：

    https://foo.bar.com/api/ + 业务域 + 版本号 + 资源集合 + 资源ID

    例如：https://foo.bar.com/api/mall/v1/customers/1

## Response Body 结构

使用相同的 HTTP 响应结构，推荐使用下列结构：

    {

      "code": 0,            # 错误码，请求成功时返回0
      "msg": "success",     # 错误信息，请求成功时返回"success"
      "data": {             # 数据内容，结构必须为object，使用 list/string 均不合规范
        "id": 1,
        "name": "abc"
      },
      "extra": {            # 错误码非0时，data应为空，推荐extra字段返回错误时需要携带的信息

      }
    }

## 版本号

- 当 API 的升级是兼容的时，无需升级版本号。
- 版本号使用简单的有序数，而不要使用点号（如：V1.2）。
- 在新版本上线时需要保证旧版本 API 仍然可用，待旧版本不再有请求量时，才能进行下线。

### URI Path 中的版本号

使用在 URI Path 中带版本号，来表示 API 整体的版本，当业务域的 API 发生了重大整体升级时，需要升级该版本号，形如：

    https://foo.bar.com/api/mall/v1

## HTTP 状态码

> 使用合适 HTTP Status Code，表达响应的语义

HTTP

描述

200

No error.

400

Client specified an invalid argument. Check error message and error details for more information. （参数错误）Request can not be executed in the current system state （执行操作不满足接口前置条件）

401

Request not authenticated due to missing, invalid, or expired token. （访问身份错误、或者 token 错误）

403

Client does not have sufficient permission. （无权限）

404

A specified resource is not found, or the request is rejected by undisclosed reasons, such as whitelisting. （操作的资源不存在）

405

The HTTP method in the request is not allowed on the resource. (请求的方法不支持)

409

Concurrency conflict, such as read-modify-write conflict. （服务端出现并发冲突、幂等性冲突、读写冲突等等）

409

The resource that a client tried to create already exists. （要操作的资源已存在）

429

Either out of resource quota or reaching rate limiting. （限流错误）

500

Internal server error. Typically a server bug. （内部异常，不可恢复的）

503

Service unavailable. Typically the server is down.（服务不可用，可恢复异常，短时间之后可以进行重试并恢复的错误码）

504

Request deadline exceeded. This will happen only if the caller sets a deadline that is shorter than the method's default deadline (i.e. requested deadline is not enough for the server to process the request) and the request did not finish within the deadline. （调用超时）

## 错误码

> 在使用 HTTP Status Code 的基础上，还需要有业务错误码，通过 code 字段返回。错误码由各业务方自行约定，业务内部自行划分区段。

## 分页

### 基于 page、page_size 的分页方式

    curl https://foo.bar.com/api/mall/v1/customers?page=1&page_size=10

    {

      "code": 0,
      "message": "success",
      "data": {
        "pagination": {
          "total": 3465
        },
        "customers": [
          {
            "id": 123,
            "job_id": 456
          }
        ]
      }
    }

### 基于 offset、limit 的分页方式

    curl https://foo.bar.com/api/mall/v1/customers?offset=20&limit=10
    {
      "code": 0,
      "message": "success",
      "data": {
        "pagination": {
          "total": 3465
        },
        "customers": [
          {
            "id": 123,
            "job_id": 456
          }
        ]
      }
    }

### 基于 page_token 的分页方式

    curl https://foo.bar.com/api/mall/v1/customers?page_token=xxxxxxx&page_size=10
    {
      "code": 0,
      "message": "success",
      "data": {
        "pagination": {
          "page_token": "yyyyyyyyyy",
          "has_more": true
        },
        "customers": [
          {
            "id": 123,
            "job_id": 456
          }
        ]
      }
    }

# API 度量指标

API 的实现方，需要密切关注以下基础监控指标，以便于：

1.  及时发现系统的突发情况，如：接口 QPS / 耗时激增，依赖的 RPC 接口耗时激增等。
2.  为接口优化提供依据

## 请求量

- 各接口的请求量，可选口径：QPS / 近 7 天请求量 / 近 1 天请求量。
- **优化方向：在不影响用户体验的前提下，尽可能减少请求量**

## 接口耗时

- 各接口的响应耗时，可选口径：latency avg / p50 / p95 / p99
- **优化方向：在满足使用者需求的前提下，尽可能少的耗时**

## I/O 扩散量（内部 I/O 访问量 & 耗时 & 错误量）

- **单个接口**的各项 I/O 的 QPS & 耗时 & 错误量，如：RPC、Mysql、Redis、Mongo、ES 等，当依赖的基础设施出现问题时，可以快速定位原因。
- **优化方向：尽可能减少一次 API 请求中，各项 IO 的 QPS 与耗时。**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b79065cf3f541fb9ccce9e59f07cc93~tplv-k3u1fbpfcp-zoom-1.image)

预览

# API 开发最佳实践

> 以下部分对一些场景和功能作给出了具体的规范和要求

## API-First

在服务端与客户端开发过程中，提前定义好 API，多方依照契约并行开发。

- 在每次需求编码前，就需要提前定义好 API，并在接口平台进行登记
- 并在后端进行技术方案评审时，需要对 API 接口进行评审

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/18e3edda48154564b23da06ee3c541d5~tplv-k3u1fbpfcp-zoom-1.image)

预览

## 面向使用者设计

### **仔细定义“资源”**

在设计 API 时，一个重要的前提是对 Resource 本身进行合理的定义。不应该简单的把服务端内部的存储模型，视为“资源”，而是应该面向使用者，比如：人才详情页也是人才的各种模型的组合，它们应该视为一种（而非多种） 资源。

### 避免琐碎的 API

尽量避免公开大量小型资源的“琐碎”Web API，此类 API 可能需要客户端（前端）发送多个请求才能拼装它需要的所有数据。尽可能将相关信息合并成单个较大资源，以便于使用方直接使用。

### 按需返回

应当关注使用方所依赖的具体字段，以及字段的使用方式，只返回使用方依赖数据的最小集，确保返回的字段都是对功能有意义的。

## CQRS

CQRS 全称是 Command Query Responsibility Segregation，将应用程序分为两部分：

- 命令端(Command)：处理程序创建，更新和删除请求，并在数据更改时发出事件。
- 查询端(Query)：通过执行查询来处理查询，并且通过订阅数据更改时发出的事件流而保持最新。

CQRS 使用分离的接口，将数据查询操作和数据修改操作分离开来，这也意味着在查询和更新过程中使用的数据模型也是不一样的，这样读和写逻辑就隔离开来了。

相比数据库的读写分离，CQRS 可以理解为是应用层的读写分离，针对读的场景，构建单独的读模型，以提高查询的性能，同时提高系统整体的可维护性。

> 扩展阅读：
>
> [CQRS - Martin Fowler](https://martinfowler.com/bliki/CQRS.html)
>
> [简单可用的 CQRS 编码实践](https://insights.thoughtworks.cn/backend-development-cqrs/)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2412792ec3f461a878a6a13c3054f42~tplv-k3u1fbpfcp-zoom-1.image)

预览

## 兼容性（Compatibility）

**API 的变更必须保证向后兼容，即 API 的升级不会导致 前端/客户端 的出错。**

即使某次的升级是前后端同时发布，也不要做不兼容的升级，原因如下：

- 我们经常并不知道所有的 API 使用方
- 发布过程需要时间，无法真正实现“同时发布”
- 使发布各环节耦合，一旦前端需要回滚，则后端也要跟着一起回滚，导致上线方案复杂化

常见的**不兼容**升级如下：

- 移除或重命名字段、方法、枚举值
- 更改字段类型
- 修改字段的行为和语义

## 幂等性（Idempotency）

**保证 API 的幂等性，能使客户端可以更安全的重试，从而让复杂的流程实现更为简单。**

### Create 类型的幂等

创建类型的 API，为了实现幂等性，常见的做法是使用一个 client-side generated deduplication token（客户端生成的唯一 ID），在反复重试时使用同一个 Token，便于服务端识别重复，如果发现重复，应按创建成功返回。

### Update 类型的幂等

更新类型的 API，通常有唯一 ID 对需要更新的资源进行标示，以此可以保证幂等。

对于“Delta”语义的操作，有以下几类方式确保幂等性：

1.  IncrementBy：基于某个数值增加
2.  SetNewTotal：设置新的总量
3.  使用 Deduplication Token 保证幂等

这几种方式各有优缺点，需要根据场景选择合适的方式。

### Delete 类型的幂等

Delete 的幂等性问题，往往在于一个对象被删除后，再次试图删除可能会由于数据无法被发现导致出错。这个行为一般来说也没什么问题，虽然严格意义上不幂等，但是也无副作用。

## 长耗时请求异步化

如果某个 API 方法需要很长时间才能完成，可以通过：

1.  在服务端异步启动任务，并返回 GUID 标示 “长时间运行的操作”资源
2.  客户端通过定时轮询 _/polling/{guid}，_ 获取任务进行的状态。
3.  当任务完成/失败时，客户端可以获取到处理的结果/失败原因。

# 附录 I：Richardson 成熟度模型

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5590f2f4cc44e32934cd4361ec3ebb5~tplv-k3u1fbpfcp-zoom-1.image)

预览

> [Richardson Maturity Model - steps toward the glory of REST](https://martinfowler.com/articles/richardsonMaturityModel.html)
>
> [Richardson 成熟度模型(Richardson Maturity Model) - 通往真正 REST 的步骤](https://blog.csdn.net/dm_vincent/article/details/51341037)
