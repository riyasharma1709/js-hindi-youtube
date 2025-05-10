// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

 let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());//month statrts with zero

// let Datespecific = new Date("2023-01-14")
// console.log(Datespecific.toLocaleString());
// console.log(Datespecific.toString());

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let NewDate = new Date()
console.log(NewDate);
console.log(NewDate.getMonth()+1);
`the date is ${NewDate.getDay()}`

NewDate.toLocaleString('default',{
    weekday:"long",
})

