(function(){
    class Animal {
        name:string
        constructor(name:string) {
            this.name = name
        }
        sayHi() {
            console.log('hi');
        }
    }
    class Dog extends Animal {
        age:number
        constructor(name:string,age:number) {
            //如果在子类中写了构造函数,在子类构造函数中必须对父类构造函数进行调用
            super(name) //调用父类构造函数
            this.age = age 
        }
        sayHi(): void {
            //在类地方法中super表示当前类地父类，void表示函数返回值为空
            super.sayHi()
        }
    }
    const dog = new Dog('Liu',3)
    dog.sayHi()
})()