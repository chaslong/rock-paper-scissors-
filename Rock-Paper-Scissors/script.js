//* Selecting all elments needed.
//*
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result; 
let playerScore;
let computerScore;




//*ForEach() loops an array method through an array. AKA "CALLBACK FUNCTION"
choiceBtns.forEach(button => button.addEventListener("click", () => {


    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));






function computerTurn(){


    const randNum = Math.floor(Math.random() * 3) + 1;


    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
}
function checkWinner(){
    let result;
  
    if (player === computer) {
      result = "Draw!";
    }
    else if (computer === "ROCK") {
      result = (player === "PAPER") ? "You Win!" : "You Lose!";
    }
    else if (computer === "PAPER") {
      result = (player === "SCISSORS") ? "You Win!" : "You Lose!";
    }
    else if (computer === "SCISSORS") {
      result = (player === "ROCK") ? "You Win!" : "You Lose!";
    }
    
    return result;
  }