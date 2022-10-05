/*




function game(){
  let playerScore = 0;
  let computerScore = 0;

  while(true){
    
      let playerSelection = prompt("Choose: ").toLowerCase();
      let computerSelection = getComputerChoice();

      roundWinner = playRound(playerSelection, computerSelection);
      if (roundWinner === 'player')
        playerScore += 1;
      else if(roundWinner === 'computer')
        computerScore += 1;

      if(winner(playerScore, computerScore))
        break;
      
      showScore(playerScore, computerScore);
    
  }
}

function winner(playerScore, computerScore){
  if(playerScore === 5){
    console.log("You won!");
    return true;
  } else if(computerScore === 5){
    console.log("Computer won!");
    return true;
  }
  return false;
}

function showScore(playerScore, computerScore){
  console.log(`Current Score: You: ${playerScore}, Computer: ${computerScore}`)
}

game();
*/

// The above code is from the initial exercise
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('.btn');
let score = document.querySelector('.score');

function playRound(playerSelection, computerSelection){
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection){
    return;
  } else if( playerSelection == 'rock' && computerSelection == 'scissors'
  || playerSelection == 'paper' && computerSelection == 'rock'
  || playerSelection == 'scissors' && computerSelection == 'paper'){
    //return "player";
    playerScore++;
  } else {
    //return "computer";
    computerScore++;
  }
  return;
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  switch(choice) {
    case 1: 
    return 'rock';
    
    case 2:
    return 'paper';

    case 3:
    return 'scissors';
  }
}

function showScore(){
  score.textContent = `${playerScore} - ${computerScore}`;
  if (playerScore === 5 || computerScore === 5){
    displayResluts();
  }
}

function displayResluts() {
  const endMessage = document.createElement('p');
  if (playerScore === 5){
    endMessage.textContent = 'Player won! Refresh site to play again'
  } else {
    endMessage.textContent = 'Computer won! Refresh site to play again'
  }

  score.appendChild(endMessage);
  buttons.forEach((button) => {
    button.classList.toggle('disable');
  })
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.textContent.toLowerCase();
    
    playRound(playerSelection, computerSelection);
    showScore();
  })
});

// Create three buttons
// Add event listener to each button that calls playRound