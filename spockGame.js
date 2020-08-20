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

//Get the computers choice

//let computerChoice = Math.random();

//if (computerChoice < 0.2) {
//    computerChoice = "rock";
//} else if (computerChoice <= 0.4) {
//    computerChoice = "paper";
//} else if (computerChoice <= 0.6) {
//    computerChoice = "scissors";
//} else if (computerChoice <= 0.8) {
//    computerChoice = "lizard";
//} else {
//    computerChoice = "spock";
//}





//function playerInput() {
//let numberOfPlayersInput = prompt("Welcome To The Game! + \n Enter '1' for single player + \n Enter '2' for multiplayer")
//
//    if(numberOfPlayersInput === "1") {
//        alert("You selected single player!")
//        playerNameInputSingle();
        
//    }
//    else if(numberOfPlayersInput === "2") {
//        alert("You selected multi-player!")
//        playerNameInputMultiPlayer();

//    }
//}


//function playerNameInputSingle() {
//    let userNameInput = prompt("Please enter your name:")
//        alert("Welcome to the game " + userNameInput + "!")

//        runGameSingle(userNameInput);

//}


//function playerNameInputMultiPlayer() {
//    let userNameInputPlayerOne = prompt("Enter player '1' name:");
//    let userNameInputPlayerTwo = prompt("Enter player '2' name:");
//        alert("Welcome to the game! + \n + Player 1: " + userNameInputPlayerOne + "\n" + "Player 2: " + userNameInputPlayerTwo);

//        runGameMultiPlayer(userNameInputPlayerOne, userNameInputPlayerTwo);
//}

//function displayRulesSinglePlayer(userNameInput) {
//    alert("Welcome to the classic game: + \n Rock Paper Scissors Lizard Spock!" + "\n" + userNameInput +"will go first" + "The computer will go second" + "\n" + "Each round will be worth one point" + "The first player to win 2 out of 3 rounds will win the game!");

//    alert("Remember! " + "\n" + "Rock crushes Scissor" + "\n" + "Scissor cuts Paper"+ "\n" + "Paper covers Rock"+ "\n" + "Rock crushes Lizard"+ "\n" + "Lizard poisons Spock"+ "\n" + "Spock Smashes Scissor"+ "\n" + "Scissor decapitates Lizard"+ "\n" + "Lizard eats Paper"+ "\n" + "Paper disproves Spock"+ "\n" + "Spock vaporizes Rock")

//function displayRulesMultiPlayer(userNameInputPlayerOne, userNameInputPlayerTwo) {
//      console.log("Welcome to the classic game: + \n Rock Paper Scissors Lizard Spock!");
//    console.log(userNameInputPlayerOne + "will go first! " + "\n" + userNameInputPlayerTwo + "will go second!");
//      console.log("Each round will be worth one point");
//    console.log("The first player to win 2 out of 3 rounds will win the game");
//  console.log("Remember! " + "\n" + "Rock crushes Scissor" + "\n" + "Scissor cuts Paper"+ "\n" + "Paper covers Rock"+ "\n" + "Rock crushes Lizard"+ "\n" + "Lizard poisons Spock"+ "\n" + "Spock Smashes Scissor"+ "\n" + "Scissor decapitates Lizard"+ "\n" + "Lizard eats Paper"+ "\n" + "Paper disproves Spock"+ "\n" + "Spock vaporizes Rock")

//        this.choices = [{
//            "choice": "rock",
//            "beats": ["scissors, lizard"],
//            "losesTo": ["paper, Spock"],
//            },{
//            "choice": "paper",
//            "beats": ["rock, spock"],
//            "losesTo": ["scissors, lizard"],
//            },{
//             "choice": "scissors",
//            "beats": ["paper, lizard"],
//            "losesTo": ["rock, spock"],
//            },{
//            "choice": "lizard",
//            "beats": ["spock, paper"],
//            "losesTo": ["rock, scissors"],
//           },{
//            "choice": "spock",
//            "beats": ["scissor, rock"],
//            "losesTo": ["lizard, paper"],
//            }];

//    }

class Game {
    constructor(){
    this.playerOne = new Player(userNameInputPlayerOne);
    this.PlayerTwo = new Player("Computer");

        this.Choices = [];

        this.choices.push(new Gestures("rock"));
        this.choices.push(new Gestures("paper"));
        this.choices.push(new Gestures("scissors"));
        this.choices.push(new Gestures("lizard"));
        this.choices.push(new Gestures("spock"));

       

    }

}

class Player {
    constructor(userNameInput){
        this.score = 0;
        this.userNameInput = userNameInput;
    }

    }
  

class Gestures {
    constructor(typeOfGensture){
        this.typeOfGensture = this.typeOfGensture
    }

}
  
let game = new Game();

console.log('game', game);




















