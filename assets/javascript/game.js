// Define the array of words to choose from and the random word variable
let words =["moose", "maple tree", "canoe paddle", "wolf pack", ""];

// Define the letters of the alphabet
let wordArray = [];

let letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let randomWord = words[Math.floor(Math.random() * words.length)];

wordArray = randomWord.split("");
console.log(wordArray);

var answerString;
var lives;
var counter = 0;
var answer = [];
var keyPressed = [];

// function to display blanks for each word
// function begin() {

  for (var i = 0; i < wordArray.length; i++) {

    answer[i] = ("_");
    answerString = answer.join('');
    document.getElementById('#currentWord').innerHTML = answerString;

  }
  

// }

document.onkeyup = function(event) {
  if (keyPressed === letterArray[] && keyPressed === wordArray[]) {
    
  }
}

// for (j = 0, j < wordArray, j++) {
//   console.log("j");
// }