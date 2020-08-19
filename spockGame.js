"use strict";

//prompt asking whether the user is playing single or multiplayer (switchcase for multiplayer with .random for single)

//single player game:

//display the rules 
//prompt switchcase with choices (rock,paper,spock)
//counter for 1 point added for each win
//best of three
//compare the two totals of each player
//higher total gets a point
//best of three

//multiplayer:

//display the rules
//prompt switchcase (computers choice will be .random)
//display the rules 
//prompt switchcase with choices (rock,paper,spock)
//counter for 1 point added for each win
//best of three
//compare the two totals of each player
//higher total gets a point
//best of three




function playerInput() {
let numberOfPlayersInput = prompt("Welcome To The Game! + \n Enter '1' for single player + \n Enter '2' for multiplayer")

    if(numberOfPlayersInput === "1") {
        alert("You selected single player!")
        playerNameInputSingle();
        
    }
    else if(numberOfPlayersInput === "2") {
        alert("You selected multi-player!")
        playerNameInputMultiPlayer();

    }
}


function playerNameInputSingle() {
    let userNameInput = prompt("Please enter your name:")
        alert("Welcome to the game " + userNameInput + "!")

        runGameSingle(userNameInput);

}


function playerNameInputMultiPlayer() {
    let userNameInputPlayerOne = prompt("Enter player '1' name:");
    let userNameInputPlayerTwo = prompt("Enter player '2' name:");
        alert("Welcome to the game! + \n + Player 1: " + userNameInputPlayerOne + "\n" + "Player 2: " + userNameInputPlayerTwo);

        runGameMultiPlayer(userNameInputPlayerOne, userNameInputPlayerTwo);
}


class Game { 
constructor (userNameInput) {
    this.playerOne = new Player(userNameInputPlayerOne);
    this.PlayerTwo = new Player("Computer");

    
        let choices = [{
            "choice": "rock",
            "beats": ["scissors, lizard"],
            "losesTo": ["paper, Spock"],
            },{
            "choice": "paper",
            "beats": ["rock, spock"],
            "losesTo": ["scissors, lizard"],
            },{
             "choice": "scissors",
            "beats": ["paper, lizard"],
            "losesTo": ["rock, spock"],
            },{
            "choice": "lizard",
            "beats": ["spock, paper"],
            "losesTo": ["rock, scissors"],
           },{
            "choice": "spock",
            "beats": ["scissor, rock"],
            "losesTo": ["lizard, paper"],
            }];

    }
}


runGameSingle(userNameInput); {
    this.displayRulesSinglePlayer();

    let runningTotal = 0;

      for(let i = 0; i < diceArray.length; i++) {
        let result = this.rollDie(diceArray[i]);
        runningTotal += result;
      }
  
      return runningTotal;
    }
  }


}







function displayRulesSinglePlayer(userNameInput) {
        alert("Welcome to the classic game: + \n Rock Paper Scissors Lizard Spock!" + "\n" + userNameInput +"will go first" + "The computer will go second" + "\n" + "Each round will be worth one point" + "The first player to win 2 out of 3 rounds will win the game!");

        alert("Remember! " + "\n" + "Rock crushes Scissor" + "\n" + "Scissor cuts Paper"+ "\n" + "Paper covers Rock"+ "\n" + "Rock crushes Lizard"+ "\n" + "Lizard poisons Spock"+ "\n" + "Spock Smashes Scissor"+ "\n" + "Scissor decapitates Lizard"+ "\n" + "Lizard eats Paper"+ "\n" + "Paper disproves Spock"+ "\n" + "Spock vaporizes Rock")
   
    }












    displayGameWinner(); {
        if(this.playerOne.score > this.playerTwo.score) {
          alert(this.playerOne.name + " wins this game!");
        }
        else {
          alert("The computer takes this round!");
        }
      }






class Game {
    constructor() {
      this.playerOne = new Player("Mike");
      this.playerTwo = new Player("Nevin");
  
      this.dice = [];
  
      this.dice.push(new Die(4));
      this.dice.push(new Die(6));
      this.dice.push(new Die(8));
      this.dice.push(new Die(10));
      this.dice.push(new Die(12));
      this.dice.push(new Die(20));
    }
  
    runGame() {  // "main" method
      this.displayRules();
  
      while(this.playerOne.score < 3 && this.playerTwo.score < 3) {
        let playerOneTotal = this.playerOne.rollAllDice(this.dice);
        let playerTwoTotal = this.playerTwo.rollAllDice(this.dice);
  
        if(playerOneTotal > playerTwoTotal) {
          console.log(this.playerOne.name + " wins this round!");
          this.playerOne.score++;
        }
        else if(playerTwoTotal > playerOneTotal) {
          console.log(this.playerTwo.name + " wins this round!");
          this.playerTwo.score++;
        }
        else {
          console.log("Wow! You managed to tie after each rolling " + this.dice.length + " dice!");
        }
      }
      
      this.displayGameWinner();
    }
  
    displayRules() {
      console.log("Welcome to the War Dice Game!")
      console.log("Two players will roll 6 dice and total up their results.")
      console.log("The higher total will earn that player a point");
      console.log("The first player to three points will win the game!");
    }
  
    displayGameWinner() {
      if(this.playerOne.score > this.playerTwo.score) {
        console.log(this.playerOne.name + " wins this game!");
      }
      else {
        console.log(this.playerTwo.name + " wins this round!");
      }
    }
  }
  
  class Player {
    constructor(name) {
      this.score = 0;
      this.name = name;
    }
  
    rollDie(die) {
      let rollResult = die.generateRandomNumber();
      return rollResult;
    }
  
    rollAllDice(diceArray) {
      let runningTotal = 0;
  
      for(let i = 0; i < diceArray.length; i++) {
        let result = this.rollDie(diceArray[i]);
        runningTotal += result;
      }
  
      return runningTotal;
    }
  }
  
  class Die {
    constructor(numberOfSides) {
      this.numberOfSides = numberOfSides;
    }
  
    generateRandomNumber() {
      let randomNumber = Math.floor(Math.random() * this.numberOfSides) + 1;
      return randomNumber;
    }
  }
  
  ////////////////////////////
  
  let game = new Game();
  game.runGame();












//multi-player
//runGameMultiPlayer(userNameInputPlayerOne, userNameInputPlayerTwo) {      
//    this.displayRulesMultiPlayer();
//}


//function displayRulesMultiPlayer(userNameInputPlayerOne, userNameInputPlayerTwo) {
  //      console.log("Welcome to the classic game: + \n Rock Paper Scissors Lizard Spock!");
    //    console.log(userNameInputPlayerOne + "will go first! " + "\n" + userNameInputPlayerTwo + "will go second!");
  //      console.log("Each round will be worth one point");
    //    console.log("The first player to win 2 out of 3 rounds will win the game");
      //  console.log("Remember! " + "\n" + "Rock crushes Scissor" + "\n" + "Scissor cuts Paper"+ "\n" + "Paper covers Rock"+ "\n" + "Rock crushes Lizard"+ "\n" + "Lizard poisons Spock"+ "\n" + "Spock Smashes Scissor"+ "\n" + "Scissor decapitates Lizard"+ "\n" + "Lizard eats Paper"+ "\n" + "Paper disproves Spock"+ "\n" + "Spock vaporizes Rock")