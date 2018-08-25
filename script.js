var score1 = document.querySelector('#score1');
var score2 = document.querySelector('#score2');
var message = document.querySelector('#message');
var playerWins = 0;
var computerWins = 0;

var btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', playRock);

var btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', playPaper);

var btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', playScissors);



function computerPlay() {
  var myArray = ['ROCK', 'PAPER', 'SCISSORS'];
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
    message.textContent = "You Won! The computer chose Scissors";
    playerWins++;
    score1.textContent = playerWins;
  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    message.textContent = "You Won! The Computer chose Rock";
    playerWins++;
    score1.textContent = playerWins;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    message.textContent = "You Won! The computer chose Paper";
    playerWins++;
    score1.textContent = playerWins;
  } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    message.textContent = "You Lost! The computer chose Paper";
    computerWins++;
    score2.textContent = computerWins;
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    message.textContent = "You Lost! The computer chose Scissors";
    computerWins++;
    score2.textContent = computerWins;
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    message.textContent = "You Lost! The computer chose Rock";
    computerWins++;
    score2.textContent = computerWins;
  } else if (playerSelection === computerSelection) {
    message.textContent = "Draw!";
  }

  if (playerWins == 5) {
    btn1.removeEventListener('click', playRock);
    btn2.removeEventListener('click', playPaper);
    btn3.removeEventListener('click', playScissors);
    playerWon();
  } else if (computerWins == 5) {
    btn1.removeEventListener('click', playRock);
    btn2.removeEventListener('click', playPaper);
    btn3.removeEventListener('click', playScissors);
    computerWon();
  }
}

function playRock() {
  var computerSelection = computerPlay();
  playRound('ROCK', computerSelection);
}

function playPaper() {
  var computerSelection = computerPlay();
  playRound('PAPER', computerSelection);
}

function playScissors() {
  var computerSelection = computerPlay();
  playRound('SCISSORS', computerSelection);
}


function playerWon() {
  var over = document.querySelector('#over');
  var btn = document.createElement("BUTTON");
  btn.classList.add('btn');
  btn.textContent = 'You Won!\r\n';
  btn.textContent += 'Click for a new game';
  over.appendChild(btn);
  btn.addEventListener('click', () => {
    message.textContent = 'Make your move!';
    btn1.addEventListener('click', playRock);
    btn2.addEventListener('click', playPaper);
    btn3.addEventListener('click', playScissors);
    playerWins = 0;
    computerWins = 0;
    score1.textContent = playerWins;
    score2.textContent = computerWins;
    btn.remove();
  });
}

function computerWon() {
  var over = document.querySelector('#over');
  var btn = document.createElement("BUTTON");
  btn.classList.add('btn');
  btn.textContent = 'You lost!\r\n';
  btn.textContent += 'Click to try again';
  over.appendChild(btn);
  btn.addEventListener('click', () => {
    message.textContent = 'Make your move!';
    btn1.addEventListener('click', playRock);
    btn2.addEventListener('click', playPaper);
    btn3.addEventListener('click', playScissors);
    playerWins = 0;
    computerWins = 0;
    score1.textContent = playerWins;
    score2.textContent = computerWins;
    btn.remove();
  });
}
