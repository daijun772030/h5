var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');
var proxy = require('http-proxy-middleware');
var history = require('connect-history-api-fallback');
// var multer = require('multer'); // 这个最好不要作为全局中间件，应该是某一个特定的路由下的中间件
<<<<<<< HEAD
// var cookieParser = require('cookie-parser'); // 全局cookie设置
=======
var cookieParser = require('cookie-parser'); // 全局cookie设置
>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
var proxyTable = {
    target: 'http://www.pigcome.com:8082/',
    pathRewrite: {
        '^/api': ''
    },
<<<<<<< HEAD
    changeOrigin: true,
    xfwd: true
=======
    changeOrigin: true
>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
};

var currentProxy = proxy(proxyTable);
var app = express();
<<<<<<< HEAD
=======

// app.use(express.static(path.join(__dirname,'public')))

>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
// 全局cookie中间件
// app.use(cookieParser(config.cookieSign));

app.use(history());

<<<<<<< HEAD
// 设置静态文件路径
app.use(serveStatic(path.resolve('dist'), { 'index': ['index.html', 'index.htm'] }));

//body解析中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
=======
//body解析中间件
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(cookieParser());
// 设置静态文件路径
app.use(serveStatic(path.resolve('dist'), { 'index': ['index.html', 'index.htm'] }));


>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
app.use('/api/**', currentProxy);

app.listen(8085, '0.0.0.0', function() {
    console.log('启动成功！');
});