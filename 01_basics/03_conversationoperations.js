let score = 33 
console.log(typeof score)
let sco = "33"
console.log(typeof sco)

let valueInNumber = Number(sco) //convert string value in number
console.log(typeof valueInNumber)

//"33" => 33 in number
//"33abc" => NaN not a number
//true => 1 false => 0

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

//use empty string in boolean gives false

let someNumber = 25
let strNub = String(someNumber)
console.log(strNub)
console.log(typeof strNub)

//******** operatiobs**************

let value = 3
let negValue = -value // -3 
console.log(negValue)
console.log(2**3)
console.log(2%3)

let str = "Riya"
let str1 = "sharma"
let con = str + str1
console.log(con)

console.log("1" + 2)//12
console.log("1" + "2")//12 
console.log(1 + 2 + "2")//32

let gameCounter = 100
gameCounter++;
console.log(gameCounter)