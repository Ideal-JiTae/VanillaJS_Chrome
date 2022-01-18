const age = parseInt(prompt("How old are you?"));

//문자가 아닌거 입력시 true가 되므로 Please write a number 출력
//만약 18보다 작은 숫자를 입력했다면 you are yoo young... 출력
//이 외에 다른 숫자가 입력되었다면 you can drink :D 출력
//if(isNaN(age)){
//    console.log("Please write a number");
//}else if(age <18){
//    console.log("you are yoo young...");
//}else{
//    console.log("you can drink :D");
//}

//위와 내용이 같으나 아래 것만 해석
//else if(age >= 18 && age <= 50)
//18이상이고 50이하이면 you can drink 실행
if(isNaN(age)||age<0){
    console.log("Please write a real positive number");
}else if(age <18){
    console.log("you are too young...");
}else if(age >= 18 && age <= 50){
    console.log("you can drink");
}else if(age > 50 && age <= 80){
    console.log("you should exercise...");
}else {
    console.log("you are too...old...sorry :<");
}

true || true === true
false || true === true
true || false === true
false || false === false

true && true === true
false && true === false
true && false === false
false && false === false