
import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'
//游戏控制器，控制其他的所有类
class GameControl { 
    //定义三个属性
    snake:Snake 
    food:Food
    scorePanel:ScorePanel
    //存储蛇的移动方向（按键的移动方向）
    direction:string = ''
    //创建属性记录游戏是否结束
    isLive = true
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
    }
    //游戏初始化的方法，调用后游戏就开始了
    init() {
        //绑定键盘按下事件
        document.addEventListener('keydown',this.keydownHandler.bind(this)) //绑定this指向为GameControl
        //调用run 方法
        this.run()
    }
    //创建键盘按下的响应函数
    keydownHandler(event:KeyboardEvent) {
        // console.log(event.key);
        // ArrowUp  上
        // ArrowDown 下
        // ArrowLeft 左
        // ArrowRight 右
        //修改direction时需要检查用户是否按了正确的方向键
        this.direction = event.key
    }
    //创建控制蛇移动的方法
    run() {
        /**
         * 根据方向来使蛇的位置改变
         * 向上 top 减少
         * 向下 top 增加
         * 向左 left 减少
         * 向右 left 增加
         */
        //获取蛇现在的坐标
        let X = this.snake.X
        let Y = this.snake.Y 
        //根据按键方向修改蛇的X,Y
        switch(this.direction) {
            case "ArrowUp":
                //向上 top 减少
                Y -= 10
                break
            case "ArrowDown":
                //向下 top 增加
                Y += 10
                break
            case "ArrowLeft":
                // 向左 left 减少
                X -= 10
                break
            case "ArrowRight":
                //向右 left 增加
                X += 10
                break
        }
        //修改蛇的坐标
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (error:any) {
            alert(error.message+'GAME OVER！')
            this.isLive = false
        }
        this.check(X,Y)
        this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
    }
    //检查蛇是否吃到食物的方法
    check(X:number,Y:number) {
        if(X===this.food.X && Y===this.food.Y) {
            this.snake.addBody()
            this.food.change()
            this.scorePanel.addScore()
        }
    }
}

export default GameControl