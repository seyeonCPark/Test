"use strict"

// modules
const express = require('express');
const app = express();
const PORT = 3000;

// routing
const home = require('./routes/home');

// app setting
app.set('views', './views');
app.set('view engine', "ejs"); // html소스 해석엔진

// 라우팅
app.use("/", home); // middleware를 등록하는 메소드 use

module.exports = app;
/* 
const http = require("http");

const hostName = '127.0.0.1';
const port = 3000;
const app = http.createServer((req, res) => {

    console.log(req.url); // root이후의 url을 파싱해올 수 있다 ! 이를 이용하여 라우팅

    var url = req.url;

    if(url === '/login'){ // 수많은 라우팅을 위한 분기문으로 코드 지저분해짐. express는 get으로 url가져올 수 있음.
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.end('로그인 하세요 !');
    }
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello, World!');
});

app.listen(port, () => {

    console.log(`Server running at http://${hostName}:${port}/`);
});

*/