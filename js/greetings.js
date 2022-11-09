const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
	//사용자가 하는 일을 멈춥니다 -> 값을 제공하면 새로고침이 되는데 페이지새로고침을 막아준다는 뜻
	event.preventDefault();
	//Form을 다시 숨겨줍니다.
	loginForm.classList.add(HIDDEN_CLASSNAME);
	//username 변수에 loginInput에 들어온 value값을 저장합니다.
	const username = loginInput.value;
	//로컬 스토리지에 key와 함께 username에 들어온(loginInput.value)를 저장합니다.
	localStorage.setItem(USERNAME_KEY,username);
	//paintGreetings 함수에 username 인자를 넣어 값을 호출합니다.
	paintGreetings(username);
}

function paintGreetings(username){
	greeting.innerText=`Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
	//Show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit",onLoginSubmit);
}else{
	//Show the greetings
	paintGreetings(savedUsername);
}

//savedUsername은 localStorage에 저장되어 있는 값에서 나옵니다.
//username은 input에 들어온 값(loginInput.value)을 저장합니다.