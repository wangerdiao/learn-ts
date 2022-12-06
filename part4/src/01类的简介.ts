//使用class关键字定义一个类
/*
    对象中包含两个部分：属性，方法
    直接定义的属性是实例属性，需要通过对象的实例去访问
    const per = new Person()
    per.name
    使用static开头的属性是静态属性(类属性),可以直接通过类去访问
    Person.age
    readonly开头地属性只能读取不能更改
*/
class Person {
    //定义实例属性
    name:string = '孙悟空' //实力属性可以读取也可以更改
    readonly sex:string = '男' 
    //在属性前使用static关键字可以定义类属性（静态属性）
    static age:number = 18
    static readonly hobby:string = '读书'
    //定义一个方法
    //如果方法以static开头，就直接通过类调用，反之用实例调用
    sayHi() {
        console.log('hi');
    }
    static sayHello() {
        console.log('hello');
    }
}
const per = new Person()
console.log(per.name); //孙悟空
// console.log(per.age); //undefined
console.log(Person.age);//18
per.name = '刘凯'
console.log(per.name);//刘凯
per.sayHi()
Person.sayHello()




