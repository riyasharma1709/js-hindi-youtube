//for of
//array specific loop
//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]
//for (const i of object){} //this is not js object but in  which thing you put loop

for (const i of arr){

    console.log(i)
}

const greetings ="hello world!"
for (const greet of greetings){
    console.log(`Each char is ${greet}`)
}

//map -stored unique value
const map = new Map()
map.set('IN',"India")
map.set('USA',"United state")
map.set('fr',"france")
map.set('IN',"India") //can't take repeted value its take uniqu

console.log(map)
for( const [key,value] of map){
    console.log(key,':-',value);
}

const myObj = {
    'game1':'NFS',
    'game2':'spiderman'
}
for(const [key,value] of myObj){
    console.log(key,':-',value) // give eeror object can't iterable
}

