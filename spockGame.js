"use strict";

//prompt asking whether the user is playing single or multiplayer (switchcase for multiplayer)

//single player game:
//welcome! plus ask for name to pass down
//display the rules
//display rules multi
//prompt choices (rock,paper,spock)
//computer random choice
//compare user choice/random choice
//whoever wins that rount alert
//add counter for winner
//loop back and do it again
//best of three
//counter for 1 point added for each win

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
        " and " +
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
        "" +
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
    let playerOneTotal = this.playerOne.chooseGesture(this.Gestures);
    let playerTwoTotal = this.playerTwo.chooseGesture(this.Gestures);
    while (this.playerOne.score < 3 && this.playerTwo.score < 3) {
      if (playerOneGesture === playerTwoGesture) {
        return (
          "The computer also chose " +
          playerTwoGesture +
          "\n" +
          "The result is a tie! :|"
        );
      } else if (playerOneGesture === "rock") {
        if (playerTwoGesture === "paper") {
          alert("paper covers rock...You Lose :(");
        } else if (playerTwoGesture === "scissors") {
          alert("rock crushes scissors...You Win! :)");
        } else if (playerTwoGesture === "lizard") {
          alert("rock crushes lizard...You Win!");
        } else {
          alert("spock vaporizes rock...You Lose :(");
        }
      } else if (playerOneGesture === "paper") {
        if (playerTwoGesture === "rock") {
          alert("paper covers rock...You Win! :)");
        } else if (playerTwoGesture === "scissors") {
          alert("scissors cut paper...You Lose :(");
        } else if (playerTwoGesture === "lizard") {
          alert("lizard eats paper...You Lose :(");
        } else {
          alert("paper disproves spock <br> You Win! :)");
        }
      } else if (playerOneGesture === "scissors") {
        if (playerTwoGesture === "rock") {
          alert("rock crushes scissors...You Lose :(");
        } else if (playerTwoGesture === "paper") {
          alert("scissors cut paper...You Win! :)");
        } else if (playerTwoGesture === "lizard") {
          alert("scissors decapitate lizard...You Win! :)");
        } else {
          alert("spock smashes scissors...You Lose :(");
        }
      } else if (playerOneGesture === "lizard") {
        if (playerTwoGesture === "rock") {
          alert("rock crushes lizard...You Lose :(");
        } else if (playerTwoGesture === "paper") {
          alert("lizard eats paper...You Win! :)");
        } else if (playerTwoGesture === "scissors") {
          alert("scissors decapitate lizard...You Lose :(");
        } else {
          alert("lizard poisons spock...You Win! :)");
        }
      } else if (playerOneGesture === "spock") {
        if (playerTwoGesture === "rock") {
          alert("spock vaporizes rock...You Win! :)");
        } else if (playerTwoGesture === "paper") {
          alert("paper disproves spock...You Lose :(");
        } else if (playerTwoGesture === "scissors") {
          alert("spock smashes scissors...You Win! :) ");
        } else {
          alert("lizard poisons spock...You Lose :(");
        }
        this.displayGameWinner();
      }
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
        game.runGame();
      default:
        this.chooseGesture();
    }
  }
}

class Computer extends Player {
  constructor(name) {
    super(name);
    this.name = "comPut_R";
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
    return computerChoice;
  }
}

let game = new Game();
game.runGame();
