//using switch
const btn = document.querySelectorAll('.button')
console.log(btn)

const mainb = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)

 switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            default:
                console.log("No color matched");
        }
    });
});