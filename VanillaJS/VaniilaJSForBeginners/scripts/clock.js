const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const min = date.getMinutes();
    const hours = date.getHours();
    const sec = date.getSeconds();

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${
        min < 10 ? `0${min}` : `${min
        }`}:${sec < 10 ? `0${sec}` : `${sec}`}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();