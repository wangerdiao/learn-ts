(function () {
    class Person {
        //ts可以在属性前添加属性的修饰符
        /*
            public修饰的属性可以在任意位置修改访问（默认）
            private私有属性，只能在类内部访问修改
                -通过在类中添加方法使得私有属性可以在外部访问
            protected 受保护地属性，只能再当前类或者子类中使用
        */
        private _name:string
        private _age:number
        constructor(name:string,age:number) {
            this._name = name
            this._age = age
        }
        // //定义获取name属性的方法
        // getName() {
        //     return this.name
        // }
        // //定义修改name属性的方法
        // setName(name:string) {
        //     this.name = name
        // }
        // getAge() {
        //     return this.age
        // }
        // //定义修改name属性的方法
        // setAge(age:number) {
        //     if(age>0) {
        //         this.age = age
        //     }
        // }

        //ts中设置getter方法的方式
        get name(){
            return this._name
        }
        set name(value:string) {
            this._name = value
        }
        get age(){
            return this.age
        }
        set age(value:number) {
            if(value>0) {
                this._age = value
            }
        }
    }
    const per = new Person('刘凯',2)
    console.log(per);
    /*
        现在的属性是在对象中设置，属性可以任意的被修改
    */

    // class C {
    //     num:number
    //     constructor(num:number) {
    //         this.num = num
    //     }
    // }
    //上下写法等同
    class C {
        constructor(public num:number){}
    }
    const c =new C(2)
})()