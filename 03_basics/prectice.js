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

//3.Create a Simple Object Converter Function
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
