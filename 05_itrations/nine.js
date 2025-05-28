//reduce accumalotor give empty variable and stored value
const myNums = [1,2,3]

// const myTotal = myNums.reduce((acc,currval) =>{
//     console.log(`acc:${acc} and currval${currval}`)
//     return acc + currval
// },0)//acc = 0  if give 3 give 3
//console.log(myTotal)
const myTotal = myNums.reduce(function (acc,currval){ //using function
    console.log(`acc:${acc} and currval${currval}`)
    return acc + currval
},0)//acc = 0  if give 3 give 3
console.log(myTotal)
//const myTotal = myNums.reduce((acc,curr) => acc + curr ,0)
//console.log(myTotal)

const shoppingCart  = [
    {
        itemname:"js course",
        price:300
    },
    {
        itemname:"python course",
        price:200
    },
    {
    itemname:" java course",
    price:700
},
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(priceToPay);