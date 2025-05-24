//for loop 
for(let i = 0 ; i <= 10; i++ ){
    const element = i;
    if(element == 5){
        console.log("5 five is best number")
    }
    console.log(element)
}

// for(i = 1; i <= 10; i++){
//     console.log(`outer loop:${i}`);
//     for(j = 1; j <= 10; j++){
//         //console.log(`inner loop:${j} and innerloop ${i}`);
//         console.log(i + '*' + j + "=" + i*j);
    
//     }
//}

let myArray = ["flash","superman","batman"]

for(let i = 0;i < myArray.length;i++){
    const element = myArray[i];
    console.log(element);
}
//break ,continue

for(i = 0;i <= 20 ; i++)
{
    if(i == 5){
        console.log("detecetd 5");
        break

    }
    console.log(`value of i is ${i}`);
}

for(i = 0;i <= 20 ; i++)
{
    if(i == 5){
        console.log("detecetd 5");
        break

    }
    console.log(`value of i is ${i}`);
}

for(i = 0;i <= 20 ; i++)
{
    if(i == 5){
        console.log("detecetd 5");
        continue

    }
    console.log(`value of i is ${i}`);
}

