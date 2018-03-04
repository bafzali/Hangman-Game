// Define the array of words to choose from
let words =["maple", "canoe", "wolf", "lake", "forest"];
let wordArray = [];

// Select the random words from words array
let randomWord = words[Math.floor(Math.random() * words.length)];

wordArray = randomWord.split("");

//To test split of random word REMOVE WHEN FINISHED
console.log(wordArray);

// Define global variables needed for game
var answerString;
let lives = 10;
let wins = 0;
var answer = [];
var keyPressed = [];
var letter;

    // To select random word from the  and display blank lines for each letter in the word
    for (var i = 0; i < wordArray.length; i++) {
      answer[i] = ("_ ");
    }
  
    // To turn the answer array into a string
    answerString = answer.join('');
  
    // To display the answer string on the page
    document.querySelector("#randomWord").innerHTML = answerString;

    //To display the total lives:
    document.querySelector("#lives").innerHTML = lives;
       
    // define what happens when a key is pressed
    while (lives > 0) {
      
      document.onkeyup = function(event) {

        letter = String.fromCharCode(event.which).toLowerCase();

        keyPressed.push(letter);

        if (wordArray.indexOf(letter) !== -1) {

          let index = wordArray.indexOf(letter);
          answer.splice(index, 1, letter);
          answerString = answer.join('');
          document.querySelector("#randomWord").innerHTML = answerString; 

          // return answer;
    
        } else {
    
          keyPressedString = keyPressed.join(' ');
          document.querySelector("#lettersGuessed").innerHTML = keyPressedString;
          document.querySelector("#lives").innerHTML = lives - 1;
    
        }

      // return letter;
      }
    } 

    // let letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
