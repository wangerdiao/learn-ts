class Snake {
    //表示蛇头的元素
    head:HTMLElement
    //蛇的身体，包括蛇头
    bodies:HTMLCollection
    //获取蛇的容器
    element:HTMLElement
    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake>div') as HTMLElement
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
    }
    //获取蛇头的x坐标
    get X() {
        return this.head.offsetLeft
    }
    //获取蛇头的y坐标
    get Y() {
        return this.head.offsetTop
    }
    //设置蛇头坐标
    set X(value:number) {
        if(this.X === value) {
            return 
        }
        if(value<0 || value>290) {
            throw new Error('蛇撞墙了')
        }
        this.head.style.left = value + 'px'
    }
    set Y(value:number) {
        if(this.Y === value) {
            return 
        }
        if(value<0 || value>290) {
            throw new Error('蛇撞墙了')
        }
        this.head.style.top = value + 'px'
    }
    //蛇增加身体的方法
    addBody() {
        //向element中添加div
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }
}
export default Snake