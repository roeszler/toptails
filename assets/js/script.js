// ------ Global Constants & Variables 

// ------ Functions

// Modal Displays to indicate user initiated events

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



// ------ DOM Listeners
// Window: DOMContentLoaded events

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});

// Document: DOMContentLoaded events

