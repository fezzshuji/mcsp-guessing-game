
function retryUser(){
    
}

function promptUser(){
    let userNum = prompt('Guess a number from 1-100'); //prompt the user to input a number from 1 - 100 // name (global)
    let numGuess = 0; //number user inputted (local)
    let guessCount = 0; //times user inputted (local)
    
    numGuess = parseInt(userNum); //converts the input number to int and assign it to numGuess variable as int
    
    if (numGuess > 100 || numGuess < 1){ //if number is less than 1 or more than 100
        alert('INPUT number from 1 - 100!!!'); //alert user
    }
    if(numGuess == mysteryNum){ //if number is equal to the mystery number
        alert('CORRECT!!!!'); //alert user 
    }
    else if (numGuess != mysteryNum){ //if number is not equal to mystery number
        alert('Wrong, Guess again!!!'); //alert user
        guessCount ++; //set number of tries to increment
    }
    else if (guessCount < 3){  // if number of tries is more than 3
        alert('GAME OVER!!!'); //game over if try more than 3 times
    }
}

let mysteryNum = 27; //the mystery number (global)
promptUser();