//Game values
 let min = 1,
    max = Math.floor(Math.random() * 20),
    winningNum = Math.floor((Math.random() * max) + 1),
    noOfGuesses = 3;

    console.log(winningNum)
//selecting values
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

//Assigning Contents
minNum.textContent = min;
maxNum.textContent = max;

//event listener for play again
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

//Listen for guess
guessBtn.addEventListener('click', function(){
    guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max ){
        showMessage(`Please input a valid number between ${min} and ${max}`, 'red')
    };

    //Check if won
    if(guess === winningNum){

        gameOver(true, `Congratulations, ${winningNum} is correct, YOU WIN!! `);  

    } else{
        //lost

        //clear input
        guessInput.value = '';
        noOfGuesses = noOfGuesses - 1

        showMessage(`Guess is wrong, you have ${noOfGuesses} guesses left`, 'red');
        if(noOfGuesses === 0){

            gameOver(false, `Out of guesses, you lose. The correct guess was ${winningNum}`)
            guessInput.disabled = true;
            guessInput.value = '';
            guessInput.placeholder = 'You lose';
            // showMessage(`Out of guesses, you lose. The correct guess was ${winningNum}`, 'red');
        }

        
    }
});

function showMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : 'red';

    //Disable input
    guessInput.disabled = true;
    //Change border color to green
    guessInput.style.borderColor = color;
    // set text color
    message.style.color = color
    //set message
     showMessage(msg);

     //Play again
     guessBtn.value = 'Play again';
     guessBtn.className += 'play-again';
}