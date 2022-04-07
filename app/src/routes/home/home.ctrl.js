"use strict"

const userStorage = require("../../models/UserStorage");

const output = {

    home : (req, res) => {
        res.render('home/index');
    },
    login : (req, res) => {
        res.render('home/login');
    }
};

const process = {

    login : (req, res) => {
        
        // data를 저장하고 있는 class는 instance화 할 필요 없음. 클래스 자체로 접근(클래스안에서 정적변수로 선언된 아이에겐 그냥 접근 가능)
        const users = userStorage.getUsers("id","password"); // 가변길이 파라미터를 받는 메소드.

        // 사용자 입력데이터
        const id = req.body.id,
            password = req.body.password;

        const responseData = {};
        
        // db데이터
        if(users.id.includes(id)){

            // db데이터에 있는 사용자 아이디이면
            const idxOfId = users.id.indexOf(id);
            
            // 비밀번호도 비교
            if(users.password[idxOfId] === password){
                responseData.success = true;
                return res.json(responseData);
            }
        }
        
        responseData.success = false;
        responseData.msg = "로그인에 실패하였습니다.";
        return res.json(responseData);
    }
};

module.exports = {
    output,
    process
}