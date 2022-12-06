# 1.TypeScript是什么

1以js为基础构建的语言

2一个js的超集（js有的ts肯定有，js没有的ts可能有）

3可以在任何支持js的平台中执行

4ts扩展了js并添加了类型

5ts**不能被js解析器直接执行**，需要通过一定手段编译成js来执行 

# 2.ts开发环境搭建

1下载安装nodejs

2使用npm全局安装ts npm i -g typescript

3创建ts文件

4使用tsc对ts文件进行编译

​	进入命令行 m,进入ts文件所在目录,执行命令tsc xxx.ts

# 3.类型声明

![image-20221127142418955](C:\Users\wangdadiao\AppData\Roaming\Typora\typora-user-images\image-20221127142418955.png)

| 类型    | 例子            | 描述                           |
| ------- | --------------- | ------------------------------ |
| number  | 1,-1,2.5,33     | 任意数字                       |
| string  | 'hi',"hi",hi    | 任意字符串                     |
| boolean | true,false      | 布尔值true或flase              |
| 字面量  | 其本身          | 限制变量得值就是该字面量得值   |
| any     | *               | 任意类型                       |
| unknown | *               | 类型安全得any                  |
| vold    | 空值(undefined) | 没有值或者（undefined)         |
| never   | 没有值          | 不能是任何值                   |
| object  | {name:'刘凯'}   | 任意得js对象                   |
| array   | [1,2,3]         | 任意js数组                     |
| tuple   | [4,5]           | 元素，ts新增类型，固定长度数组 |
| enum    | enum(A,B)       | 枚举，ts中新增类型             |

## 3.1number类型

```javascript
//表示声明变量a,同时指定类型为number
let a:number
//a的类型设置为了number，在以后的过程中a的值只能是数字
// a=10  正确的
// a='hi' 错误的
//给函数的参数加上类型,返回值加上类型
function sum (a:number,b:number):number {
    return a+b
}
let result = sum(123,1)
```

## 3.2string类型

```javascript
let b:string
b='hi'
```

## 3.3boolean类型

```javascript
//声明完变量直接赋值
let c:boolean = true
c = false  
//如果变量的声明和赋值时同时进行的，ts可以自动对变量进行类型检测
let d = false
```

## 3.4字面量

```javascript
//字面量类型声明
let a1:10;
```

## 3.5any

```javascript
//any表示任意类型,一个变量类型设置any相当于对该变量关闭了ts类型检测
let a4:any //显示any
//声明变量不指定类型，ts解析器自动判断变量类型为any
let a5 //隐式any
a5='1'
a5=1
a5=true
let a6:string
a6 = a5 //a5类型是any，它可以赋值给任意变量
```

## 3.6unknown

```javascript
//unknown表示未知类型的值
let a7:unknown
a7=true
a7=1
a7='hello'
//unknown 实际上就是一个类型安全的any
//unknown类型的变量，不能直接赋值给其他变量
// a6 =a7  错误的
if(typeof a7==='string') a6 = a7
```

## 3.7vold

```javascript
//void用来表示为空，以函数为例表示没有返回值
function fn():void {}
```

## 3.8never

```javascript
//never表示永远不会返回结果
function fn2():never {
    throw new Error("报错了")
}
```

## 3.9object

```javascript
//object表示一个js对象
let b1 :object
//{}用来指定对象中包含哪些属性，在属性码后面加上？表示属性是可选的
let b2:{name:string,age?:number} 
b2 = {name:'刘凯'}
//[propName:string]:any表示任意类型的属性
let b3:{name:string,[propName:string]:any}
b3 = {name:'刘凯',age:18}
```

## 3.10array

```javascript
/*
    数组类型声明：
        类型[]
        Array<类型>
*/
//string[]表示字符串数组
let b5:string[]
b5=['a','b']
//number[]表示数值数组
let b6:number[]
let b7:Array<number>
b7=[1,2,3,4,5]
```

## 3.11tuple类型

```javascript
//元组：固定长度的数组 语法：[类型,类型,类型]
let b8:[string,string]
b8=['1','a']
```

## 3.12enum类型

```javascript
//枚举
enum Gender{
    Male,
    Female
}
let b11 :{name:string,gender:Gender}
b11={name:'刘凯',gender:Gender.Male}
```

## |连接多个类型

```javascript
//使用 | 来连接多个类型
let a2:'hello' | 'world'
a2 = 'hello'
a2 = 'world'
let a3: boolean |string
a3=true
a3='love'
```

## 类型断言

```javascript
a6 = a7 as string //类型断言，告诉编译器a7就是字符串
a6 = <string> a7  //上下写法等同
```

## 函数解构类型声明

```javascript
/*
设置函数结构的类型声明：
    语法：(形参：类型，形参：类型.....)=>返回值类型
*/
let b4:(a:number,b:number) => number
b4 = function (n1,n2) {
    return n1+n2
}
```

## 类型得别名

```javascript
//类型得别名
type myType = 1|2|3|4
let b12:1|2|3|4;
let b13:1|2|3|4;
let b14:myType
```

# 4.编译选项

```javascript
tsc xxx.ts -w   //自动监视ts的变化，在js里修改对应的变化
在有tsconfig.json配置文件的条件下，   tsc  命令可以把所有ts文件编译成js文件
tsc -w  //监视所有ts文件，在对应js文件做出更改
```

tsconfig.json是ts编译器的配置文件，ts编译器可以根据它的信息来对代码进行编译

```json
tsconfig.json文件的配置
{
    /*
    	include用来指定哪些ts文件需要编译
    	路径：**表示任意目录
    		*表示任意文件
    	exclude：不需要编译的文件目录
    		默认值：['node_modules','bower_components','jspm_packages']
    	extends:定义被继承的配置文件
    	files:指定需要编辑文件的列表
    	compilerOptions：{ 编译器得选项
    		target  用来指定ts被编译得es得版本，可写'es3','es5,'es6','es2015,'es2016-2020','esnext'(最新版本的js)
    		module 指定要使用的模块化的规范 可写'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'es2022', 'esnext', 'node16', 'nodenext'
    		lib 用来指定项目中要使用的库  可写项有很多
    		outDir 指定文件编译后文件所在的目录  
    		outFile	将全局作用域中的代码合并为一个文件,在有模块化的文件时，module属性腰围amd或者system
    		allowJs 是否对js文件进行编译，默认是false
    		checkJs 是否检查js语法，默认是false    allowJs与checkJs搭配使用（同为true或false）
    		removeComments 是否移除注释，默认是false
    		noEmit 是否生成编译后的js文件,默认是false
    		noEmitOnError 当有错误是不生产编译的js文件，默认是false
    		alwaysStrict 用来设置编译后的文件是否使用严格模式，默认为false 小提示：当有模块化的代码时，js自动进入严格模式
    		noImplicitAny 不允许隐式any类型（没有写变量类型），默认为true
    		noImplicitThis 不允许不明确类型的this,默认为false
    		strictNullChecks 是否严格检查空值，默认为false
    		strict 所有严格检查的总开关,默认是false，它控制着所有的严格检查
    	}
    */
    "include":[
        "./src/**/*"
    ],
    "exclude":[
        "./src/hello/**/*"
    ],
    "compilerOptions":{
        "target":"ES6",
        "module":"system",
        //"lib":["dom"]
        "outDir":"./dist",
        "outFile":"./dist/app.js",
         "allowJs":false,
        "checkJs":false,
        "removeComments":false,
        "noEmit":false,
        "noEmitOnError":true,
        "alwaysStrict":false,
        "noImplicitAny":false,
        "noImplicitThis":false,
        "strictNullChecks": false,
        "strict": false
    }
}
```

# 5.webpack

通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS同样也可以结合构建工具一起使用，下边以webpack为例介绍一下如何结合构建工具使用TS。

步骤：

​	1初始化项目

​		进入项目根目录，执行命令 ``` npm init -y```

​		主要作用：创建package.json文件

​	2下载工具`npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin`

​	webpack-cli:webpack的命令行工具

​	webpack-dev-server：webpack的开发服务器

​	typescript：ts编译器

​	ts-loader：ts加载器，用于在webpack中编译ts文件

​	html-webpack-plugin：webpack中html插件，用来自动创建html文件

​	clean-webpack-plugin：webpack中的清除插件，每次构建都会先清除目录

3根目录下创建webpack的配置文件webpack.config.js

```json
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    optimization:{
        minimize: false // 关闭代码压缩，可选
    },

    entry: "./src/index.ts",
    
    devtool: "inline-source-map",
    
    devServer: {
        contentBase: './dist'
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        environment: {
            arrowFunction: false // 关闭webpack的箭头函数，可选
        }
    },

    resolve: {
        extensions: [".ts", ".js"]
    },
    
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                   loader: "ts-loader"     
                },
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'TS测试'
        }),
    ]

}
```

4根目录下创建tsconfig.json，配置可以根据自己需要

```json
{
    "compilerOptions": {
        "target": "ES2015",
        "module": "ES2015",
        "strict": true
    }
}
```

5修改package.json添加如下配置

```json
{
  ...略...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack serve --open chrome.exe"
  },
  ...略...
}
```

6在src下创建ts文件，并在并命令行执行```npm run build```对代码进行编译，或者执行```npm start```来启动开发服务器