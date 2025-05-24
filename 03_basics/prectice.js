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
            console.log("monday");
            break;
        case 2:
            console.log("sunday");
            break;
        case 3:
            console.log("tuesday");
            break;
        case 4:
            console.log("thursday");
            break;
        case 5:
            console.log("friday");
            break;
        case 6:
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
            
        
        
        