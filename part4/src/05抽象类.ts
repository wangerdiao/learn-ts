(function(){
    /*
        以abstract开头地类为抽象类，它不能用来创建对象 即不能new 抽象类
        抽象类就是专门用来继承地类
        抽象类中可以添加抽象方法
    */
    abstract class Animal {
        name:string
        constructor(name:string) {
            this.name = name
        }
        //定义一个抽象方法
        //抽象方法适用abstract开头，没有方法体
        //抽象方法只能定义在抽象类中,子类必须对抽象方法进行重写
        abstract sayHi():void
    }
    class Dog extends Animal {
        sayHi(): void {
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('Liu')
    dog.sayHi()
})()