"use strict"

const users = {
    id : ["aaa", "bbb", "ccc"],
    password : ["111", "111", "222"]
};

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

        // 사용자 입력데이터
        const id = req.body.id,
            password = req.body.password
        
        // db데이터
        if(users.id.includes(id)){

            // db데이터에 있는 사용자 아이디이면
            const idxOfId = users.id.indexOf(id);
            
            // 비밀번호도 비교
            if(users.password[idxOfId] === password){

                return res.json({
                    success : true
                });
            }
        }

        return res.json({
            success : false,
            message : "로그인에 실패하였습니다."
        });
    }
};

module.exports = {
    output,
    process
}