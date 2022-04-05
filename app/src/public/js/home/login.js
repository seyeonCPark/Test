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
    })
        .then((res) => res.json()) // server의 응답데이터는 promise 형태이고, 이를 받기 위해 then(), 읽기 위해 json() 메소드를 사용한다 !
        // .then(console.log);
        .then((res) => {
            
            if(res.success){
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러가 발생했습니다.");
        });
}


