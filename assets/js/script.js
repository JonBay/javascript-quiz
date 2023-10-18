var startButton = document.querySelector(".start-button");
var timerCount;
var timer;
var timerElement = document.querySelector(".timer-left");
var selectedOption; 


var win = document.querySelector(".win");
var lose = document.querySelector(".lose");



// startQuiz is called when the start button is clicked
function startQuiz() {
  timerCount = 60;
  startTimer();
  firstQuestion();
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// I borrowed this function from the mini project we did and tweaked it to work.
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    console.log(timerElement);

    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

function firstQuestion() {
  document.getElementById("show-timer").style.display = "block";
  document.querySelector(".quiz-instructions").style.display = "none";
  document.querySelector(".start-button").style.display = "none";
  showQuestion(1); // Show the first question
}


function showQuestion(questionNumber) {
  // Hide all questions
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`question${i}`).style.display = "none";
  }

  // Show the specified question
  document.getElementById(`question${questionNumber}`).style.display = "block";
  document.getElementById(`question${questionNumber}`).style.textAlign = "center";

  // Clear any previous correct/incorrect messages
  document.getElementById("correct").style.display = "none";
  document.getElementById("incorrect").style.display = "none";

  attachEventListeners(questionNumber);
}


function attachEventListeners(questionNumber) {
  document.getElementById(`question${questionNumber}`).querySelectorAll("button")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        const isCorrect = button.getAttribute("data-correct") === "true";

        if (questionNumber === 1) {
          if (isCorrect) {
            document.getElementById("correct").style.display = "block";
            document.getElementById("correct").style.textAlign = "center";
            setTimeout(function () {
              questionNumber ++; 
              showQuestion(questionNumber);
            }, 1000);  
          } else {
            document.getElementById("incorrect").style.display = "block";
            document.getElementById("incorrect").style.textAlign = "center";
            timerCount -= 10; // Deduct 10 seconds for incorrect answer
            timerElement.textContent = timerCount; // Update timer display
            setTimeout(function () {
              questionNumber ++; 
              showQuestion(questionNumber);
            }, 1000); 
          }
        } else if (questionNumber === 2) {
          if (isCorrect) {
            document.getElementById("correct").style.display = "block";
            document.getElementById("correct").style.textAlign = "center";
            setTimeout(function () {
              questionNumber ++; 
              showQuestion(questionNumber);
            }, 1000); 
          } else {
            document.getElementById("incorrect").style.display = "block";
            document.getElementById("incorrect").style.textAlign = "center";
            timerCount -= 10; // Deduct 10 seconds for incorrect answer
            timerElement.textContent = timerCount; // Update timer display
            setTimeout(function () {
              questionNumber ++; 
              showQuestion(questionNumber);
            }, 1000); 
          }
        } else if (questionNumber === 3) {
          if (isCorrect) {
            document.getElementById("correct").style.display = "block";
            document.getElementById("correct").style.textAlign = "center";
            setTimeout(function () {
              questionNumber ++; 
              showQuestion(questionNumber);
            }, 1000); 
          } else {
            document.getElementById("incorrect").style.display = "block";
            document.getElementById("incorrect").style.textAlign = "center";
            timerCount -= 10; // Deduct 10 seconds for incorrect answer
            timerElement.textContent = timerCount; // Update timer display
            setTimeout(function () {
              questionNumber ++; 
              showQuestion(questionNumber);
            }, 1000); 
          }
        } else if (questionNumber === 4) {
          if (isCorrect) {
            document.getElementById("correct").style.display = "block";
            document.getElementById("correct").style.textAlign = "center";
            setTimeout(function () {
              questionNumber ++; 
              showQuestion(questionNumber);
            }, 1000); 
          } else {
            document.getElementById("incorrect").style.display = "block";
            document.getElementById("incorrect").style.textAlign = "center";
            timerCount -= 10; // Deduct 10 seconds for incorrect answer
            timerElement.textContent = timerCount; // Update timer display
            setTimeout(function () {
              questionNumber ++; 
              showQuestion(questionNumber);  // instead of showquestion here need function to end game
            }, 1000); 
          }
        }
      });
    });
}

startButton.addEventListener("click", startQuiz);



