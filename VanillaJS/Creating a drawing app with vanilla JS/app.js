const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

/**
 * [1 - 2 / 속이 채워진 정사각형과 속이 빈 정사각형 그리기]
 * - fillRect   : 속이 채워진 정사각형
 * - rect       : 속이 빈 정사각형
 * 
 * - fillRect는 이미 함수명 내에 fill이 들어있어서 해당 함수만으로 그려지지만,
 *   일반적인 rect는 무조건 fill 함수를 실행해줘야만 그려진다.   
 */
// ctx.fillRect(50, 50, 100, 200);
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();

// ctx.beginPath();

// ctx.fillStyle = "red";
// ctx.rect(350, 350, 100, 100);
// ctx.rect(450, 450, 100, 100);
// setTimeout(() => {ctx.fill();}, 5000);

/**
 * [1 - 3 / 연필처럼 선 긋고 그리기]
 * - moveTo:    안의 인자 값에 해당하는 좌표로 이동
 * - lineTo:    현재 좌표에서 인자 값에 해당하는 좌표로 선을 그으면서 이동.
 * 
 * - [속이 빈 사각형]에 해당하는 코드들은 차례대로 선을 긋는 코드이고, stroke로 끝냈기 때문에 속이 비어있는 정사각형을 선으로 그어서 그린 것이다.
 *   [속이 빈 정사각형 채우기]는 다른 코드들은 동일하지만, 마지막에 fill()로 마무리한다. 이것은 채우는 함수이므로, 사각형을 그린 후 속을 채우는 것이다.
 */
// [속이 빈 사각형]
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.stroke();


// [속이 빈 정사각형 채우기]
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fill();

/**
 * [1 - 4 / 집 모양 그림 그리기]
 * - strokeRect : stroke는 lineTo로 선을 그으려 할 때 필요한 함수이다. 그런데, 해당 함수는 따로 stroke를 실행할 필요없이 fillRect처럼 바로 선을 그어준다.
 */
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;

// // ctx.strokeRect(300, 300, 50, 100);
// ctx.fillRect(300, 300, 50, 100);

// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

/**
 * [1 - 5 / 사람 모양 그려보기]
 * - arc    : 원을 그리는 함수.
 * 
 * - example code: ctx.arc(285, 130, 50, 0, 2 * Math.PI);
 * 2 * Math.PI를 하지 않으면, 완벽한 구 모양이 입력하지 못헌더,
 * 2 * Math.PI 앞의 0도 마찬가지의 역할을 한다.
 * 
 */
ctx.fillRect(210, 200, 15, 100);
ctx.fillRect(350, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(285, 130, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(295 + 10, 110, 5, Math.PI, 2 * Math.PI);
ctx.arc(255 + 10, 110, 5, Math.PI, 2 * Math.PI);
ctx.fill();