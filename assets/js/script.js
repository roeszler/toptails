// ------ Global Constants & Variables 

// ------ Functions



// Modal Displays to indicate user initiated events

// Player Wins Modal 
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

// Kev Wins / Player Looses Modal 
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

// Final game win
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

// Game over 
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

// Spin button 
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

// Out of money function 
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

//  Gamplay Modal 
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

 

// ------ DOM Listeners
// Window: DOMContentLoaded events

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});

// Document: DOMContentLoaded events

