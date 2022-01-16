function plus(a,b){
    console.log(a+b);
}
plus(8,60);

function divide(a,b){
    console.log(a/b);
}
divide(98,20)

//아래 출력시 안뜨는 것을 볼수 있음 why? -> 인자는 함수 안에서만 존재하기 때문이지!!
//console.log(a,b);

//player object
const player = {
    name: "jitae",
    sayHello:function(ohterPersonsName){
        console.log("hello " + ohterPersonsName +" Nice to meet you");
    },
};

console.log(player.name);
player.sayHello("Nico");
player.sayHello("lynn");