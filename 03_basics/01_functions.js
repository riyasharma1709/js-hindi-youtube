//functions

function saymyname() {
    console.log("riya")
}
saymyname() //saymayname is refrence and () called execute

// function addTwoNumbers(number1,number2) {  //this line called parameters
//     console.log(number1+number2);

// }
// addTwoNumbers(3,4) //this line called arguments


function addTwoNumbers(number1,number2) {  //this line called parameters
      // return number1+number2; //when we return we store the value in variable otherweise don't store bec  not work first type 
       let result = number1 + number2//second type
       return result

}
let result = addTwoNumbers(3,4)
console.log("Result is:",result)


function logginUserMsg(username) {
    return `${username} just loggedin `
}

console.log(logginUserMsg("Riya"))

function msg(name){ 
    if(name === undefined)  //we also use (!name) it is same as (name === undefined)
    {
        console.log("please enter valid name");
        return
    }
    return `${name} sweet` 
}
console.log(msg())

function calculateCarPrice(...num1) { //... rest operator used for return multiple value in single parameter
    return num1
}
console.log(calculateCarPrice(200,300,400))

 
//pass object in function

const user = {
    name : "Riya",
    price :"99"
}

function handlecart(anyobject){
    console.log (`name is ${anyobject.name} and price is ${anyobject.price}`)
}
handlecart(user)

const user1 = [200,300,400,500]

function anyarray(array) {
    console.log(array)
}
anyarray(user1[1])