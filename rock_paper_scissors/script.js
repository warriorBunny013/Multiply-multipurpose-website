/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
// const selectRandom = ["rock", "paper", "scissor"];
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
const totalScore = { computerScore: 0, playerScore: 0 };
function getComputerChoice() {
  let selectRandom = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice == 0) {
    return selectRandom[0];
  } else if (randomChoice == 1) {
    return selectRandom[1];
  } else {
    return selectRandom[2];
  }
  // return randomChoice;
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  // All situations where human draws, set `score` to 0
  // if (
  //   (playerChoice == "rock" && computerChoice == "scissor") ||
  //   (playerChoice == "scissor" && computerChoice == "paper") ||
  //   (playerChoice == "paper" && computerChoice == "rock")
  // ) {
  //   // return 1; //player wins
  //   score = 1;
  // } else if (
  //   (computerChoice == "rock" && playerChoice == "scissor") ||
  //   (computerChoice == "scissor" && playerChoice == "paper") ||
  //   (computerChoice == "paper" && playerChoice == "rock")
  // ) {
  //   // return -1; //player loses
  //   score = -1;
  // } else {
  //   // return 0; //draws
  //   score = 0;
  // }
  // // All situations where human wins, set `score` to 1
  // // make sure to use else ifs here
  // // Otherwise human loses (aka set score to -1)
  // return score;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;

    // Otherwise human loses (aka set score to -1)
  } else {
    score = -1;
  }

  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // let finalresult = score;
  // let playerScore = document.getElementById("player-score");
  let resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");
  if (score == 1) {
    //wins
    resultDiv.innerText = "you won!!";
  } else if (score == -1) {
    //loses
    resultDiv.innerText = "you lose!!";
  } else {
    //draws
    resultDiv.innerText = "it's a tie!!";
  }
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  // playerScoreDiv.innerText = `${Number(playerScoreDiv.innerText) + score}`;
  playerScoreDiv.innerText = `your score: ${totalScore["playerScore"]}`;
  handsDiv.innerText = `👨‍🦰${playerChoice} vs 🤖 ${computerChoice}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  // playerScore.onclick = () => (playerScore.innerText = getResult());
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  showResult(score, playerChoice, computerChoice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  let buttons = document.querySelectorAll(".rpsButton");
  // buttons.onclick = () => onClickRPS();
  buttons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop

  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  // Add a click listener to the end game button that runs the endGame() function on click
  let endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  let result = document.getElementById("result");
  playerScore.innerText = "";
  hands.innerText = "";
  result.innerText = "";
}

playGame();
