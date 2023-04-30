# ProtoBuf

ProtoBuf 是个好东西，是一款非常好用的 `数据序列化机制`，我在之前的工作中经常会用，而且随着使用场景的增加，愈发的深入了解、深入使用，我对 ProtoBuf 的喜爱程度只增不减。

在我的心目中，ProtoBuf 甚至要比 Json 更好用。所以这次就给大家介绍一下 ProtoBuf，结合我过往两年半的应用经验，来分析一下它为什么是个好东西。

## 概念介绍

### 简单介绍

```txt
Protocol Buffers - Google's data interchange format
```

鲁迅说过，“字越少，事越大” ，但不要慌，我给大家翻译一下啥意思。

“Google” 意思是 “牛逼”，“data interchange” = “数据交换”，“format” = "格式"，所以：

```txt
ProtoBuf 全称 Protocol Buffers，牛逼的数据交换格式。
```

### 详细说明

适度玩梗，接下来进入正题。

ProtoBuf 是一个跨语言、跨平台、可扩展的结构化数据的序列化机制。就像 XML，但却更小、更快、更简单。

```txt
You define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured data to and from a variety of data streams and using a variety of languages.
```

**翻译**：

你只需要定义一遍你的数据的结构化格式，然后你就可以将其编译成某种特殊的代码，这种代码可以被各种语言引用，利用编译出来的代码，你就可以在各种语言中，实现对各种数据流的读写。

**说明**：

1. **数据结构化格式**： 其实就是 .proto 文件，像 TS 的 interface、C++ 和 Python 的 struct、Java 和 Node 的 entity）

2. **编译成特殊代码**：利用 protoc 编译工具，将 pb 文件编译成各种语言，举例：

    1. C++：编译成 .pb.h 和 .pb.cc 文件

    2. Python：编译成 xxx_pb.py 文件

    3. 其它支持的语言：

       ![img](./images/language.png)

    4. Js：js 的编译工具叫 pbjs，是独立于 protoc 的存在，可以把 pb 编译成 js 或者 json，js 又分 commonjs 或者 es。但总之，就是编译成能被 js 程序引用的格式

3. **各种数据流的读写**：protobuf 可以实现各种数据格式之间的转换，比如 xml、json、pb binary、txt 等格式的转换、读写，并且还提供了一些比如 create、verify、encode、decode 等 API。

### Proto2 Proto3

我们上官网看，会发现有两个版本，两个版本其实区别并不太大，3 主要是增加了一些语言的支持，改了一些约定。我之前一直用的 2，感觉也挺好用的，不过初次使用当然是推荐 3 了。

1. proto3 更重约定而弱语法。比如：
    1. 移除了 default 标记，2 的时候是可以指定标记 [default=XX]，3 去掉了这个东西，3 中所有默认值都由系统决定默认值，也就是约定好的。避免序列端和反序列端设置的 default 不一致
    ![img](./images/default_value.png)
    2. 枚举第一个 value 一定是 0
    3. 移除了 required, 2 是分 optional 和 required，但其实 required 一直都是不推荐使用的。
2. 增加了多种语言支持，Go、Ruby 等
3. 支持 map，proto2 是不支持的，都是用 Message 嵌套实现，现在支持 map 会更方便
4. 支持 json 映射，其实 pbjs 从 proto2 早就支持 json 的序列化了，我们前端开发并不需要太在意，只是其他语言如果想用 json 的话，就得用 proto3

## 上手使用

**通用工作流**：

![svg](./images/protoc.png)

**结合 monorepo**：

![svg](./images/protoc_mono.png)

### 第一步，编写 .proto

我这里就写一个超简单的例子：

```proto
syntax = "proto3";

package bilibili;

message PointCloud {
  repeated Point points = 1;
  int32 size = 2;
}

message Point {
  int32 x = 1;
  int32 y = 2;
  int32 z = 3;
}
```

不难看出就是定义了一个点云数据结构。

### 第二步，编译

前面说到需要有编译工具，才能将 .proto 编译成其他语言。对于大多数语言，都是用 protoc 进行编译，而 js 不太一样。

这里需要说明的是，想要在项目中引用 proto，有两种方式：

1. 一种是借助 protobufjs 库，直接在 js 代码中 load proto 文件；
2. 一种是借助 protobufjs-cli，先将 proto 编译成 es6，再在 js 中引入【重点】

**protobufjs**：

protobufjs 是纯 js 实现，它支持 typescript。它的特点就是小并且速度快。

这里借用一张官网的图：

![img](./images/protobufjs.png)

它的用法也比较简单，API 少但够用。这张图差不多把 protobufjs 的功能以及使用方式全都包括了。一个官网的例子基本就能介绍完：

```ts
import { load } from "protobufjs"; // respectively "./node_modules/protobufjs"

load("points.proto", function(err, root) {
    if (err)
        throw err;

    // 获取数据类
    var PointCloud = root.lookupType("bilibili.PointCloud");

    // 声明一个字面量对象
    var payload = { points: [{ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }], size: 10 };

    // 校验 payload 的准确性
    var errMsg = PointCloud.verify(payload);
    if (errMsg)
        throw Error(errMsg);

    // 根据字面量参数创建 message 对象
    var message = PointCloud.create(payload); // or use .fromObject if conversion is necessary

    // 编译成 Uint8Array (browser) or Buffer (node) 格式
    var buffer = PointCloud.encode(message).finish();
    // 可以导出 binary 文件，或者在 worker 线程之间传递数据，速度更快

    // 从 Uint8Array (browser) or Buffer (node) 解码成数据类
    var message = PointCloud.decode(buffer);
    // 一个作用就是读取大型文件，文件 encode 成 binary 后，体积会变小很多

    // 转成字面量对象
    var object = PointCloud.toObject(message, {
        longs: String,
        enums: String,
        bytes: String,
        // see ConversionOptions
    });
});
```

除了这些功能外，还有 encodeDelimited、decodeDelimited、reflection、custom classes、grpc 等等，大家可以自行前往官网查看。 [protobufjs](https://protobufjs.github.io/protobuf.js/index.html)

protobufjs 的 load 方式存在一些问题：

1. 它一次只能 load 一份 proto，我有多个 proto 就需要 load 很多次

2. load 虽然是异步的，但它 load 是需要花时间的，我并不想要这多余的开销

3. 它需要绑定再项目 repo 中，不同项目不好实现复用 proto 定义

4. 没有人喜欢写 callback 函数，万一我在某个 callback 里又去 load 一下，会很痛苦，又要考虑异步问题，又要考虑 this 指向问题

**protobufjs-cli**：

protbufjs-cli 是 protobufjs 的一个分支，所以他们的功能 api 啥的都是一样的，不同点是 protobufjs-cli 提供了命令行编译工具 ———— `pbjs` 和 `pbts`。它可以把 proto 先编译成静态的，再引入到项目中使用。

#### 安装 pbjs、pbts

```bash
yarn add protobufjs@~6.11.3 
yarn add protobufjs-cli@~1.1.1
```

> 这里限制 major 版本为6 的主要是因为官网有提示：
>> Note that this library's versioning scheme is not semver-compatible for historical reasons. For guaranteed backward compatibility, always depend on ~6.A.B instead of ^6.A.B (hence the --save-prefix above).

安装完了之后，能在 `node_modules/prorobufjs-cli/bin/` 目录下，看到 pbjs 和 pbts 两个文件

#### 编译脚本

编译工具特别简单，参数也不多。执行 `yarn pbjs` 命令行就会打印出 help 信息，也可以去看官方文档，当然，为了防止你看一半就跳走了，我把链接放在了文章末尾 (=_=)。

简要参数说明：

- -t,--target 目标格式，一共有 json、json-module、static、static-module、proto2、proto3，大家可以自己尝试一下，我试了下感觉就 static-module 看起来最顺眼（其实官网有说 static 或 static-module 的速度更快）
- -w,--wrap 模块类型，就是我们熟悉的 es6、commonjs、amd 这些
- -r,--root 指定 root 节点的名称，当你项目 app 中引入了两个 proto 库，它们 root 同名，app 最终打包的时候，可能会出现互相两个 proto 库互相覆盖的问题，所以 root 参数是很有用的
- -o,--out 结果文件，注意一点，结果文件路径在前，原 proto 文件路径在后

先准备 build.sh：

```bash
protos='proto/*.proto' # 所有 proto 文件的路径，如果你有多个分组，是支持空格拼接的
target='src' # 编译生成文件的目标目录，为什么叫 src 后面会说

rm -rf src # 清除历史结果
mkdir src

pbjs -t static-module -w es6 -r root -o $target/index.js $protos # 编译至 es6
pbts -o $target/index.d.ts $target/index.js # 生成 d.ts 文件
```

然后修改 package.json

```json
{
    "scripts": {
        "build": "bash build.sh",
    },
}
```

#### 编译结果




### 第三步，打包成 monorepo 库

所以，为什么不先把 proto 编译成 js，然后再用 rollup 或者 vite 这种打包工具打包成一个 monorepo 的库，即可实现复用，还可以将整个 monorepo 的业务，通过数据类型定义来做一遍梳理整合。


#### prepare

我这里准备了一份 lerna monorepo，

#### 安装

```

```

#### 

### 第三步，在 monorepo 

## 应用

### 存储

#### every thing convert

#### 

### 通信

### 业务

### 配置

### 抽象

## 参考链接

[protobuf](https://protobuf.dev/)

[protobufjs](https://protobufjs.github.io/protobuf.js/index.html)

[protobufjs-cli](https://github.com/protobufjs/protobuf.js/blob/master/cli/README.md)