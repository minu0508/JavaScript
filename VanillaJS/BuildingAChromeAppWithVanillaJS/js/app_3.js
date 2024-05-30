// ============ 3.5 =============
// =                            =
// ==============================
const color = []
const h1 = document.querySelector('div.hello:first-child h1');

function handleh1Click() {
    h1.style.color = 'yellow';
}

function handleMouseEnter() {
    h1.innerText = 'The mouse is here!';
    h1.style.color = 'green';
}

function handleMouseLeave() {
    h1.innerText = 'The mouse is gone!';
    h1.style.color = 'blue';
}

function handleWindowResize() {
    h1.innerText = 'You just resized!';
    h1.style.color = 'pink'
}

function handleWMouseRightClick() {
    h1.innerText = 'That was a right click!';
    h1.style.color = 'purple';
}

function handleWindowCopy() {
    alert('Copy!');
}

function handleWindowOffline() {
    alert('SOS no WIFI');
}

function handleWindowOnline() {
    alert('ALL GOOD');
}

h1.onclick = handleh1Click;
h1.onmouseenter = handleMouseEnter;
h1.addEventListener('mouseleave', handleMouseLeave);

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
window.addEventListener('contextmenu', handleWMouseRightClick);


// ============ 3.6 =============
// =                            =
// ==============================
const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
    // console.log(h1.style.color);
    // h1.style.color = 'blue';
    // console.log(h1.style.color);

    // if (h1.style.color == 'blue') {
    //     h1.style.color = 'tomato';
    // } else {
    //     h1.style.color = 'blue';
    // }
    
    const currentColor = h1.style.color;
    let newColor;
    if (h1.style.color == 'blue') {
        newColor = 'tomato';
    } else {
        newColor = 'blue';
    }
    h1.style.color = newColor;

}

h1.addEventListener('click', handleTitleClick);


// ============ 3.7 =============
// =                            =
// ==============================
const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
    const clickedClass = 'clicked';
    if (h1.className === clickedClass) {
        h1.className = '';
    } else {
        h1.className = 'clickedClass';
    }
}

h1.addEventListener('click', handleTitleClick);