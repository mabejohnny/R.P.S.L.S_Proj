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

class Game {
  constructor() {}

  runGame() {
    this.chooseSingleOrMultiPlayer();
    let playerOneGesture = this.playerOne.chooseGesture();
    let playerTwoGesture = this.playerTwo.chooseGesture();
    this.letsDoTheMathToFindAWinner(playerOneGesture, playerTwoGesture);
  }

  chooseSingleOrMultiPlayer() {
    let chooseSingleOrMultiPlayer = prompt(
      "Welcome to the classic game Rock Paper Scissors Lizard Spock!" +
        "\n" +
        "For single player, type: '1'" +
        "\n" +
        "For multi-player, type: '2'"
    );

    switch (chooseSingleOrMultiPlayer) {
      case "1":
        this.playerOne = new Human();
        this.playerTwo = new Computer();
        chooseSingleOrMultiPlayer = this.getTheSinglePlayersName();
        break;
      case "2":
        this.playerOne = new Human();
        this.playerTwo = new Human();
        chooseSingleOrMultiPlayer = this.getBothPlayerNames();
        break;
      default:
        this.chooseSingleOrMultiPlayer();
        break;
    }
  }

  getTheSinglePlayersName() {
    this.playerOne.name = prompt("Please enter your name:");

    alert(
      "Welcome to the game " +
        this.playerOne.name +
        "!" +
        "\n" +
        "I am comPute_R.  The artificial intelligence that will be beating you today "
    );

    this.displayRulesForSinglePlayer();
  }

  getBothPlayerNames() {
    this.playerOne.name = prompt("Enter the name of 'Player One':");
    this.playerTwo.name = prompt("Enter the name of 'Player Two':");
    alert(
      "Welcome to the game " +
        this.playerOne.name +
        "and" +
        "\n" +
        this.playerTwo.name +
        "!"
    );

    this.displayRulesForMultiPlayer();
  }

  displayRulesForSinglePlayer() {
    alert(
      "Welcome to your worst nightmare " +
        this.playerOne.name +
        "!" +
        "\n" +
        "Remember me, ahh yes, your good ol' archenemy comPute_R! Ill be your captain this evening. " +
        "\n" +
        "- Each round will be worth one point" +
        "\n" +
        "- The first player (which will be comPute_R) to win 2 out of 3 rounds will win the game!"
    );

    alert(
      "Remember! " +
        "\n" +
        "Rock crushes Scissor" +
        "\n" +
        "Scissor cuts Paper" +
        "\n" +
        "Paper covers Rock" +
        "\n" +
        "Rock crushes Lizard" +
        "\n" +
        "Lizard poisons Spock" +
        "\n" +
        "Spock Smashes Scissor" +
        "\n" +
        "Scissor decapitates Lizard" +
        "\n" +
        "Lizard eats Paper" +
        "\n" +
        "Paper disproves Spock" +
        "\n" +
        "Spock vaporizes Rock"
    );
    alert(
      "Ohh, and one more thing... comPute_R DESTROYS " +
        this.playerOne.name +
        "!"
    );
  }

  displayRulesForMultiPlayer() {
    alert(
      this.playerOne.name +
        ", you will go first." +
        "\n" +
        this.playerTwo.name +
        ", you will go second" +
        "\n" +
        "- Each round will be worth one point" +
        "\n" +
        "- The first player to win 2 out of 3 rounds will win the game!"
    );

    alert(
      "Remember! " +
        "\n" +
        "Rock crushes Scissor" +
        "\n" +
        "Scissor cuts Paper" +
        "\n" +
        "Paper covers Rock" +
        "\n" +
        "Rock crushes Lizard" +
        "\n" +
        "Lizard poisons Spock" +
        "\n" +
        "Spock Smashes Scissor" +
        "\n" +
        "Scissor decapitates Lizard" +
        "\n" +
        "Lizard eats Paper" +
        "\n" +
        "Paper disproves Spock" +
        "\n" +
        "Spock vaporizes Rock"
    );
  }

  letsDoTheMathToFindAWinner(playerOneGesture, playerTwoGesture) {
    // alert("ARE YOU READY?!?!");

    let theWinner = [];

    while (this.playerOne.score < 3 && this.playerTwo.score < 3) {
      let playerOneTotal = this.playerOne.chooseGesture(this.Gestures);
      let playerTwoTotal = this.playerTwo.chooseGesture(this.Gestures);

      if (playerOneGesture == playerTwoGesture) {
        alert("It's a tie!");
      } else if (
        playerOneGesture == "rock" ||
        (playerOneGesture == "spock" && playerTwoGesture == "scissors")
      ) {
        this.playerOne.score++;
      }
      if (
        playerOneGesture == "rock" ||
        (playerOneGesture == "scissors" && playerTwoGesture == "lizard")
      ) {
        this.playerOne.score++;
      } else if (
        playerOneGesture == "paper" ||
        (playerOneGesture == "spock" && playerTwoGesture == "rock")
      ) {
        this.playerOne.score++;
      }
      if (
        playerOneGesture == "scissors" ||
        (playerOneGesture == "lizard" && playerTwoGesture == "paper")
      ) {
        this.playerOne.score++;
      } else if (
        playerOneGesture == "paper" ||
        (playerOneGesture == "lizard" && playerTwoGesture == "spock")
      ) {
        this.playerOne.score++;
      }
      if (
        playerTwoGesture == "paper" ||
        (playerTwoGesture == "lizard" && playerOneGesture == "spock")
      ) {
        this.playerTwo.score++;
      } else if (
        playerTwoGesture == "scissors" ||
        (playerTwoGesture == "lizard" && playerOneGesture == "paper")
      ) {
        this.playerTwo.score++;
      }
      if (
        playerTwoGesture == "rock" ||
        (playerTwoGesture == "spock" && playerOneGesture == "scissors")
      ) {
        this.playerTwo.score++;
      } else if (
        playerTwoGesture == "paper" ||
        (playerTwoGesture == "spock" && playerOneGesture == "rock")
      ) {
        this.playerTwo.score++;
      }
      if (
        playerTwoGesture == "scissors" ||
        (playerTwoGesture == "rock" && playerOneGesture == "lizard")
      ) {
        this.playerTwo.score++;
      }

      this.displayGameWinner();
    }
  }

  displayGameWinner() {
    if (this.playerOne.score > this.playerTwo.score) {
      alert(this.playerOne.name + " wins this game!");
    } else {
      alert(this.playerTwo.name + " wins this game!");
    }
  }
}
class Gestures {
  constructor() {
    this.Gestures = ["rock", "paper", "scissors", "lizard", "spock"];
  }
}

class Player {
  constructor() {
    this.score = 0;
    this.name;
    this.typeOfGestures = this.typeOfGestures;
    this.Gestures = new Gestures();
  }
}

class Human extends Player {
  constructor(name) {
    super(name);
  }

  chooseGesture(chooseGesture) {
    let usersGestureChoice = prompt(
      "Choose your weapon!!!" +
        "\n" +
        "TYPE: '1' for 'rock' " +
        "\n" +
        "TYPE: '2' for 'paper' " +
        "\n" +
        "TYPE: '3' for 'scissor' " +
        "\n" +
        "TYPE: '4' for 'lizard' " +
        "\n" +
        "TYPE: '5' for 'spock' " +
        "\n" +
        "\n" +
        "* To return to the main menu, TYPE: '6' *"
    );

    switch (usersGestureChoice) {
      case "1":
        return "rock";
      case "2":
        return "paper";
      case "3":
        return "scissor";
      case "4":
        return "lizard";
      case "5":
        return "spock";
      case "6":
        this.chooseSingleOrMultiPlayer();
      default:
        this.chooseGesture();
    }
  }
}

class Computer extends Player {
  constructor(name) {
    super(name);
  }

  chooseGesture() {
    let computerChoice = Math.random();
    if (computerChoice < 0.2) {
      computerChoice = "rock";
    } else if (computerChoice <= 0.4) {
      computerChoice = "paper";
    } else if (computerChoice <= 0.6) {
      computerChoice = "scissors";
    } else if (computerChoice <= 0.8) {
      computerChoice = "lizard";
    } else {
      computerChoice = "spock";
    }

    alert("The computer chose " + computerChoice);
  }
}

let game = new Game();
game.runGame();
