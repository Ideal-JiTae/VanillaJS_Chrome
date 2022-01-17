//객체를 이용한 간단한 계산기 만들기

const calculator={
    add : function(a,b){
        console.log(a+b);
    },
    min : function(a,b){
        console.log(a-b);
    },
    mul:function(a,b){
        console.log(a*b);
    },
    div : function(a,b){
        console.log(a/b);
    },
    squ : function(a,b){
        console.log(a**b);
    },
};

calculator.add(6, 2);
calculator.min(6, 2);
calculator.mul(6, 2);
calculator.div(6, 2);
calculator.squ(6, 2);
