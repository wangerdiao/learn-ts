const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
//webpack中的所有配置信息应该写在module.exports中
module.exports = {
    //入口文件
    entry:"./src/index.ts",
    //指定打包文件所在目录
    mode: 'development', //工作模式
    output:{
        //指定打包目录
        path:path.resolve(__dirname,'dist'),
        //打包后文件的名字
        filename:"bundle.js",
        environment: {
            arrowFunction: false // 关闭webpack的箭头函数，可选
        }
    },
    //指定webpack打包时要使用的模块
    module:{
        //指定loader加载的规则
        rules:[
            {
                //test指定规则生效的文件
                test:/\.ts$/,
                //要使用的loader
                use:[
                    //配置babel
                    {
                        //指定加载器
                        loader:"babel-loader",
                        //设置babel
                        options:{
                            //设置预定义的环境
                            presets:[
                                [
                                    //指定环境插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets:{
                                            "chrome":"88",
                                            "ie":"11"
                                        },
                                        //指定corejs版本
                                        "corejs":"3",
                                        //使用corejs的方法，usage按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                //要排除的文件
                exclude:/node_modules/
            }
        ]
    },
    //配置webpack插件
    plugins:[
        new HtmlWebpackPlugin({
            //title:'这是一个自定义title',
            template:'./src/index.html'
        }), //自动生成html文件和所用的资源
        new CleanWebpackPlugin(),//插件作用：删除先前文件，在生成新的文件       
    ],
    //用来设置引用模块
    resolve:{
        extensions: ['.ts', '.js', '.json']
    }
}