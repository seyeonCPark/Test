"use strict"

class UserStorage {

    // class 내의 변수에는 const등 필요x
    // #로 private변수. 은닉화, 외부에서 접근 불가함.
    static #users = {
        id : ["aaa", "bbb", "ccc"],
        password : ["111", "111", "222"],
        name : ['A','B','C']
    };

    // static으로 지정해야 외부에서 접근 가능.
    static getUsers(...fields){ // 가변길이 파라미터를 받는 메소드.
        
        const users = this.#users;

        const newUsers = fields.reduce((newUsers, field) => {

            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }

            return newUsers;

        },{});
        
        return newUsers;
    }
}

module.exports = UserStorage;