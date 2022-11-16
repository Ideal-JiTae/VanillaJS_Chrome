const clock = document.querySelector("h2#clock");

function getClock(){
    //date object는 호출하는 당시의 현재 날짜와 시간을 가르쳐줍니다.
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);