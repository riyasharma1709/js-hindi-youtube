

let a =200

if(true) {    //{called blok scope}
    let a = 20
    var b = 10 
    const c =30
    console.log("Inner:",a)
}
console.log(a)//this called globle scope

function one(){
    const username = "riya"
    console.log("one called")
     
    function two(){
        const website = "youtube"
        console.log(username)
       console.log("Two called")
    } 
    //console.log(website) doe's not print bec parent can't access child property but child aceess parent property
    two()
}
one()


// mini hosting in javascript

if(true){
    const username = "sem"
    if(username == "sem"){
        const website = " youtube"
        console.log(username + website)
    }
    //console.log(website) can't print


}
//console.log(username) ..can't print

//++++++++++++++interesting+++++++++++++++ define functions in many type

// we can also declare here console.log(addone(5))
function addone(num){
    return num +1
}
console.log(addone(5))  //we can declare here


//we can't declare here console.log(addtwo(5))
const addtwo = function(num){
    return num + 2

}
console.log(addtwo(5))