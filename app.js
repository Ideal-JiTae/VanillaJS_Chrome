//Dom 조작하기
// const hellos = document.getElementsByClassName("hello");
// const title = document.getElementsByTagName("h1");
// console.log(title)
// const title = document.querySelector(".hello h1");
// const title = document.querySelectorAll(".hello h1");

//이벤트 생성하기
const title = document.querySelector("div.hello:first-child h1");
// console.dir(title);
// title.style.color = "blue";

function handletitleClick(){
    title.style.color = "blue";
    title.innerText = "Mouse click";
}

function handleMouseEnter(){
    title.style.color ="black";
    title.innerText = "Mouse is here";
}

function handleMouseLeave(){
    title.style.color ="black";
    title.innerText = "Mouse is gone";
}

title.addEventListener("click",handletitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);