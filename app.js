//비효율적
const playerName = "jitae";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// 위에 것을 배열로 정리하면...? -> 이래도 비효율적 각각의 원소들이 무엇을 의미하는지 안 알려주고 있으니까!!
const player = ["jitae",121212,false,"little bit"];

//object로 만들자!!
const player1 = {

    name:"jitae",
    points:10,
    fat : true,
};

console.log(player1);
console.log(player1.name)

//접근해서 바꿀 수 있다는 거!!
//여기서 의문 const로 된거는 바꿀수 없다며!!
//constant 안에 무언가를 업데이트 할 때는 아무 문제가 없다!!
player1.name="nico";
console.log(player1.name)

//객체에 원소 추가하기
player1.lastname = "potato";
console.log(player1)

//원소 = property
//이렇게도 쓸수 있어요...!
player1.points = player1.points + 15;
console.log(player1.points);