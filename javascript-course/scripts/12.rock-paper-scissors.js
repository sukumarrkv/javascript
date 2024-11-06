let score = JSON.parse(localStorage.getItem('score'));

let isAutoPlaying = false;
let intervalId;
if(score === null){
  score = {
    wins: 0,
    losses:0,
    ties:0
  };
}

updateScore();

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('Rock');
});

//Common mistake is to pass playGame('rock) as function to event listener as sown below
 //document.querySelector('.js-rock-button').addEventListener('click', playGame('rock'));
 //This is incorrect because it just runs that function and returns as we don't have any returns it returns undefined.
 //Hence we need to create a function and pass our function inside that function body

 document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('Paper');
 });

 document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('Scissors');
 });
 
function playGame(playerChoice){
  const computerChoice = pickComputerChoice();

  let winOrLose = '';

  if(playerChoice==='Scissors'){
    if(computerChoice==='Rock'){
      winOrLose = 'You lose';
    }else if(computerChoice==='Paper'){
      winOrLose='You win';
    } else {
      winOrLose='Tie';
    }
  }
  
  if(playerChoice==='Paper'){
    if(computerChoice==='Rock'){
      winOrLose = 'You win';
    }else if(computerChoice==='Paper'){
      winOrLose='Tie';
    } else {
      winOrLose='You lose';
    }
  }
  
  if(playerChoice==='Rock') {
    if(computerChoice==='Rock'){
      winOrLose = 'Tie';
    }else if(computerChoice==='Paper'){
      winOrLose='You lose';
    } else {
      winOrLose='You win';
    }
  }

  if(winOrLose==='You win'){
    score.wins += 1;
  }else if(winOrLose === 'You lose'){
    score.losses += 1;
  }else if(winOrLose==='Tie'){
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = `${winOrLose}.`;
  
  document.querySelector('.js-choice').innerHTML = 
  `You
<img src="images/${playerChoice}-emoji.png" class="move-icon">
<img src="images/${computerChoice}-emoji.png" class="move-icon">
Computer`;

  updateScore();
}


  function pickComputerChoice(){
  const randomNumber = Math.random();
  let computerChoice = '';
  if(randomNumber >= 0 && randomNumber < 1/3){
    computerChoice = 'Rock';
  } else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerChoice = 'Paper';
  } else {
    computerChoice = 'Scissors';
  }

  return computerChoice;
}

function resetScore(){
  score.wins=0;
  score.losses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScore();
}

function updateScore(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(function(){
      const playerChoice = pickComputerChoice();
      playGame(playerChoice);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}