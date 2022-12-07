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
        //修改x是在修改水平坐标，蛇在左右移动
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            //如果发生掉头，就继续向左走
            if(value>this.X) {
                value = this.X - 10
            }else {
                value = this.X + 10
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkHeadBody()
    }
    set Y(value:number) {
        if(this.Y === value) {
            return 
        }
        if(value<0 || value>290) {
            throw new Error('蛇撞墙了')
        }
         //修改Y是在修改水平坐标，蛇在上下移动
         if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            //如果发生掉头，就继续向下走
            if(value>this.Y) {
                value = this.Y - 10
            }else {
                value = this.Y + 10
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkHeadBody()
    }
    //蛇增加身体的方法
    addBody() {
        //向element中添加div
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }
    //蛇身体移动的方法
    moveBody() {
         /**
          * 将蛇后边身体设置到前边身体的位置
          */
         for(let i = this.bodies.length-1;i>0;i--) {
            //获取前边身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            //将前面身体的值赋值给后一个身体
            (this.bodies[i] as HTMLElement).style.left = X +'px';
            (this.bodies[i] as HTMLElement).style.top = Y +'px';
         }
    }
    //检查蛇头与身体是否相撞
    checkHeadBody() {
        //获取所有身体，检查是否和蛇头发生重叠
        for(let i=1;i<this.bodies.length;i++) {
            let bd = this.bodies[i] as HTMLElement
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error('蛇撞到了自己')
            }
        }
    }
}
export default Snake