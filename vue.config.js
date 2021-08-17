// const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
// const webpack = require('webpack');

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/';
module.exports = {
    // 基本路径（相对于服务器根目录，静态资源的相对路径）,根据环境不同进行切换
    publicPath: BASE_URL,
    // 打包时，不要map文件
    productionSourceMap: false,
    // 输入文件目录
    outputDir: 'dist',
    // 是否在保存的时候检查
    lintOnSave: false,
    // 放置生成的静态资源的目录（js，css，img，font），相对于outputDir
    assetsDir: 'static',
    
    configureWebpack:{
        externals:{
            'vue':'Vue',
            'vue-router':'VueRouter',
            'vuex':'Vuex',
            'axios':'axios',
            'qs':'Qs',
        },
        plugins:[
            // gzip 压缩配置
            new CompressionPlugin({
                test: /\.js$|\.html$|\.css$/, // 匹配文件名
                threshold: 1024, // 对超过10kb的数据进行压缩
                deleteOriginalAssets: false, // 是否删除源文件
            })
        ]
    }
}
