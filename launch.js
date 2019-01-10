var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
var rp = require('request-promise');
var bodyParser = require('body-parser');
var proxy = require('http-proxy-middleware');
var history = require('connect-history-api-fallback');
// var multer = require('multer'); // 这个最好不要作为全局中间件，应该是某一个特定的路由下的中间件
var cookieParser = require('cookie-parser'); // 全局cookie设置
var proxyTable = {
    target: 'http://www.pigcome.com:8082/',
    pathRewrite: {
        '^/api': ''
    },
    changeOrigin: true
};

var access = {
    appid: 'wxe81288f5ea1062fa',
    secret: '7ea2af72f3d88346bc12c17d7bd6f81d',
    token: ''
}

var currentProxy = proxy(proxyTable);
var app = express();
app.use('/test', proxy({
    target: 'http://www.pigcome.com:81',
    pathRewrite: {
        '^/test': ''
    },
    changeOrigin: true
}));

// app.use(express.static(path.join(__dirname,'public')))

// 全局cookie中间件
// app.use(cookieParser(config.cookieSign));

app.use(history());

//body解析中间件
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(cookieParser());
// 设置静态文件路径
app.use(serveStatic(path.resolve('./dist'), { 'index': ['index.html', 'index.htm'] }));


app.use('/api/**', currentProxy);

// 获取token
app.use('/getToken', function(req, res, next) {
    console.log(req.query);
    rp.get(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${access.appid}&secret=${access.secret}&code=${req.query.code}&grant_type=authorization_code`).then(d => {
        console.log('token====>', d);
        res.send(d);
        next();
    });
});

app.listen(8085, '0.0.0.0', function() {
    console.log('启动成功！');
});