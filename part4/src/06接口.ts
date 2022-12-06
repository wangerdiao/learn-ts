(function () {
    //描述一个对象的类型
    type myType = {
        name:string
        age:number
    }
    /*
        接口用来定义一个类的结构
        定义一个类中应该包含哪些属性和方法
        同时接口也可以当成类型声明去使用
        接口可以在定义类的时候限制类的结构
            接口中所有属性都不能有实际的值
            接口只定义对象的结构，不考虑实际值
            在接口中所有的方法都是抽象方法
    */
   interface myInterface {
    name:string
    age:number
   }
   interface myInterface {
    gender:string
   }
   interface myInter {
    name:string
    sayHello():void
   }
//    const obj:myType = {
//     name:'刘凯'
//     age:2
//    }
    const obj:myInterface = {
        name:'刘凯',
        age:2,
        gender:'男'
    }
    /*
        定义类时，可以使类实现一个接口
            实现接口就是满足接口的要求
    */
   class myClass implements myInter {
        name:string
        constructor(name:string) {
            this.name = name
        }
        sayHello(): void {
            console.log('hi');
        }
   }
})()