//定义记分牌的类
class ScorePanel {
    //score level记录分数和等级
    score = 0
    level = 1
    //scoreEle levelEle 记录所在的元素
    scoreEle:HTMLElement
    levelEle:HTMLElement
    //设置一个变量限制等级
    maxLevel:number
    //设置变量表示多少分时升级
    upScore:number
    constructor(maxLevel:number = 10,upScore:number = 10) {
        this.maxLevel = maxLevel
        this.upScore = upScore
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
    }
    //设置加分的方法
    addScore(){
        //分数自增
        this.score ++
        this.scoreEle.innerHTML = this.score+""
        //判断分数的多少
        if(this.score% this.upScore ===0) {
            this.levelUp()
        }
    }
    //设置提升等的方法
    levelUp() {
        if(this.level < this.maxLevel) {
        this.levelEle.innerHTML = ++ this.level + ''
        }
    }
}
//测试代码
const score = new ScorePanel()
// for(let i = 0; i<200 ; i++) {
//     score.addScore()
// }
export default ScorePanel;