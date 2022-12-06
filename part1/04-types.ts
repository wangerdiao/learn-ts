//object表示一个js对象
let b1 :object
//{}用来指定对象中包含哪些属性，在属性码后面加上？表示属性是可选的
let b2:{name:string,age?:number} 
b2 = {name:'刘凯'}
//[propName:string]:any表示任意类型的属性
let b3:{name:string,[propName:string]:any}
b3 = {name:'刘凯',age:18}
/*
设置函数结构的类型声明：
    语法：(形参：类型，形参：类型.....)=>返回值类型
*/
let b4:(a:number,b:number) => number
b4 = function (n1,n2) {
    return n1+n2
}
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

//元组：固定长度的数组 语法：[类型,类型,类型]
let b8:[string,string]
b8=['1','a']

//枚举
enum Gender{
    Male,
    Female
}
let b11 :{name:string,gender:Gender}
b11={name:'刘凯',gender:Gender.Male}

//类型得别名
type myType = 1|2|3|4
let b12:1|2|3|4;
let b13:1|2|3|4;
let b14:myType