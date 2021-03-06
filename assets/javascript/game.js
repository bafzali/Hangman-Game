window.addEventListener("DOMContentLoaded", function(){

  let words =["maple", "canoe", "wolf", "lake", "forest", "stream", "campfire", "bear", "yurt", "snow", "boreal", "conifer"];
  let randomWord;
  let previousWord;

  let letter;
  let letterArray = [];
  let answer = [];
  let answerString;
  let keysPressed = [];
  let keysPressedString;

  let lives = 10;
  let wins = 0;
  let index;
  let found = false;

  // Display the total number of wins and lives (guesses) left
  document.querySelector("#numberWins").innerHTML = wins;
  document.querySelector("#lives").innerHTML = lives;

  // Define a function that chooses a random word from the words array and regenerates another word if the word was just used
  let chooseWord = function() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    if (randomWord === previousWord) {
      randomWord = words[Math.floor(Math.random() * words.length)];
    }
  };
  
  // Define a function that selects the random word from the words array and then splits the selected word into an array of it's letters
  let generateWord = function() {
    chooseWord();
    letterArray = randomWord.split("");
    // console.log(letterArray);
    // Create blank lines for each letter in the word
    for (var i = 0; i < letterArray.length; i++) {
      answer[i] = ("_");
    }
  };

  // Define a function to create a string from the answer array
  let displayAnswerString = function() {
    // Turn the answer array into a string separated by spaces
    answerString = answer.join(' ');
    // Display the answer string on the page
    document.querySelector("#randomWord").innerHTML = answerString;
  };

  generateWord();

  displayAnswerString();

  // define what happens when a key is pressed          
  document.onkeyup = function(event) {
    
    letter = String.fromCharCode(event.which).toLowerCase();
    
    for (var k = 0; k < letterArray.length; k++) {

      if (letter === letterArray[k]) {
        // console.log(letterArray[k]);
        index = letterArray.indexOf(letter);
        answer.splice(index, 1, letter);
        displayAnswerString();  
      }    
    }

    if (letterArray.includes(letter)) {
      found = true;
      // console.log("Found is assigned true");
    } else {
      found = false;
      // console.log("Found is assigned false");
    }
    // console.log(answer);

    // If the letter wasn't found after looping through the letterArray and it wasn't guessed already, add it to the list of keys pressed and reduce the lives by 1
    if (!found && lives > 0 && keysPressed.indexOf(letter) === -1) {
      lives = lives - 1;
      document.querySelector("#lives").innerHTML = lives;
      keysPressed.push(letter);
      keysPressedString = keysPressed.join(' ');
      document.querySelector("#lettersGuessed").innerHTML = keysPressedString;
    }

    // Create a function to reset the game when a player wins or loses
    let resetGame = function() {
      previousWord = randomWord;
      console.log(previousWord); // make sure the correct word is assigned to previousWord so it won't be repeated
      lives = 10;
      answer = [];
      keysPressed = [];
      generateWord();
      displayAnswerString();
      document.querySelector("#lives").innerHTML = lives;
      document.querySelector("#gameOver").innerHTML = " ";
      document.querySelector("#lettersGuessed").innerHTML = " ";
      document.body.style.backgroundImage = "url('./assets/images/green-goblin.png')";
    };

    // If the player has no lives left, display the word, tell them they lose, wait and then generate a new word
    if (lives === 0) {
      setTimeout(function() {
        resetGame();
      }, 4000);
      document.querySelector("#lives").innerHTML = "Sorry! You're out of lives!";
      document.querySelector("#gameOver").innerHTML = "You lose! The word was " + randomWord + ".";
      document.body.style.backgroundImage = "url('./assets/images/nyc-candy.png')";
    }

    // If all letters have been guessed correctly, update the display to say "you win" and then generate a new word
    if (lives !== 0 && randomWord === answer.join("")) {
      document.querySelector("#numberWins").innerHTML = wins + 1;
      wins = wins + 1;
      setTimeout(function() {
        resetGame();
      }, 4000);
        document.querySelector("#gameOver").innerHTML = "You win!";
        document.body.style.backgroundImage = "url('./assets/images/ripples.jpg')";
      }
  };
});
