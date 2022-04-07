"use strict"

const UserStorage = require('./UserStorage');

class User {

    constructor(body){
        this.body = body;
    }

    // async함수 안에서만 await를 사용가능.
    // async await 함수는 자체적으로 promise를 리턴.
    // 해당 함수를 콜하는 home.ctrl컨트롤러에 가서도 await을 시켜야 함.
    async login() {
        
        const client = this.body;

        // promise의 상태가 pending 중일 때 실행되지 않도록 await를 사용
        const {id, password} = await UserStorage.getUserInfo(client.id);

        // if(id){
        //     if(id === client.id && password == client.password){
        //         return {success : true};
        //     } else {
        //         return {success : false, msg : "비밀번호가 틀렸습니다."};
        //     }
        // }
        // return {success : false, msg : "존재하지 않는 아이디입니다."};
    }

    register() {

        const client = this.body;
        const response = UserStorage.save(client);
        return response;

    }
}

module.exports = User;