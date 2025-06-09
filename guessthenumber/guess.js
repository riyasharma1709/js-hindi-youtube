

//
let randomNumber = (parseInt(Math.random() * 100 + 1));    //100 bec random give in 0 but we want between 1 to 100  + 1 does not include 0
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainig = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)

        validateGuess(guess)

    })
}

//user guess valid number
function validateGuess(guess) {
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess < 1){
        alert('please enter more than 1')
    }else if(guess > 100){
        alert('please enter valid numebr')
    }
    else{
        prevGuess.push(guess)
        if (numGuess === 10){
            displayGuess(guess)
            displalyMessage(`game over. Random number was ${randomNumber}`)
            endGame()

        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

        

//check guess and print msg 
function checkGuess(guess) {
    if(guess === randomNumber){
        displalyMessage(`you guess right`)
        endGame()
    }
    else if(guess < randomNumber){
        displalyMessage(`number is too low`)
    }
    else if(guess >randomNumber){
        displalyMessage(`number is too high`)
    }



}

//value clean karega
function displayGuess() {

    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remainig.innerHTML = `${10 - numGuess}`


}

//this methode itrect with dom html
function displalyMessage(Message) {
    lowOrhi.innerHTML = `<h2>${Message}</h2>`

}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled','')  //can't add more values
  p.classList.add('button')
  p.innerHTML = `<h2 id= "newgame">start new game</h2>`;
  startOver.appendChild(p)
  playGame = false
  newGame()

}

function newGame() {

     const newGameButton = document.querySelector('#newGame')
     newGameButton.addEventListener('click',function(e){
        randomNumber =   (parseInt(Math.random() * 100 + 1));
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remainig.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
     })

}





