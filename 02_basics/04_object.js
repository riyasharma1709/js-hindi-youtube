//singleton constructor object
const tinderUser = new Object()             //declare as counstructor
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

//destructure in object

const course ={
    courename:"js in hindi",
    price:"999",
    coureInstructor:"hitesh"
}
//console.log(course.coureInstructor)

const {coureInstructor: instructor} = course
//console.log(coureInstructor)


console.log(instructor) //give short name for easssy access 
//api and json ison is used for backed database in past used xml but xml is very complex so json introduce 
//json format example in json keys represented in string type all api handle with json
{
   //"name":"riyasharma",
   //"email":"ri@gmail.com"

}
