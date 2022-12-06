//字面量类型声明
let a1:10;
//使用 | 来连接多个类型
let a2:'hello' | 'world'
a2 = 'hello'
a2 = 'world'
let a3: boolean |string
a3=true
a3='love'
//any表示任意类型,一个变量类型设置any相当于对该变量关闭了ts类型检测
let a4:any //显示any
//声明变量不指定类型，ts解析器自动判断变量类型为any
let a5 //隐式any
a5='1'
a5=1
a5=true
let a6:string
a6 = a5 //a5类型是any，它可以赋值给任意变量
//unknown表示未知类型的值
let a7:unknown
a7=true
a7=1
a7='hello'
//unknown 实际上就是一个类型安全的any
//unknown类型的变量，不能直接赋值给其他变量
// a6 =a7  错误的
if(typeof a7==='string') a6 = a7
a6 = a7 as string //类型断言，告诉编译器a7就是字符串
a6 = <string> a7  //上下写法等同
//void用来表示为空，以函数为例表示没有返回值
function fn():void {}
//never表示永远不会返回结果
function fn2():never {
    throw new Error("报错了")
}