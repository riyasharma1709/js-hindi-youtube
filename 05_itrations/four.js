//object
const myObj = {
    js:'javaScript',
    cpp:'c++',
    rb:"ruby"
}
for (const key in myObj){
    //console.log(myObj[key])
    console.log(`${key} shourtcut is for ${myObj[key]}`)
}

const programming = ["js","python","java","c++"]

for(const key in programming){
    console.log(programming[key]);
}

