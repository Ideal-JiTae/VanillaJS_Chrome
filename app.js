const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){

    //아래 두개는 작동결과가 같습니다.

    //classList 함수를 이용하여 구현한것
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){ //만약 classList에 contain 포함되어 있다면
        h1.classList.remove(clickedClass);
    }
    else h1.classList.add(clickedClass);

    //toggle 로 구현한것
    h1.classList.toggle("clicked");
}

h1.addEventListener("click",handleTitleClick);
// groom 깃 커밋 테스트