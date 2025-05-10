const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)
console.log(marvel_heros[3][1])

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros)

const all_new_heros = [...marvel_heros,...dc_heros] //spread operator
console.log(all_new_heros);
console.log(all_new_heros[4]);


const another_array = [1,2,3[1,2],[1,5,[1,7,8]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))//ask is array or not 
console.log(Array.from("Hitesh"))//converts in array
console.log(Array.from({name:"hitesh"}))  //interesting

let sco1 = 200
let sco2 = 300
let sco = 5
console.log(Array.of(sco1,sco2,sco));






