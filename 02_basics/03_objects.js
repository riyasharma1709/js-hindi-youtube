//two type of declare object literal and constructor
//singleton make with constructor
//object.create (constructor method) 



//object literals
const my = Symbol("key2") //define symbol




const jsUser = {
    name :"Riya",
    age : 21,
    [my] : "mykey1",//for print symbol use squre braket
    "full name" : "Riya Sharma",
    email:"riya@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:["Monday","friday"],
    subjects: ["Math", "Science", "English"] //array
}
console.log(jsUser.subjects);       // ["Math", "Science", "English"]
console.log(jsUser.subjects[0]); 

console.log(jsUser.email)
console.log(jsUser["email"])
//console.log(jsUser.full name) can't access like this
console.log(jsUser["full name"])
console.log(jsUser[my])

jsUser.email = "hiesh@gmail.com" //to change value
console.log(jsUser.email)
//Object.freeze(jsUser)  //freeze used for lock the object value can't change
jsUser.email = "sem@gmail.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user")
}
console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`hello user,${this.name}`); //this keyword use to print property of object
}
console.log(jsUser.greetingTwo())