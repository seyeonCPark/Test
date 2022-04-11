"use strict"

// modules
const express = require('express');
const app = express();

// 환경변수 설정
const dotenv  = require("dotenv");
dotenv.config();

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