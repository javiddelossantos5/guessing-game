const randomNum = Math.floor(Math.random() * 21);
const textInput = document.getElementById('guessNumber');
const score = document.getElementById('score');
let counter = 10

const guess = () => {


  //Gets the user value and compares it to the random Number
  let userGuess = document.getElementById('userGuess').value;

  if(randomNum === Number(userGuess)) {
    console.log('You Win');
    textInput.textContent = 'You Win!!!!!'
    textInput.style.color = "green";
    userGuess.value = '';
    counter --
    score.textContent = `Current Score: ${counter}`
  } else if (Number(userGuess) > Number(randomNum)) {
    console.log('You Guessed too High');
    textInput.textContent = 'You Guessed Too High!'
    textInput.style.color = "red";
    userGuess.value = '';
    counter --
    score.textContent = `Current Score: ${counter}`
  } else if (userGuess < randomNum) {
    console.log('You Guessed too Low');
    textInput.textContent = 'You Guessed Too Low!'
    textInput.style.color = "red";
    userGuess.value = '';
    counter --
    score.textContent = `Current Score: ${counter}`
  }
  console.log(randomNum, userGuess);
  console.log(counter);
  
  if(userGuess > 20) {
    textInput.textContent = 'You Can Only Guess Up To Number 20';
  } else if (userGuess < 0) {
    textInput.textContent = 'You Cannot Go lower than 0';
  }

  if(counter === 0) {
    textInput.textContent = 'You Lost Game Over';
  }
}

