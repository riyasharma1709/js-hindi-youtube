//array
const myArray = [0,"Riya",2,3,4,5]
console.log(myArray)
console.log(myArray[1]);

const myHeors = ["Akshaykumar","sethupatiVijay"]

//array methods
myArray.push(6)//value add karva mate
console.log(myArray)
myArray.pop()//last value remove karva mate

console.log(myArray)
console.log("shift:") //shift used for add value in first 
myArray.unshift(9)
console.log(myArray)
myArray.shift()//unshift used for remove value
console.log(myArray)
console.log(myArray.includes(9));
console.log(myArray.indexOf(3));
console.log("type of myarray:")
console.log(typeof myArray)

const newArr = myArray.join()//convert in string

console.log(myArray)
console.log("new array:")
console.log(newArr)
console.log(typeof newArr);


//slice,splice


console.log("A ",myArray);
const myn1 = myArray.slice(1,3)//print value does not include last range
console.log(myn1)

console.log("B ",myArray);

const myn2  = myArray.splice(1,3)//it cut value include last range and change original array remove indicating portion
console.log("c ",myArray);
console.log("change array after splice:")
console.log(myn2); 
console.log(myArray)