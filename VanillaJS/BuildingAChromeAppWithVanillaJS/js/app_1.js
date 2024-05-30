const color = []
const h1 = document.querySelector(".hello h1");

function handleMouseEnter() {
    h1.innerText = "The mouse is here!";
    h1.style.color = "green";
}

function handleMouseLeave() {
    h1.innerText = "The mouse is gone!";
    h1.style.color = "blue";
}

function handleWindowResize() {
    h1.innerText = "You just resized!";
}

function handleWMouseRightClick() {
    h1.innerText = "That was a right click!";
    h1.style.color = "purple";
}

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("contextmenu", handleWMouseRightClick);