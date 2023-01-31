let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(human, computer, secretTarget) {
  return (Math.abs(secretTarget - human) < Math.abs(secretTarget - computer)) ? true : false;
}

function updateScore(winner) {
  return (winner === 'human') ? ++humanScore : ++computerScore;
}

function advanceRound() {
  ++currentRoundNumber;
}