"use strict"

const express = require('express');

const router = express.Router(); // front controller
const ctrl = require('./home.ctrl'); // controller

// 요청한 경로로 이동시켜주는 라우팅 기능
router.get('/', ctrl.home);

router.get('/login', ctrl.login);

module.exports = router;