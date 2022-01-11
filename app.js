console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

//하단 console.log의 계산 값을 바꾸고 싶으면 여기를 조정해주면 됨
const a = 5;
const b = 2;

//위의 console.log의 내용과 같음
console.log(a + b);
console.log(a * b);
console.log(a / b);

const myName = "JiTae";
console.log("hello "+ myName);

//하단은 const와 let의 차이 점을 알기 위해 작성된 코드 입니다.

//myName = "TaeJi"; //error -> const 즉 상수 인데 값을 바꾸면 안되는게 강제로 바꾸었기 때문에 오류가 나는것입니다.

let c = 5;
let d = 2;

//위의 console.log의 내용과 같음
console.log(c + d);
console.log(c * d);
console.log(c / d);

//let으로 선언된 변수라서 바꿀 수 있다는 것을 기억해야함
c = 10;
d = 5;

console.log(c + d);
console.log(c * d);
console.log(c / d);

let yourName = "JiTae";
console.log("hello "+ yourName);

yourName = "TaeJi";
console.log("hello "+ yourName);    //값 바뀌는 거 확인 필요!!