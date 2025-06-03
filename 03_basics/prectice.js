//prectice

//1.Write a function that takes an array and returns a new array with the elements in reverse order.
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4]));

//2.convert Object to Array
 
const person = {name:"sem",surname:"shri"}

function arraytoobject(obj){
    return Object.entries(obj);

}
console.log(arraytoobject(person));

//3.Create a Simple Object Convert Function
function personalInfo(name,age,city){
    return {
        name:name,
        age:age,
        city:city
    }
}
console.log(personalInfo("se",24,"surat"))

//4.Find Even Numbers in an Array

function findEvenNum(arry){
    return arry.filter(num => num % 2 === 0);
}
console.log(findEvenNum([1, 2, 3, 4, 5, 6]));  

//
function greetUser(user) {
    console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}

const userObj = {
    name: "Alice",
    age: 25
};

greetUser(userObj);


//if else statement & switch
// A if score ≥ 90

// B if score ≥ 80

// C if score ≥ 70

// D if score ≥ 60

// F if below 60
//  let score = 75
//  if(score >= 90){
//     console.log("grade A")
//  }
// else if(score >= 80){
//     console.log("grade B")

// }
// else if(score >= 70){
//     console.log("grade C")
// }
// else{
//     console.log("pass")
//}

function grade(score){
    if(score >= 90){
    console.log("grade A")
 }
else if(score >= 80){
    console.log("grade B")

}
else if(score >= 70){
    console.log("grade C")
}
else if(score >= 60){
    console.log("Grade D")
}
else{
    console.log("pass")
}
}
(grade(82))

//check even or odd
function evenOdd(num){
    if(num % 2 == 0){
        console.log(`${num} is even`)
    }
    else{
        console.log(`${num} is odd`)
    }
}
evenOdd(4)

//switch
function checkDay(num){
    switch (num){
        case 1:
            console.log("sunday");
            break;
        case 2:
            console.log("monday");
            break;
        case 3:
            console.log("tuesday");
            break;
        case 4:
            console.log("wensday");
            break;
        case 5:
            console.log("thursday");
            break;
        case 6:
            console.log("friday");
            break;
        case 7:
            console.log("satday");
            break;
        default:
            console.log("no day");
            break;
    }
}
checkDay(2)

function takeArgumenet(a,b,operator){
    switch(operator){
        case "+":
            result = a + b;
            console.log(`${a} + ${b} = ${result}`);
            break;
        case "-":
            result = a - b;
            console.log(`${a} - ${b} = ${result}`);
            break;
        case "/":
           result = a / b;
            console.log(`${a} / ${b} = ${result}`);
            break;
        case "*":
           result = a * b;
            console.log(`${a} * ${b} = ${result}`);
            break;

    }

}
takeArgumenet(4,2,"/")
            
//for loop Write a for loop that prints only the even numbers from 1 to 20.

for(i = 0; i <= 20; i++){
    if(i % 2 == 0)
        {
            console.log(`even number${i}`);
    }
}


let fruits = ["mango","watermillon","banana"]

for(i = 0; i < fruits.length ; i++){
    console.log(fruits[i]);
}
        
//Write a for loop that calculates the sum of numbers from 1 to n.

let n = 5;
let sum = 0;

for(i = 0; i <= 5; i++){
   sum = sum + i;
   
}
console.log("sum is:",sum)
   
//Write a for loop that prints numbers from 10 to 1 in reverse order.

for(i = 10;i >= 1; i--){
    console.log(i)

}
//  
const str = "hello world"
let count = 0;

for(i = 0; i < str.length ; i++){
    let char = str[i].toLowerCase();
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
        count ++;
}
console.log("number of vowel is:",count)

const hello ={
    name : "riya",
    age:21,
}

function gret(anyOb){
    console.log(`name is ${anyOb.name} and age is ${anyOb.age}`
    )
}
gret(hello)

const ca = ["riya","sem","12"]

function araycount(anyar){
    console.log(anyar);
}
console.log(ca[1])

const findObj = [
   { 
        name:'riya',
        age:21,
        year:2004

    },
   { 
        name:'sem',
        age:22,
        year:2005

    },
     { 
        name:'jems',
        age:24,
        year:2006

    }
    
]
// console.log("new")
// console.log(findObj[0].age)
// console.log(findObj)

// findObj.forEach( (item) => {
//     console.log(item.age);
// })

// findObj.forEach(function (item) {
//     console.log(item.age);
// })

const newOb=findObj.filter( (item)=>item.name === "riya")
console.log(newOb)

const newArray = [1,2,3]

const modiArr = newArray.reduce((acc,curval) =>{
    console.log(`acc value is ${acc} and curvalue is ${curval}`)
    return acc +curval

},0)
console.log(modiArr)

const cart = [
    {
        product:"trouser",
        price:300

    },
    {
        product:"jens",
        price:400

    },
    {
        product:"tshirt",
        price:400

    }

]
const myntra = cart.reduce((acc,item) =>{
    return acc+item.price


},0)
console.log(myntra)


twoArr =[1,2,3,4,5,6]
oneArr = []

twoArr.forEach((item)=> {
    if(item >3)
        oneArr.push(item)
    
})
console.log(oneArr)

// const threeArr = twoArr.map((i) =>{
//     return i < 3


// })
// console.log(threeArr)
const newNums = twoArr.map( (num) => num + 3)
console.log(newNums)
