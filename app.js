const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// hidden이라는 클래스를 상수값으로 지정합니다.
// css 에서 hidden이라는 클래스가 하는 일은 display: none; 즉 보이지 않게 하는 것입니다.
const HIDDEN_CLASSNAME ="hidden";

function onLoginSubmit(event){
	event.preventDefault();
	//"hidden"클래스를 추가시킵니다.
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	//TEXT를 받습니다.
	//greeting은 초기에 hidden 클래스를 가지고 있었으나 클래스를 삭제하여
	//사용자의 눈에 보이게 됩니다.
	greeting.innerText=`Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);