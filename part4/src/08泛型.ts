// function fn(a:number) : number {
//     return a
// }
/**
 * 在定义函数或者是类时，如果遇到类型不明确就可以使用泛型
 */
function fn<K>(a:K):K {
    return a
}
//可以直接调用具有泛型的函数
fn(10) //不指定泛型，ts可以对类型进行推断
fn<string>('hi') //指定泛型
//泛型可以同时指定多个
function fn2<T,K>(a:T,b:K) {
    console.log(b);
    return a
}
fn2<number,string>(123,'hi')

interface Inter {
    length:number
}
//T extends Inter泛型T必须是Inter实现类（子类）
function fn3<T extends Inter>(a:T):number {
    return a.length
}
class MyClass<T> {
    name:T
    constructor(name:T) {
        this.name = name
    }
}
const mc = new MyClass<string>('刘凯')