//calculator
const form = document.querySelector('form')
 // const height = parseInt(document.querySelector('#height').value)   this give empty


//cosnt 

form.addEventListener('submit', function (e) {
    e.preventDefault() //this is used for stop action so can't show url or in browser
    const height = parseInt(document.querySelector('#height').value) //.value used for take input
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please give valid height${height}`
    }

    else if (weight == '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give valid weight${weight}`

    }
    else{
       const bmi= (weight / ((height*height)/1000)).toFixed(2)
       //show result
       result.innerHTML = `<span>${bmi}</span>`
       let message = "";
       if(bmi < 18.6){
        message = "You are Underweight";
       }
        else if(bmi >= 18.6 && bmi <= 24.9){
            message = "You are normal";
        }
        else{
             message = "You are overwight";
        }
        result.innerHTML = `<span>Your BMI is: ${bmi}</span><br><strong>${message}</strong>`;

    }


});