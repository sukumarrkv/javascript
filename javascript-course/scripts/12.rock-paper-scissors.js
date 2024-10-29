let score = JSON.parse(localStorage.getItem('score'));
if(score === null){
  score = {
    wins: 0,
    losses:0,
    ties:0
  };
}

updateScore();

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
}