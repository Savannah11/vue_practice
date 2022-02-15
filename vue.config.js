// vue cli的配置  （交给webpack）
// 修改后要重新 npm  run serve
module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src//main.js',
        },
    },
    lintOnSave: false, //关闭语法检查\
    // 开启代理服务器 方式一
    // devServer: {
    //     // 不能配置多个代理
    //     proxy: 'http://localhost:5000'
    // }
    // 开启代理服务器 方式二
    devServer: {
        proxy: {
            // 请求前缀防止访问本地服务器数据  
            '/api': {
                target: 'http://localhost:5000',
                // 访问服务器时路径前缀去除
                pathRewrite: {
                    '^/api': ''
                },
                ws: true, // 用于支持websocket
                changeOrigin: true, //用于控制请求头中的host值 
                //  为false时 服务求读取为请求url为8080  true则根据请求的服务器端口‘欺骗’

            },
            '/demo': {
                target: 'http://localhost:5001',
                // 访问服务器时路径前缀去除
                pathRewrite: {
                    '^/demo': ''
                },
                ws: true, // 用于支持websocket
                changeOrigin: true, //用于控制请求头中的host值 
                //  为false时 服务求读取为请求url为8080  true则根据请求的服务器端口‘欺骗’

            }
        }
    }
}