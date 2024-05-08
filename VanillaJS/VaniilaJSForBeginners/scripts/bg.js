const body = document.querySelector("body");

const IMG_NUMBER = 3;



function paintImage(imgNumber) {
    const image = new Image();
    image.src = `../styles/Images/${imgNumber + 1}.jpg`
    image.classList.add('bgImage');
    body.prepend(image);
}

function getRandom() {
    const number = Math.floor(Math.random() * 3);
    return number;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();