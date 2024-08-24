# Guess The Number

### HTML CODE

```HTML 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../styles.css">
</head>
<body style="background-color:#212121; color:#fff;">
  <nav>
    <a href="/" aria-current="page">Home</a>
    <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
      >Youtube channel</a
    >
  </nav>
    
    <div id="wrapper">
      <h1>Number guessing game</h1>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="chaiaurcode.js"></script>
</body>
</html>

```

### CSS CODE

```CSS

html {
  font-family: sans-serif;
}

body {
  width: 300px;
  max-width: 750px;
  min-width: 480px;
  margin: 0 auto;
  background-color: #212121;
}

.lastResult {
  color: white;
  padding: 7px;
}

.guesses {
  color: white;
  padding: 7px;
}

button {
  background-color: #141414;
  color: #fff;
  width: 250px;
  height: 50px;
  border-radius: 25px;
  font-size: 30px;
  border-style: none;
  margin-top: 30px;
  /* margin-left: 50px; */
}

#subt {
  background-color: #161616;
  color: #ffffff;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  border-style: none;
  margin-top: 50px;
  /* margin-left: 75px; */
}

#guessField {
  color: #000;
  width: 250px;
  height: 50px;
  font-size: 30px;
  border-style: none;
  margin-top: 25px;

  /* margin-left: 50px; */
  border: 5px solid #6c6d6d;
  text-align: center;
}

#guess {
  font-size: 55px;
  /* margin-left: 90px; */
  margin-top: 120px;
  color: #fff;
}

.guesses {
  background-color: #7a7a7a;
}

#wrapper {
  box-sizing: border-box;
  text-align: center;
  width: 450px;
  height: 550px;
  background-color: #474747;
  color: #fff;
  font-size: 25px;
}

h1 {
  background-color: #161616;

  color: #fff;
  text-align: center;
}

p {
  font-size: 16px;
  text-align: center;
}


```
### Javascript Code

``` javascript 
let randomNumber = parseInt(Math.random() * 100 + 1); // Generates a random number between 1 and 100.
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numOfGuesses = 1;

let playGame = true;

// Event listener for the submit button to start the guessing process
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// Function to validate the user's guess
function validateGuess(guess) {
  // Check if the guess is a valid number within the range 1-100
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than or equal to 1');
  } else if (guess > 100) {
    alert('Please enter a number less than or equal to 100');
  } else {
    // If the guess is valid, store it and proceed to check if it's correct
    prevGuess.push(guess);
    if (numOfGuesses === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. The random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Function to check if the user's guess is correct, too high, or too low
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is TOO low');
  } else if (guess > randomNumber) {
    displayMessage('Number is TOO high');
  }
}

// Function to display the user's guess and update the number of remaining guesses
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numOfGuesses++;
  remainingGuesses.innerHTML = `${11 - numOfGuesses}`;
}

// Function to display a message indicating the result of the user's guess
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// Function to end the game and offer the player the option to start a new game
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h3 id="newGame"> New Game </h3>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

// Function to start a new game by resetting all values and the UI
function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numOfGuesses = 1;
    guessSlot.innerHTML = '';
    remainingGuesses.innerHTML = `${11 - numOfGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}


```