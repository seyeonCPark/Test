"use strict"

const UserStorage = require('./UserStorage');

class User {

    constructor(body){
        this.body = body;
    }

    async login() {
        
        const client = this.body;

        // promise의 상태가 pending 중일 때 실행되지 않도록 await를 사용
        try {
            
            const user = await UserStorage.getUserInfo(client.id);

            if(user){

                if(user.id){
                    if(user.id === client.id && user.password == client.password){
                        return {success : true};
                    } else {
                        return {success : false, msg : "비밀번호가 틀렸습니다."};
                    }
                }
                return {success : false, msg : "존재하지 않는 아이디입니다."};
            }

        } catch (err){
            return {success : false, msg : err};
        }
    }

    async register() {

        const client = this.body;
        
        try{
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return {success : false, msg : err}
        }
    }
}

module.exports = User;