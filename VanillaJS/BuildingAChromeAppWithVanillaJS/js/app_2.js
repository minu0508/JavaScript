// ============ 2.13 ============
// =                            =
// ==============================
const strAge = prompt('How old are you?');

console.log(typeof Number(strAge), typeof parseInt(strAge));


// ============ 2.14 ============
// =                            =
// ==============================
const intAge = parseInt(prompt('How old are you?'));

if(isNaN(intAge)) {
    console.log('Please write a number');
} else {
    console.log('GOOD');
}


// ============ 2.15 ============
// =                            =
// ==============================
if(isNaN(intAge) || intAge < 0) {
    console.log('Please write a real positive number');
} else if (intAge < 18) {
    console.log('You are too young');
} else if (intAge >= 18 && intAge <= 50){
    console.log('You can drink');
} else if (intAge > 50 && intAge <= 80) {
    console.log('You should exercise');
} else if (intAge === 100) {
    console.log('wow you are wise');
} else if (intAge > 80) {
    console.log('You can do whatever you want');
}