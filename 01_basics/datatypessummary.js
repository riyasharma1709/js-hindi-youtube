// primitive datatypes 7 :types
//String(call by value),Number,Boolean,null,undefined,Symbol(unique),BigInt

//References(Non primitive) 3: types

//Array,Objects,functions

const score = 100
let userEmail;
const outsideTemp = null;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

//Array,Objects,Functions

const heros = ["shaktiman","nagraj","dagro"];
console.log(heros)
//object

let myobj = {
    name: "Riya",
    age: 21,
}
console.log(myobj)

//function

const myFunction = function()
{
    console.log("hello world");
}
myFunction()


//two types of memory 
// stack and heap
// stack-primitive and heap- non primitive
//stack gives copy value and heap give references

// example of stack 

let chan  =  "Riya sharma"
let example = "Akshay kumar"
console.log(chan)


console.log(example)//akshay kumar
example = "Rohit Sharma"
console.log(example)//Rohit sharma

//example of heap

let userOne = {
    email:"user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)




