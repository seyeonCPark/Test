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

    // login.js로부터의 req
    login : async (req, res) => {
        
        const body = req.body;

        const user = new User(body);
        const response = await user.login();
        
        return res.json(response);
    },
    
    // register.js로부터의 req
    register : async (req, res) => {

        const body = req.body;

        const user = new User(body);
        const response = await user.register();

        return res.json(response);
    }
};

module.exports = {
    output,
    process
}