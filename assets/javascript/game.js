window.addEventListener("DOMContentLoaded", function(){

  let words =["maple", "canoe", "wolf", "lake", "forest", "stream", "campfire", "bear", "yurt"];
  let randomWord;

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
  
  let generateWord = function() {
    // Select the random word from words array and then split the selected word into an array of it's letters
    randomWord = words[Math.floor(Math.random() * words.length)];

    letterArray = randomWord.split("");
    //To test split of random word
    console.log(letterArray);
    
    // Display blank lines for each letter in the word
    for (var i = 0; i < letterArray.length; i++) {
      answer[i] = ("_");
    }

    document.querySelector("#numberWins").innerHTML = wins;
  };

  document.querySelector("#lives").innerHTML = lives;

  // Create a function to create a string from the answer array
  let displayAnswerString = function() {
    // To turn the answer array into a string
    answerString = answer.join(' ');
    // To display the answer string on the page
    document.querySelector("#randomWord").innerHTML = answerString;
  };

  generateWord();

  displayAnswerString();

  // define what happens when a key is pressed          
  document.onkeyup = function(event) {
    
    letter = String.fromCharCode(event.which).toLowerCase();
    
    for (var k = 0; k < letterArray.length; k++) {

      if (letter === letterArray[k]) {
        console.log(letterArray[k]);
        index = letterArray.indexOf(letter);
        answer.splice(index, 1, letter);
        displayAnswerString();  
      }    
    }

    if (letterArray.includes(letter)) {
      found = true;
      console.log("Found is assigned true");
    } else {
      found = false;
      console.log("Found is assigned false");
    }

    console.log(answer);

    // If the letter wasn't found after looping and it wasn't guessed already, add it to the list of keys pressed and reduce the lives by 1
    if (!found && lives > 0 && keysPressed.indexOf(letter) === -1) {
      lives = lives - 1;
      document.querySelector("#lives").innerHTML = lives;
      keysPressed.push(letter);
      keysPressedString = keysPressed.join(' ');
      document.querySelector("#lettersGuessed").innerHTML = keysPressedString;
    }

    // Create a function to reset the game when a player wins or loses
    let resetGame = function() {
      console.log("Yippee!");
      lives = 10;
      answer = [];
      keysPressed = [];
      generateWord();
      displayAnswerString();
      document.querySelector("#lives").innerHTML = lives;
      document.querySelector("#gameOver").innerHTML = " ";
      document.querySelector("#lettersGuessed").innerHTML = " ";
    };

    // If the player has no lives left, display the word and tell them they lose, then reset the game after a time delay
    if (lives === 0) {
      setTimeout(function() {
        resetGame();
      }, 3500);
      document.querySelector("#lives").innerHTML = "Sorry! You're out of lives!";
      document.querySelector("#gameOver").innerHTML = "You lose! The word was " + randomWord + ".";
    }

    // If all letters have been guessed correctly, update the display to say "you win"
    if (lives !== 0 && randomWord === answer.join("")) {
      document.querySelector("#numberWins").innerHTML = wins + 1;
      wins = wins + 1;
      setTimeout(function() {
        resetGame();
      }, 3500);
        document.querySelector("#gameOver").innerHTML = "You win!";
    }
  };
});
