"use strict"

// file system
const fs = require("fs").promises;
// .promises를 붙여줌으로써 fs가 promise를 리턴해주게 됨.
// 수행하는 동작이 끝남과 동시에 상태를 알려주므로 비동기처리를 위해 효과적.

class UserStorage {

    // class 내의 변수에는 const등 필요x
    // #로 private변수. 은닉화, 외부에서 접근 불가함.

    // static으로 지정해야 외부에서 접근 가능.

    static #getUserInfo(data, id) {

        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);

        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {

            newUser[info] = users[info][idx];
            return newUser;
        },{});
        
        return userInfo;
    }
    
    static getUsers(...fields){ // 가변길이 파라미터를 받는 메소드.
        
        // const users = this.#users;

        const newUsers = fields.reduce((newUsers, field) => {

            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }

            return newUsers;

        },{});
        
        return newUsers;
    }

    // 입력된 id의 비밀번호, 이름 등 모든 정보를 json객체로 리턴
    static getUserInfo(id) {

        return fs.readFile("./src/databases/users.json")
        // 작업수행 성공한 경우 then, 실패한 경우 catch
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }


    static save(userInfo) {

        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);

        return {success : true};
    }
}

module.exports = UserStorage;