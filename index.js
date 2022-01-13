// app.js

// Complete logic of game inside this function
const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  // Function to
  const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissors');
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['🪨', '📄', '✂️'];

    // Function to start playing game
    playerOptions.forEach((option) => {
      option.addEventListener('click', function () {
        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        // Function to check who wins
        winner(this.innerText, computerChoice);
        console.log('player choice:', this.innerText);
        console.log(computerChoice);
      });
    });
  };

  // Function to decide winner
  const winner = (player, computer) => {
    const playerScoreBoard = document.querySelector('.player-count');
    const computerScoreBoard = document.querySelector('.comp-count');
    if (player === computer) {
      computerScoreBoard.textContent = computerScore;
      playerScoreBoard.textContent = playerScore;
    } else if (player === '🪨') {
      if (computer === '📄') {
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player === '✂️') {
      if (computer === '🪨') {
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player === '📄') {
      if (computer === '✂️') {
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
  };

  // Calling playGame function inside game
  playGame();
};

// Calling the game function
game();
