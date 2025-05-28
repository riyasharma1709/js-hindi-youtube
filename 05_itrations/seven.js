//map
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map( (num) => num + 10)
console.log(newNums)

// const newk = [];
// myNumbers.forEach((num) => {
//      newk.push(num + 10) //for each can't return newarray insted using map
// })
// console.log(newk)

const numbsers = myNumbers.
map((num) => num * 10)
.map((num)=>  num + 1)
.filter( (num) => num >= 40)
console.log(numbsers)