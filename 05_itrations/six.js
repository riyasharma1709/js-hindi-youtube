//for each can't return value
const coding = ["java","python","c++"]

coding.forEach( ( item ) => {
    console.log(item);
})

// const values = coding.forEach( (item) => { give undefined
//     //console.log(item);
//     return item
// })
// console.log(values)


const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => num > 4)
console.log(newNums)
// const newNums = myNums.filter( (num) => { //when we use curly basic means scope insted of () we must use return

//      return num > 4
// })
// console.log(newNums)

const eachNums = []
myNums.forEach( (num) => {
    if(num > 4){
        eachNums.push(num)
    }
})
console.log(eachNums)


//we assume we hav databas evalue like this

const books = [
    {title:'bookOne',genre:'Fiction',publish:'1991',
    edition:2004},
    {title:'bookTwo',genre:'non-Fiction',publish:'1995',
    edition:2001},
    {title:'bookThree',genre:'History',publish:'1991',
    edition:1995},
    {title:'bookFour',genre:'Science',publish:'2005',
    edition:2006},
    {title:'bookFive',genre:'History',publish:'2004',
    edition:2007},
    {title:'bookSix',genre:'Science',publish:'1993',
    edition:2006},
    {title:'bookSeven',genre:'Fiction',publish:'2002',
    edition:2006}
]

let userBooks = books.filter( (bk) => bk.genre === "History")
console.log(userBooks)

let published = books.filter( (bk) => bk.publish > 2000 && bk.genre === "Fiction")
console.log("published with genre")
console.log(published)

let some = books.filter((bk) => {
    return bk.publish > 2004
})
console.log("published")
console.log(some)