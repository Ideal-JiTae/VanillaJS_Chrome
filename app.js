//Dom 조작하기
// const hellos = document.getElementsByClassName("hello");
// const title = document.getElementsByTagName("h1");
// console.log(title)
// const title = document.querySelector(".hello h1");
// const title = document.querySelectorAll(".hello h1");

//이벤트 생성하기
const h1 = document.querySelector("div.hello:first-child h1");
// console.dir(title);
// title.style.color = "blue";

function handletitleClick(){
    h1.style.color = "blue";
    h1.innerText = "Mouse click";
}

function handleMouseEnter(){
    h1.style.color ="black";
    h1.innerText = "Mouse is here";
}

function handleMouseLeave(){
    h1.style.color ="black";
    h1.innerText = "Mouse is gone";
}

h1.addEventListener("click",handletitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}

window.addEventListener("resize",handleWindowResize);

function handleWindowCopy(){
    alert("copier!");
}

window.addEventListener("copy",handleWindowCopy);

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOOD");
}

window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);