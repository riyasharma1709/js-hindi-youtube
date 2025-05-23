//if
// if(2 == 2){
//     console.log("executed")

// }
if(2 === "2"){                    //strck check also check datatype
    console.log("executed");
}
else{
    console.log("not executed")
}

const temparecture = 41

if(temparecture < 50){
    console.log("less than 50")
}
else 
{
    console.log("grater than 50")
}

// let score = 300
// if(score < 400){
//     let power = "fly"
//     console.log(`power is ${power}`);
// }
 //console.log(`power is ${power}`); give an error because of global scope and block scope

//  const balance = 1000
// if(balance > 500 ) console.log("test"); //give semicolumn we also use like this

// if(balance  < 500)
// {
//     console.log("less then 500")
// }
// else if(balance < 750)
// {
//     console.log("less than 750")
// }
// else{
//     console.log("bigger")
// }


const userLoggedIn  = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2 == 2){  // all condtion must have true and operator check both left and write side value if both are trye the program execute if i give 2==3 the program not execute
   console.log("welcome in my website using end operator")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("welcome using or oprator")
}
