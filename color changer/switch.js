//using switch
const btn = document.querySelectorAll('.button')
console.log(btn)

const mainb = document.querySelector("body")

btn.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)

 switch (e.target.id) {
            case 'grey':
                mainb.style.backgroundColor = 'grey';
                break;
            case 'white':
                mainb.style.backgroundColor = 'white';
                break;
            case 'blue':
                mainb.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                mainb.style.backgroundColor = 'yellow';
                break;
            default:
                console.log("No color matched");
        }
    });
});