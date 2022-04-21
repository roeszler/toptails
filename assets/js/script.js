// ------ Global Constants & Variables 

/**
 * Declare constants for DOM Choices 
 * and possible choices
 */
let betAmount = document.getElementById('betAmount').value;
let bank = document.getElementById('bank').value;
let userChoice = document.getElementById('userChoice').value;
let hhCoinEnd = document.getElementsByClassName('leftCoinFront')[0];
let htCoinEnd = document.getElementsByClassName('leftCoinFrontHT')[0];
let ttCoinEnd = document.getElementsByClassName('leftCoinFront')[1];

// ------------ Functions
// ------ Game Control Functions
/**
* decreases the bank amount.
*/
function decrementBank() {
   let bankAfter = document.getElementById('bank').value = --bank;
   
   parseInt(bankAfter);
}

/**
* increases the bank amount.
*/
function incrementBank() {
   let bankAfter = document.getElementById('bank').value = ++bank;
   
   parseInt(bankAfter);
}

/**
* increases the bet amount, max 100.
*/
function incrementBet() {
   let betBefore = document.getElementById('betAmount').value;
   let betAfter = document.getElementById('betAmount').value = ++betBefore;
   
   parseInt(betAfter);
   decrementBank(); 
}
/**
* decreases the bet amount, min 1.
*/
function decrementBet() {
   let betBefore = document.getElementById('betAmount').value;
   let betAfter = document.getElementById('betAmount').value = --betBefore;
   
   parseInt(betAfter);
   incrementBank();
}

/**
* Keeps the color of the TwoHeads button on bet type selection 
*/
function hhActive() {
    let hhActive = document.getElementById('TwoHeads');
    hhActive.style.backgroundColor = '#ff0';
    hhActive.style.color = '#008C44';
    hhActive.style.transform = 'scale(1.1)';
    hhActive.innerHTML = '&nbsp;<i class="fas fa-check-double"></i>';
    let userChoice = document.getElementById('userChoice').value = 1;
    console.log(userChoice);
}
/**
* Turns off the color of the TwoHeads button on bet type selection 
*/
function hhInactive() {
    let hhInactive = document.getElementById('TwoHeads');
    hhInactive.style.backgroundColor = '#3B3B3F33';
    hhInactive.style.color = '#fff';
    hhInactive.style.transform = 'scale(1)';
    hhInactive.innerHTML = '&nbsp;<i class="fas fa-coins"></i>';
}

/**
* Keeps the color of the HeadsTails button on bet type selection 
*/
function htActive() {
    let htActive = document.getElementById('HeadTails');
    htActive.style.backgroundColor = '#ff0';
    htActive.style.color = '#008C44';
    htActive.style.transform = 'scale(1.1)';
    htActive.innerHTML = '&nbsp;<i class="fas fa-check-double"></i>';
    let userChoice = document.getElementById('userChoice').value = 2;
    console.log(userChoice);
}
/**
* Turns off the color of the HeadTails button on bet type selection 
*/
function htInactive() {
    let htInactive = document.getElementById('HeadTails');
    htInactive.style.backgroundColor = '#3B3B3F33';
    htInactive.style.color = '#fff';
    htInactive.style.transform = 'scale(1)';
    htInactive.innerHTML = '&nbsp;<i class="fas fa-coins"></i>';
}

/**
* Keeps the color of the TailsTails button on bet type selection 
*/
function ttActive() {
    let ttActive = document.getElementById('TwoTails');
    ttActive.style.backgroundColor = '#ff0';
    ttActive.style.color = '#008C44';
    ttActive.style.transform = 'scale(1.1)';
    ttActive.innerHTML = '&nbsp;<i class="fas fa-check-double"></i>';
    let userChoice = document.getElementById('userChoice').value = 3;
    console.log(userChoice);
}
/**
* Turns off the color of the TailsTails button on bet type selection 
*/
function ttInactive() {
    let ttInactive = document.getElementById('TwoTails');
    ttInactive.style.backgroundColor = '#3B3B3F33';
    ttInactive.style.color = '#fff';
    ttInactive.style.transform = 'scale(1)';
    ttInactive.innerHTML = '&nbsp;<i class="fas fa-coins"></i>';
}

/**
* Changes the color of the spin button on bet type selection 
*/
function changeSpinActive() {
   let spin = document.getElementById('spin');
   spin.style.backgroundColor = '#008C44';
   spin.style.color = '#ff0';
   spin.disabled = false;
}

/**
 * function to refresh the window DOM to restart the game
 */
function refreshPage() {
   window.location.reload();
}

/**
* opens linkedIn page of author
*/
function linkedIn() {
   parent.open('https://www.linkedin.com/in/stuartroeszler/');
}











// ------ Game Engine Functions
/**
* Generates the spin result as a random number between 1 and 3
*/
function generateSpinResult() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        let spinResult = document.getElementById('spinResult').value = 1;
        document.getElementById('hhSpin').style.display = 'block';
        document.getElementById('game-area').style.display = 'none';
        document.getElementById('gameplayPopup').style.display = 'none';
        console.log(spinResult);
        return spinResult;
    } 
    
    else if (randomNumber === 2) {
        let spinResult = document.getElementById('spinResult').value = 2;
        document.getElementById('htSpin').style.display = 'block';
        document.getElementById('game-area').style.display = 'none';
        document.getElementById('gameplayPopup').style.display = 'none';
        console.log(spinResult);
        return spinResult;
    }
    else {
        let spinResult = document.getElementById('spinResult').value = 3;
        document.getElementById('ttSpin').style.display = 'block';
        document.getElementById('game-area').style.display = 'none';
        document.getElementById('gameplayPopup').style.display = 'none';
        console.log(spinResult);
        return spinResult;
    }
}

/**
* calculates the win / loss of users bet Aount to game rules
*/
function calculateWinLoss() {
    let spinResult = document.getElementById('spinResult').value;
    userChoice = document.getElementById('userChoice').value;

    if (parseInt(spinResult) == parseInt(userChoice)) {
        winnerRender();
        if (parseInt(userChoice) == 1 || parseInt(userChoice) == 2) {
            betAmount = document.getElementById('betAmount').value * 2;
            for(let i = 0; i < betAmount; i++) {
                incrementBank();
            }
        } else if (parseInt(userChoice) == 3) {
            betAmount = document.getElementById('betAmount').value * 4;
            for(let i = 0; i < betAmount; i++) {
                incrementBank();
            }
        }
    } else {
        looseRender();
        betToNone();
        compareBankBet();
        
        if (parseInt(userChoice) == 3) {
            let sixTimesTT = document.getElementById('betAmount').value * 6;
            for(let i = 0; i < sixTimesTT; i++) {
                incrementKev();
            }
        } else {
            betAmount = document.getElementById('betAmount').value;
            for(let i = 0; i < betAmount; i++) {
                incrementKev();
            }
        }
    }
}

/**
* increases the kevScore amount.
*/
function incrementKev() {
   let kevBefore = document.getElementById('kevScore').value;
   let kevAfter = document.getElementById('kevScore').value = ++kevBefore;
   
   parseInt(kevAfter);
}

/**
* Resets the betAmount to 0 after a loss
*/
function betToNone() {
   document.getElementById('betAmount').value = 0;
}



// ------ Bank and Bet zero event 

/**
* condition for a game over event
*/
function compareBankBet() {
    let ba = document.getElementById('betAmount').value;
    let b = document.getElementById('bank').value;
    
    if (parseInt(ba) + parseInt(b) == 0) {
        gameOverRender();
    } else {
        incrementBet();
    }
 }

// ------ Reset Spin Button 
/**
* Resets the color of the spin button after 'click' event
*/
function resetSpin() {
   let resetSpin = document.getElementById('spin');
   resetSpin.style.backgroundColor = '#3B3B3F33';
   resetSpin.style.color = '#fff';
}

// ------ Modal Displays to indicate user initiated events
// ------ Player Wins Modal 
/**
* Display winnerPopup section & hide game-area section
*/
function winnerRender() {
   document.getElementById('winnerPopup').style.display = 'block';
   document.getElementById('game-area').style.display = 'none';
   document.getElementById('gameplayPopup').style.display = 'none';
   document.getElementById('hhSpin').style.display = 'none';
   document.getElementById('htSpin').style.display = 'none';
   document.getElementById('ttSpin').style.display = 'none';
}

/**
* Display game-area section & hide winnerPopup section
*/
function winnerOk() {
   document.getElementById('winnerPopup').style.display = 'none';
   document.getElementById('game-area').style.display = 'block';
   document.getElementById('gameplayPopup').style.display = 'none';
}

// ------ Kev Wins / Player Looses Modal 
/**
* Display lossPopup section & hide game-area section
*/
function looseRender() {
    document.getElementById('lossPopup').style.display = 'block';
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('gameplayPopup').style.display = 'none';
    document.getElementById('hhSpin').style.display = 'none';
    document.getElementById('htSpin').style.display = 'none';
    document.getElementById('ttSpin').style.display = 'none';
}
 /**
 * Display game-area section & hide winnerPopup section
 */
 function looseOk() {
    document.getElementById('lossPopup').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('gameplayPopup').style.display = 'none';
}

// ------ Final game win
/**
 * Display gameWinPopup section & hide game-area section
 */
function gameWinRender() {
    document.getElementById('gameWinPopup').style.display = 'block';
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('gameplayPopup').style.display = 'none';
}
/**
 * Display game-area section & hide gameWinPopup section
 */
function gameWinOk() {
    document.getElementById('gameWinPopup').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('gameplayPopup').style.display = 'none';
}

// ------ Game over 
/**
* Display gameOverPopup section & hide game-area section
*/
function gameOverRender() {
   document.getElementById('gameOverPopup').style.display = 'block';
   document.getElementById('game-area').style.display = 'none';
   document.getElementById('gameplayPopup').style.display = 'none';
   document.getElementById('outOfMoneyPopup').style.display = 'none';
   document.getElementById('lossPopup').style.display = 'none';
}

/**
* Display game-area section & hide gameOverPopup section
*/
function gameOverOk() {
   document.getElementById('gameOverPopup').style.display = 'none';
   document.getElementById('game-area').style.display = 'block';
   document.getElementById('gameplayPopup').style.display = 'none';
}

// ------ Spin button 
 /**
 * Display game-area section & hide hhSpin section
 */
 function spinOk() {
    document.getElementById('hhSpin').style.display = 'none';
    document.getElementById('htSpin').style.display = 'none';
    document.getElementById('ttSpin').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('gameplayPopup').style.display = 'none';
 }

// ------ Out of money function 
 /**
* Display gameOverPopup section & hide game-area section
*/
function outOfMoneyRender() {
    document.getElementById('outOfMoneyPopup').style.display = 'block';
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('gameplayPopup').style.display = 'none';
 }
 /**
 * Display game-area section & hide gameOverPopup section
 */
 function outOfMoneyOk() {
    document.getElementById('outOfMoneyPopup').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('gameplayPopup').style.display = 'none';
 }

// ------ Gamplay Modal 
/**
* Display gameplayPopup section & hide game-area section
*/
function gameplayRender() {
    document.getElementById('gameplayPopup').style.display = 'block';
    document.getElementById('game-area').style.display = 'none';
 }
 /**
 * Display game-area section & hide gameplayPopup section
 */
 function gameplayOk() {
    document.getElementById('gameplayPopup').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
 }

// ------ Error function
/** 
 * Throw error function 
 */
function throwError() {
    try {
        throw {
            number: 583,
            type: typeof(console.error('583_UNDEFINED_CHARACTER')),
            message: 'character error occurred',
            contact: '<p>Pease contact <a href="https://github.com/roeszler" aria-label="Authors gitHub details" target="_blank">the site author</a> to register the error</p>',
            button: '<button class="btn popupBtn" onclick="errorOk();">Return to Toptails</button>'
        };
    } catch(err) {
        document.getElementById('error').style.display = 'block';
        document.getElementById('game-area').style.display = 'none';
        document.getElementById('gameplayPopup').style.display = 'none';
        document.getElementById('lossPopup').style.display = 'none';
        document.getElementById('gameOverPopup').style.display = 'none';
        document.getElementById('gameWinPopup').style.display = 'none';
        document.getElementById('outOfMoneyPopup').style.display = 'none';
        document.getElementById('hhSpin').style.display = 'none';
        document.getElementById('htSpin').style.display = 'none';
        document.getElementById('ttSpin').style.display = 'none';
        document.getElementById("errorMessage").innerHTML = "OOPS! <br>" + err.number + "_" + err.type + "<br>" + err.message + "<br>" + err.contact + err.button;
    }
}

function errorOk () {
    document.getElementById('error').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
}

// ------ DOM Listeners
// ------ Window: DOMContentLoaded events

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});

// ------ Document: DOMContentLoaded events

