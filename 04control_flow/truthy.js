//const userEmail = "ri@gmail.com"
//const  userEmail = "" //give don't have an email
const  userEmail = []//give got email


if(userEmail){
    console.log("gOt email")
}
else{
    console.log("don't have en email")
}

//falsy value

//false,0,-0,BigInt 0n ,"",null,undefined,NaN  this all are false value

//truthy values
//"0"string ,"false"string,[]," ",{},function(){}

if(userEmail.length === 0){
    console.log("array is empty")
}

const emptyObject = {}
if(Object.keys(emptyObject).length===0){
    console.log("object is empty")

}

//Nullish coalescing Operator(??) bascially work in null undefined

let val1;
// val1 = 5 ?? 10 //it print first valur if not null and defined
//val1 = null ?? 10 //it check nullvalue if value null it print onther value
//val1 = undefined ?? 15 //it check nullvalue if value null it print onther value
val1 = undefined ?? 10 ?? 15 //10
console.log(val1)//5

//terniary operator
//condition ?true : false
const iceTeaPrice = 100
iceTeaPrice >= 120 ? console.log("less than 100") : console.log("more than 100")
