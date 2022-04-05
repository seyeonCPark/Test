"use strict"

// modules
const express = require('express');
const app = express();
// const PORT = 3000;

// routing
const home = require('./src/routes/home');

// app setting
app.set('views', './src/views');
app.set('view engine', "ejs"); // html소스 해석엔진

// middleware를 등록하는 메소드 use
app.use(express.static(`${__dirname}/src/public`));

app.use(express.json()); // json data를 파싱해올 수 있도록
app.use(express.urlencoded({extended : true})); // URL에 한글,공백이 있을 경우 제대로 인식되지 않는 문제를 방지

app.use("/", home);

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