const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const BablePolyfill = require('babel-polyfill');
module.exports = {
    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'powerhousegit',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        config.entry('index').add('babel-polyfill')
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_debugger: true, // console
                            drop_console: true,
                            pure_funcs: ['console.log'] // 移除console
                        },
                    },
                    sourceMap: false,
                    parallel: true,
                }),
            )
        }
    },
    // 生产环境是否生成 sourceMap 文件
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        // extract: true,
        // 开启 CSS source maps?
        sourceMap: process.env.NODE_ENV === 'production' ? false : true,
        // css预设器配置项
        // loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        // modules: false
    },
    // webpack-dev-server 相关配置
    devServer: {
        port: 4318, // 端口号
        // host: "0.0.0.0",
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000',// 配置跨域处理,只有一个代理
        proxy: {
            "/api": {
                target: 'http://118.31.42.0:8080',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },

};