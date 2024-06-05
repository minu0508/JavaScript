const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;
let isPainting = false;

/**
 * [2 - 4]
 */
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");

function onMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    // beginPath 함수를 사용하는 이유는 이 함수를 사용하지 않으면 이전에 그렸던 선들도 덩달아서 굵기가 굵어지기 때문.
    // 그래서 각 선들의 모든 연결을 끊어주기 위해 사용한다.
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown() {
    isPainting = true;
}

function cancelPainting() {
    isPainting = false
}

function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
// colorOptions.forEach(color => color.addEventListener("click", onColorClick));
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));


/**
 * [2 - 3]
 * - 선의 굵기에 이어 input Type 중 color를 이용하여 선의 색을 바꿔주는 기능을 구현 완료하였다.
 */
// const lineWidth = document.getElementById("line-width");
// const color = document.getElementById("color");

// function onMove(event) {
//     if (isPainting) {
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         return;
//     }
//     // beginPath 함수를 사용하는 이유는 이 함수를 사용하지 않으면 이전에 그렸던 선들도 덩달아서 굵기가 굵어지기 때문.
//     // 그래서 각 선들의 모든 연결을 끊어주기 위해 사용한다.
//     ctx.beginPath();
//     ctx.moveTo(event.offsetX, event.offsetY);
// }

// function onMouseDown() {
//     isPainting = true;
// }

// function cancelPainting() {
//     isPainting = false
// }

// function onLineWidthChange(event) {
//     ctx.lineWidth = event.target.value;
// }

// function onColorChange(event) {
//     ctx.strokeStyle = event.target.value;
//     ctx.fillStyle = event.target.value;
// }

// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// lineWidth.addEventListener("change", onLineWidthChange);
// color.addEventListener("change", onColorChange);

/**
 * [2 - 2]
 * - 2-1에서는 뚝딱 거리는 듯한 선들을 그어보았다. 하지만, 해당 차시에서는 내가 클릭 버튼을 누르고 있으면 그림이 그려져서 실제 그림판과 같은 기능을 구현하였다.
 * - input Tag의 range Type을 이용해서 선의 굵기를 다르게 해주는 함수도 또한 구현 완료.
 */
// const lineWidth = document.getElementById("line-width");

// function onMove(event) {
//     if (isPainting) {
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();
//         return;
//     }
//     // beginPath 함수를 사용하는 이유는 이 함수를 사용하지 않으면 이전에 그렸던 선들도 덩달아서 굵기가 굵어지기 때문.
//     // 그래서 각 선들의 모든 연결을 끊어주기 위해 사용한다.
//     ctx.beginPath();
//     ctx.moveTo(event.offsetX, event.offsetY);
// }

// function onMouseDown() {
//     isPainting = true;
// }

// function cancelPainting() {
//     isPainting = false
// }

// function onLineWidthChange(event) {
//     ctx.lineWidth = event.target.value;
// }

// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("mouseup", cancelPainting);
// canvas.addEventListener("mouseleave", cancelPainting);
// lineWidth.addEventListener("change", onLineWidthChange);



/**
 * [2 - 1]
*/
// const colors = [
//     "#ff3838",
//     "#ffb8b8",
//     "#c56cf0",
//     "#ff9f1a",
//     "#fff200",
//     "#32ff7e",
//     "#7efff5",
//     "#18dcff",
//     "#7d5fff",
// ];

// function onClick(event) {
//     ctx.beginPath();
//     ctx.moveTo(0, 0);
//     const color = colors[Math.floor(Math.random() * colors.length) ];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }

// canvas.addEventListener("mousemove", onClick);