//Immediately Invoked function Expressions (IIFE)

(function chai(){            //this called () iife and this function called named iief
console.log(`DB CONNECTED`)
})(); //must put semi column for end line othrwise give error
//chai()  

( (name) => {
    console.log(`db connected ${name}`)  //this called  unamed iife
})('riya')
 

//in global scope prevent polution used iife to invoke immidiate function