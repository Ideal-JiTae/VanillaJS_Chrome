//#2.11에서 했던 계산기 만든 것을 console.log를 alert로만 바꾸는 것
//console.log / alert 사용의 문제점
//alert? : 메시지를 경고문으로 보여주는 형태

// const calculator={
//     add : function(a,b){
//         alert(a+b);
//     },
//     min : function(a,b){
//         alert(a-b);
//     },
//     mul:function(a,b){
//         alert(a*b);
//     },
//     div : function(a,b){
//         alert(a/b);
//     },
//     squ : function(a,b){
//         alert(a**b);
//     },
// };

//  calculator.add(6, 2);
//  calculator.min(6, 2);
//  calculator.mul(6, 2);
//  calculator.div(6, 2);
//  calculator.squ(6, 2);

//console.log(calculator.plus(2,3));
//위의 값은 undefined가 나오게 됨...!
//함수는 사용자에게 무언가를 해주는 것이야!!

//function calculateKrAge(agOfForeigner){
//    agOfForeigner+2;
//}
//우리는 코드로 결과값을 받았으면 좋겠어!!

//const age = 96;
//const krAge = calculateKrAge(age);
//console.log(krAge);
//여기까지만 놓고 보면 정의 되지 않았대요!!
//why? 우리가 함수에 return 반환값을 설정해주지 않았기 때문이지요!!

//function calculateKrAge(agOfForeigner){
//    return agOfForeigner+2;
//}
//
//const age = 96;
//const krAge = calculateKrAge(age);
//여기서 age는 96으로 대체되고 ageOfForeigner값에 age값인 96으로 대체됨
//이후 함수 반환하는데 ageOfForeigner에 96이 들어가고 반환한 98이라는 값이 krAge에 들어가게 되는 것임
//console.log(krAge);

//함수가 아래와 같이 작성되었다면...?
//function calculateKrAge(agOfForeigner){
//    agOfForeigner+2;
//    return "hello";
//}
//얘는 숫자 대신 hello를 반환할거야!!

//다시 작성하는 계산기 프로그램
//내부에서 console.log를 작성하지 않을거야!!
const calculator={
    add : function(a,b){
        return a+b;
    },
    min : function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    },
    div : function(a,b){
        return a/b;
    },
    squ : function(a,b){
        return a**b;
    },
};

const plusResult = calculator.add(2,3);
const minusResult = calculator.min(plusResult,10);
const timesResult = calculator.mul(10,minusResult);
const divideResult = calculator.mul(timesResult,plusResult);
const powerResult = calculator.squ(divideResult,minusResult);

console.log(plusResult,minusResult,timesResult,divideResult,powerResult);