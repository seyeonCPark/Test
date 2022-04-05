"use strict"

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("#btn-login");


loginBtn.addEventListener("click", login);

// ecma 화살표 사용시 절차적으로 읽어 해당 login 함수의 존재를 모르겠다고 함
function login() {

    const req = {
        id : id.value,
        password : password.value
    };

    fetch("/login", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)
    });
}


