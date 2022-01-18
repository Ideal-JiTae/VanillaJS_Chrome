const age = parseInt(prompt("How old are you?"));

//만약 true라면 please write a number가 실행
//만약 false라면 your age = age가 출력됨
if(isNaN(age)){
    console.log("Please write a number");
}else{
    console.log("your age = "+ age);
}