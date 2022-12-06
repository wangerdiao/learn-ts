class Dog {
    //实现定义好需要的属性
    name:string
    age:number
    //构造函数在对象创建时候调用
    constructor(name:string,age:number) {
        //在实例方法中,this表示当前的实例，使用定义好的属性
        this.name = name
        this.age = age
    }
    tark() {
        console.log('www');
        //在方法中通过this来表示当前调用方法的对象
        console.log(this);
    }
}
const dog = new Dog('刘凯',3)  //new Dog()实际上就是在调用构造函数constructor
console.log(dog);
const dog2 = new Dog('小黑',2)
console.log(dog2);
 