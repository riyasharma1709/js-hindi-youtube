//for each we usrd in arry mostly
const coding =["js","python","java","rubby"]

// coding.forEach(function (val){   //in callback function ca't give function name
//     console.log(val)
// })

// coding.forEach( (item) => { //arrow function
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

coding.forEach(( item,index,arr)=>{
    console.log(item,index,arr)

})

const myCoding = [
    {
        lanname:"javascript",
        lanfilename:"js"
    },
    {
        lanname:"java",
        lanfilename:"java"
    },
    {
        lanname:"python",
        lanfilename:"py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.lanname);
})