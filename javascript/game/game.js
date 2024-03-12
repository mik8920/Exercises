function getRandomNumber(){
    const number = Math.floor(Math.random() * 10) + 1
    return number
}

function getUserGuess(){
    let guess = prompt("Choose your number")
    return guess
}

function checkGuess(){
    if (guess > number){
        console.log('too high')
        guess = getUserGuess()
    }else if (guess < number){
        console.log('too low')
        guess = getUserGuess()
    }
}


/* const checkGuess = () => {
    if (guess > number){
        console.log('too high')
        guess = getUserGuess()
    }else if (guess < number){
        console.log('too low')
        guess = getUserGuess()
    }
} */


//5 guesses

/* for (let i = 1; i <= 5; i++) {

    if (guess > number) {
        console.log("too high");
        guess=prompt("Choose your number")
        if (i === 5) {
            console.log("you lost");
        }
    }
    else if (guess < number) {
        console.log("too low");
        guess=prompt("Choose your number")
        if (i === 5) {
            console.log("you lost");
        }
    }
    else { console.log("you guessed correctly") }

} */

//infinite number of guesses

const number = getRandomNumber()
let guess = getUserGuess()

do{
    getUserGuess()
}while (guess!= number)
console.log('you guessed correctly')