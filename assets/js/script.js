document.querySelector(".start-button").addEventListener("click", function () {
    document.getElementById("show-timer").style.display = "block";
    document.querySelector(".quiz-instructions").style.display = "none";
    document.querySelector(".start-button").style.display = "none";
    showQuestion(1); // Show the first question
  });
  
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
  }
  
  function checkAnswer(questionNumber, selectedOption) {
    const correctOption = 'a';
    
    if (selectedOption === correctOption) {
      document.getElementById("correct").style.display = "block";
    } else {
      document.getElementById("incorrect").style.display = "block";
      timerCount -= 10; // Deduct 10 seconds for incorrect answer
      timerElement.textContent = timerCount; // Update timer display
    }
  
    // Move to the next question after a brief delay (you can adjust the delay as needed)
    setTimeout(function () {
      showQuestion(questionNumber + 1);
    }, 1000); // Delay of 1 second before showing next question
  }
  
  // Attach event listeners to answer buttons
  document
    .getElementById("question1")
    .querySelectorAll("button")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        checkAnswer(1, button.textContent.trim().toLowerCase());
      });
    });
  
  // Repeat the above block for question 2, question 3, and question 4
  
  



// document.querySelector(".start-button").addEventListener("click", function () {
//   document.getElementById("show-timer").style.display = "block";
//   document.querySelector(".quiz-instructions").style.display = "none";
//   document.querySelector(".start-button").style.display = "none";
// });

// document.querySelector(".start-button").addEventListener("click", function () {
//   document.querySelector("quiz-instructions").style.display = "none";
//   document.getElementById("question1").style.display = "block";
// });

document
  .getElementById("question1")
  .querySelectorAll("button")
  .forEach(function (button) {
    button.addEventListener("click", function () {
      document.getElementById("question1").style.display = "none";
      document.getElementById("question2").style.display = "block";
    });
  });

document
  .getElementById("question2")
  .querySelectorAll("button")
  .forEach(function (button) {
    button.addEventListener("click", function () {
      document.getElementById("question2").style.display = "none";
      document.getElementById("question3").style.display = "block";
    });
  });

document
  .getElementById("question3")
  .querySelectorAll("button")
  .forEach(function (button) {
    button.addEventListener("click", function () {
      document.getElementById("question3").style.display = "none";
      document.getElementById("question4").style.display = "block";
    });
  });

document
  .getElementById("question4")
  .querySelectorAll("button")
  .forEach(function (button) {
    button.addEventListener("click", function () {
      // Continue with what happens after the last question
    });
  });

var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-left");
var startButton = document.querySelector(".start-button");

var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var showQuestion = false;
var timer;
var timerCount;

// startQuiz is called when the start button is clicked
function startQuiz() {
  showQuestion = true;
  timerCount = 60;
  //startButton.disabled = true;  will need to change this to hide button and text when start button is pushed and unhide first question.
  //renderBlanks()  could change this to a show questions function that is called.
  startTimer();
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// I borrowed this function from the mini project we did and tweaked it to work.
function startTimer() {
  // Sets timer
  timer = setInterval(
    function () {
      timerCount--;
      timerElement.textContent = timerCount;
      console.log(timerElement);
      // if (timerCount >= 0)
      //     {
      //         // Tests if win condition is met
      //         if (isWin && timerCount > 0) {
      // Clears interval and stops timer
      //         clearInterval(timer);
      //         winGame();
      //     }
    },
    // Tests if time has run out
    //if (timerCount === 0)
    //    {
    // Clears interval
    //        clearInterval(timer);
    //loseGame();
    //    }
    1000
  );
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);
