/*
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  switch(choice) {
    case 1: 
    return 'rock';
    
    case 2:
    return 'paper';

    default:
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection){
  
  if (playerSelection == computerSelection){
    console.log("It's a draw!");
    return "draw";
  } else if( playerSelection == 'rock' && computerSelection == 'scissors'
  || playerSelection == 'paper' && computerSelection == 'rock'
  || playerSelection == 'scissors' && computerSelection == 'paper'){
    console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    return "player";
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return "computer";
  }
}

console.log("hello");

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

// The above code is from the