// Define global variables needed for game
let randomWord;
let answerString;
let lives = 10;
let wins = 0;
let letter;
let keyPressedString;
let gameOver = false;
let index;

// Define the arrays
let words =["maple", "canoe", "wolf", "lake", "forest"];
let wordArray = [];
let answer = [];
let keysPressed = [];

// Select the random words from words array and then split the selected word into an array of it's letters
randomWord = words[Math.floor(Math.random() * words.length)];
wordArray = randomWord.split("");
//To test split of random word REMOVE WHEN FINISHED
console.log(wordArray);

// To select random word from the  and display blank lines for each letter in the word
for (var i = 0; i < wordArray.length; i++) {
  answer[i] = ("_ ");
}

// Create a function to create a string from the answer array
let displayAnswerString = function() {
  // To turn the answer array into a string
  answerString = answer.join('');
  // To display the answer string on the page
  document.querySelector("#randomWord").innerHTML = answerString;
};

displayAnswerString();

document.querySelector("#lives").innerHTML = lives;


let startGame = function() {
  // define what happens when a key is pressed          
  document.onkeyup = function(event) {
    
    letter = String.fromCharCode(event.which).toLowerCase();
    
    keysPressed.push(letter);
    
    if (wordArray.indexOf(letter) !== -1) {
      
      index = wordArray.indexOf(letter);
      answer.splice(index, 1, letter);
      console.log(index);
      displayAnswerString();
      
    } else {
      keyPressedString = keysPressed.join(' ');
      document.querySelector("#lettersGuessed").innerHTML = keyPressedString;
      lives = lives - 1;
      document.querySelector("#lives").innerHTML = lives;
    }
    
    if (lives === 0) {
      gameOver = true;
      document.querySelector("#gameOver").innerHtml = "Sorry, you lose!";
    }
    
    if (answerString === randomWord) {
      gameOver = true;
    }
    // return gameOver;
  }; 
  
};

if (gameOver === false) {
  startGame();

} else if (gameOver === true && answerString === randomWord) {
  console.log("You win");
  wins = wins + 1;
} else {
  console.log("You lost");
  
}


