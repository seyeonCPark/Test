"use strict"

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("#btn-login");


loginBtn.addEventListener("click", login);

// ecma 화살표 사용시 절차적으로 읽어 해당 login 함수의 존재를 모르겠다고 함
function login() {

    console.log(id.value);
    const req = {
        id : id.value,
        password : password.value
    };
}