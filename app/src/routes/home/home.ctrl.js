"use strict"

const User = require("../../models/User");
const userStorage = require("../../models/UserStorage");

const output = {

    home : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },
    register : (req, res) => {

        res.render("home/register")
    }
};

const process = {

    login : (req, res) => {
        
        const body = req.body;

        // data를 저장하고 있는 class는 instance화 할 필요 없음. 클래스 자체로 접근(클래스안에서 정적변수로 선언된 아이에겐 그냥 접근 가능)
        const user = new User(body);
        const response = user.login();
        return res.json(response);
    }
};

module.exports = {
    output,
    process
}