"use strict"

// file system
const fs = require("fs").promises;
// .promises를 붙여줌으로써 fs가 promise를 리턴해주게 됨.
// 수행하는 동작이 끝남과 동시에 상태를 알려주므로 비동기처리를 위해 효과적.

class UserStorage {

    // class 내의 변수에는 const등 필요x
    // #로 private변수. 은닉화, 외부에서 접근 불가함.
    // static으로 지정해야 외부에서 접근 가능.

    // 해당 id사용자의 info 반환
    static #getUserInfo(data, id) {

        const users = JSON.parse(data); // buffer로 읽어왔기 때문에 json으로 파싱
        const idx = users.id.indexOf(id);

        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {

            newUser[info] = users[info][idx];
            return newUser;
        },{});
        
        return userInfo;
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

    // 모든 사용자의 info 반환
    static #getUsers(data, isAll, fields) {

        // data는 buffer 데이터이기 때문에 파싱이 필요
        const users = JSON.parse(data);

        if(isAll) return users;

        const newUsers = fields.reduce((newUsers, field) => {

            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }

            return newUsers;

        },{});
        
        return newUsers;
    }

    static getUsers(isAll, ...fields){ // 가변길이 파라미터를 받는 메소드.
        
        return fs.readFile("./src/databases/users.json")
        // 작업수행 성공한 경우 then, 실패한 경우 catch 를 탐.
            .then((data) => {
                return this.#getUsers(data, isAll, fields);
            })
            .catch(console.error);
    }

    static async save(userInfo) {

        const users = await this.getUsers(true); // data 다 읽을 때까지 기다려야 하므로 await
        
        if(users.id.includes(userInfo.id)){
            throw "이미 등록된 사용자 아이디입니다.";
        }

        // users.id.push(userInfo.id);
        // users.name.push(userInfo.name);
        // users.password.push(userInfo.password);

        for(var key in users){
            users[key].push(userInfo[key]);
        }

        // file system 경로는 app.js가 있는 최상단 루트가 됨. 수정할 파일의 경로, 저장시킬 데이타
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success : true}
    }
}

module.exports = UserStorage;