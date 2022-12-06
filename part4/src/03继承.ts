(function() {
    //定义一个父类
    class Animal {
        name:string
        age:number
        constructor(name:string,age:number) {
            this.name = name
            this.age = age
        }
        sayHi() {
            console.log('动物在叫~');
        }
    }
    //定义一个狗的子类,继承animal类
    /*
        class Dog  extends Animal Dog为子类，animal为父类
        使用extends后Dog继承父类所有的属性和方法
        通过继承可以将多个类中共有的代码写在一个父类中
        如果希望在子类中添加父类没有的属性和方法，可以直接加
        如果在子类中添加了和父类相同的方法，在子类中会覆盖父类的方法（称为方法重写）

    */
    class Dog  extends Animal{
        run() {  //增加一个方法
            console.log('dog在跑');
        }
        sayHi() { //修改父类的方法（仅限制在子类中）
            console.log('汪汪汪~');
        }
    }
    
    const dog = new Dog('刘凯',12)
    console.log(dog);
    dog.sayHi()
})()