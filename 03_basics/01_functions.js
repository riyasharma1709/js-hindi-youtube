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