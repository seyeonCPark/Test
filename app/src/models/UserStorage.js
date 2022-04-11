"use strict"

const db = require("../config/db");
db.query("USE LOGIN_LECTURE");

class UserStorage {
    
    // 입력된 id의 비밀번호, 이름 등 모든 정보를 json객체로 리턴
    static getUserInfo(id) {
        
        return new Promise((resolve, reject) => {

            const queryString = "SELECT id, name, password FROM users WHERE id = ?";
            db.query(queryString, [id], (err, data) => {

                if(err) reject(`${err}`);
                
                resolve(data[0]);
            })
        });
    }

    static save(userInfo) {
        return new Promise((resolve, reject) => {

            const queryString = "INSERT INTO users (id, name, password) VALUES (?, ?, ?)";
            db.query(queryString, [userInfo.id, userInfo.name, userInfo.password], (err) => {

                if(err) reject(`${err}`);

                resolve({success : true});
            });
        });
    }
}

module.exports = UserStorage;