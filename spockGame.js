"use strict";

//prompt asking whether the user is playing single or multiplayer (switchcase for multiplayer with .random for single)

//single player game:
//welcome! plus ask for name to pass down
//display the rules 
//prompt choices (rock,paper,spock)
//computer random choice 
//compare user choice/random choice
//whoever wins that rount alert
//add counter for winner
//loop back and do it again
//best of three
//counter for 1 point added for each win


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


//function playerNameInputMultiPlayer() {
//    let userNameInputPlayerOne = prompt("Enter player '1' name:");
//    let userNameInputPlayerTwo = prompt("Enter player '2' name:");
//        alert("Welcome to the game! + \n + Player 1: " + userNameInputPlayerOne + "\n" + "Player 2: " + userNameInputPlayerTwo);

//        runGameMultiPlayer(userNameInputPlayerOne, userNameInputPlayerTwo);
//}

//function displayRulesMultiPlayer(userNameInputPlayerOne, userNameInputPlayerTwo) {
//      console.log("Welcome to the classic game: + \n Rock Paper Scissors Lizard Spock!");
//    console.log(userNameInputPlayerOne + "will go first! " + "\n" + userNameInputPlayerTwo + "will go second!");
//      console.log("Each round will be worth one point");
//    console.log("The first player to win 2 out of 3 rounds will win the game");
//  console.log("Remember! " + "\n" + "Rock crushes Scissor" + "\n" + "Scissor cuts Paper"+ "\n" + "Paper covers Rock"+ "\n" + "Rock crushes Lizard"+ "\n" + "Lizard poisons Spock"+ "\n" + "Spock Smashes Scissor"+ "\n" + "Scissor decapitates Lizard"+ "\n" + "Lizard eats Paper"+ "\n" + "Paper disproves Spock"+ "\n" + "Spock vaporizes Rock")

//        choices = [{
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
    constructor(userNameInput){
    this.playerOne = new Player(userNameInput);
    this.PlayerTwo = new Player("Computer");

}


runGame() { //"main" method
    this.playerNameInputSingle();
    this.displayRulesSinglePlayer(userNameInput);
    this.chooseTheGestureToBeUsed(userNameInput)

}


playerNameInputSingle() {
    let userNameInput = prompt("Welcome to the classic game: + \n Rock Paper Scissors Lizard Spock!" + "\n" + "Please enter your name:")
        alert("Welcome to the game " + userNameInput + "!")

}


displayRulesSinglePlayer(userNameInput) {
         alert("Welcome to your own worst nightmare " + userNameInput + "!" + "\n" +"You will go first, and the computer second" + "\n" + "- Each round will be worth one point" + "\n" + "- The first player to win 2 out of 3 rounds will win the game!");
    
         alert("Remember! " + "\n" + "Rock crushes Scissor" + "\n" + "Scissor cuts Paper"+ "\n" + "Paper covers Rock"+ "\n" + "Rock crushes Lizard"+ "\n" + "Lizard poisons Spock"+ "\n" + "Spock Smashes Scissor"+ "\n" + "Scissor decapitates Lizard"+ "\n" + "Lizard eats Paper"+ "\n" + "Paper disproves Spock"+ "\n" + "Spock vaporizes Rock")
   
    }

}


class Player {
    constructor(name){
        this.score = 0;
        this.name = name;
        this.typeOfGestures = this.typeOfGestures
        this.Gestures=[new Gestures("rock"), new Gestures("paper"), new Gestures("scissors"), new Gestures("lizard"), new Gestures("spock")]   
    
    }
    
    
    generateRandomGestureForComputer() {
        let randomGesture = this.Gestures[Math.floor(Math.random() * this.Gestures.length)];{
        return randomGesture;

    }
}

    chooseTheGestureToBeUsed() {
        let userGestureAlert = prompt(userNameInput + "!"+ "Choose your weapon!!!" + "\n" + "TYPE: 1 for 'rock' " + "\n" + "TYPE: 2 for 'paper' " + "\n" + "TYPE: 3 for 'scissor' " + "\n" + "TYPE: 4 for 'lizard' " + "\n" + "TYPE: 5 for 'spock' " + "\n" + "\n" + "* To return to the main menu, TYPE: 6 *");
        let userGestureChoice;
        
        switch(userGestureChoice)
        {
            case "1":
                let theyPickedRock  = letsDoTheMathToFindAWinner(userGestureChoice);
                break;
            case "2":
                let theyPickedPaper  = letsDoTheMathToFindAWinner(userGestureChoice);
                break;
            case "3":
                let theyPickedscissor  = letsDoTheMathToFindAWinner(userGestureChoice);
                break;
            case "4":
                let theyPickedLizard  = letsDoTheMathToFindAWinner(userGestureChoice);
                break;
            case "5":
                let theyPickedSpock  = letsDoTheMathToFindAWinner(userGestureChoice);
                break;
            case "6":
                //return to main menu
            default:
                alert("Please try again!");
                this.chooseTheGestureToBeUsed();
    
    
        }
    }
            
}

class Computer extends Player {
    constructor(name){
    super(name);

    }

    letsDoTheMathToFindAWinner(userGestureChoice, randomGesture) {


    }



}


let game = new Game();
game.runGame();




















