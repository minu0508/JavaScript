// ============= 4 ==============
// =                            =
// ==============================
// const 변수 = document.getElementById("login-form"); --> 이미 ID를 가져올 거라고 메서드의 이름에 명시되어 있기 때문에 아래처럼 "#"을 붙이지 않아도 된다.

// <-- [Button을 사용해서 submit 하는 방법] -->
// const loginInput = document.querySelector("#login-form input");
// const loginBtn = document.querySelector("#login-form button"); 

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     if (username == "") {
//         alert("Please write your name");
//     } else if (username.length > 15) {
//         console.log("Your name is too long");
//     } else {
//         console.log(username);
//     }
// }
// loginBtn.addEventListener("click", onLoginBtnClick);


// <-- [input:submit 사용해서 하는 방법] -->
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(savedUsername);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

loginForm.addEventListener("submit", onLoginSubmit);