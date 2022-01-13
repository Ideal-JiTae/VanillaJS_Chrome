//함수가 없더라면...
console.log("Hello my name is Nico");
console.log("Hello my name is 철수");
console.log("Hello my name is 짱아");
console.log("Hello my name is 짱구");
console.log("Hello my name is 유리");
console.log("Hello my name is 훈이");

//공통된 부분...Hello my name is
//다른 부분... 뒤에 오는 이름들...

//개선 시키기 위해서는 함수 사용!
function sayHello(){
    console.log("Hello my name is ");
}

//함수 3번 실행
sayHello();
sayHello();
sayHello();

//인수(argument) 넣기
//nameOfPerson은 인자값을 나타냅니다.
//첫번째로 보내진 데이터가 nameOfPerson으로 들어가게됨!!
function sayHello2(nameOfPerson){
    console.log(nameOfPerson);
}

sayHello2("nico");
sayHello2("dal");
sayHello2("lynn");

function meetPerson(person1,person2){
    console.log(`${person1} meet ${person2}`)
}

meetPerson("철수","영희");
meetPerson("짱아","짱구");
meetPerson("훈이","유리");

function sayHello3(nameOfPerson,age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello3("nico",10);
sayHello3("dal",23);
sayHello3("lynn",21);
