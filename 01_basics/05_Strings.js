const name = "Riya"
const repoCount = 50

//console.log(name + repoCount +"value");don't try this syntax for print insted of using this

console.log(`the name is ${name} and the repoCount is ${repoCount}`);

//define string using object not object but realworld
const gameName = new String('hitesh-scgfg')
console.log(gameName)

console.log(gameName.length);
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('t'));
console.log(gameName.toUpperCase());
console.log(gameName[0]);
console.log(gameName.substring(0,4));
const NEwString =gameName.slice(-8,3);//pachad thi kapvanu chalu kare
console.log(NEwString)
const ontherString = "  hitesh  "
console.log(ontherString)
//trim remove whitespace
console.log(ontherString.trim());

const Url = "https://www.hitesh.com/hitesh%20chodury"
console.log(Url.replace('%20','-'))


console.log(Url.includes('hitesh'))
console.log(Url.includes('sundar'))

console.log(gameName.split('-'));


 