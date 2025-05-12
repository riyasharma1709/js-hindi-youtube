//singleton constructor object
const tinderUser = new Object() //declare as counstructor
tinderUser.id = "123Riya"
tinderUser.name = "Riya"
tinderUser.isLoggedin = true

console.log(tinderUser)
const instaUser = {
    name : "sem",
    fullname : "semsharma",
    id : 1,
    email : "riya@gmail.com"  
}

console.log(instaUser)
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = Object.assign(obj1,obj2)//for merge object
console.log(obj3)

//Array of object
const suser = [
{
    id : 1,
    email:"r@gmail.com",

},
{
    id:2,
    email:"s@gmail.com"
}
]

console.log(suser[1].email)
console.log(suser[0].email)
console.log(Object.keys(instaUser))
console.log(Object.values(instaUser))

console.log(instaUser.hasOwnProperty('id'))