//表示声明变量a,同时指定类型为number
let a:number
//a的类型设置为了number，在以后的过程中a的值只能是数字
// a=10  正确的
// a='hi' 错误的
let b:string
b='hi'
//声明完变量直接赋值
let c:boolean = true
c = false   
//如果变量的声明和赋值时同时进行的，ts可以自动对变量进行类型检测
let d = false
//给函数的参数加上类型,返回值加上类型
function sum (a:number,b:number):number {
    return a+b
}
let result = sum(123,1)