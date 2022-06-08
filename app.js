const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){

    //변수의 사용
    const currentColor = h1.style.color;
    let newColor;

    if(currentColor==="blue"){
        newColor="tomato";
    }
    else{
        newColor ="blue";
    }

    h1.style.color = newColor;

    //기본 방식
    // if(h1.style.color==="blue"){
    //     h1.style.color="tomato";
    // }
    // else{
    //     h1.style.color ="blue";
    // }
}

h1.addEventListener("click",handleTitleClick);