const score = 400
console.log(score)

const score_1 =new Number(400)
console.log(score_1);

console.log(score_1.toString());
console.log(score_1.toString().length);
console.log(score_1.toFixed(2));//point ni pachd ni value change karva mate

console.log(score_1.toFixed(1));

const other_num = 23.899
console.log(other_num.toPrecision(2)); //round figure

const num1 = 255.79
console.log(num1.toPrecision(3));

const num2 = 233.46
console.log(num2.toPrecision(3));

const num3 = 233.46
console.log(num3.toPrecision(2));

const num4 = 233.46
console.log(num3.toPrecision(4));

const hundreads = 10000000
console.log(hundreads.toLocaleString('en-In'));

//***************maths*****************
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(5.3));
console.log(Math.floor(4.9));//give lower round value
console.log(Math.max(4,3,28));
console.log(Math.min(4,3,28));

console.log(Math.random());//give value between 0 to 1
console.log(Math.random()*10+1);//+1 value 1 thi upar leva mate 0 cas avoid karva mate


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)) + min );// 10 thi upar value leva mate

const change = 20
console.log(change);
let val1 = 10;
console.log(val1)

val1 = 50
console.log(val1)



