//this keyword give current context

const user = {
    username:"riya",
    price:"999",
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`)
       // console.log(this)
    }

}
// user.welcomeMessage()
// user.username="sem"
// user.welcomeMessage()

console.log(this)//in browser global object is windows object give window but in node give emplty value in global object


// function chai(){
//     let username = "riya"
//     console.log(this)
//     //console.log(this.username) ; this only use in object not in function
// }
// chai()


//second type

// const chai = function(){
//     let username = "riya"
  
//     console.log(this.username)

// }
// chai()

//third arroe function

const chai = () =>{
    let username = "riya"
  
    console.log(this.username)

}
chai()

//basic arrow function
// const addtwo = (num1,num2) =>{
//     return num1+num2

// }
// console.log(addtwo(5,7))

//implicit function
// const addtwo = (num1,num2) => num1+num2
// console.log(addtwo(2,4))

const addone = (num1 , num2) => (num1+num2)
console.log(addone(2,3))

