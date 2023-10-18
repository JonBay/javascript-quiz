var startButton = document.querySelector(".start-button");
var timerCount;
var timer;
var timerElement = document.querySelector(".timer-left");
var selectedOption;
var numberCorrect = 0;

// startQuiz is called when the start button is clicked
function startQuiz() {
  timerCount = 60;
  startTimer();
  firstQuestion();
}

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    console.log(timerElement);

    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      outOfTime();
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
  document.getElementById(`question${questionNumber}`).style.textAlign =
    "center";

  // Clear any previous correct/incorrect messages
  document.getElementById("correct").style.display = "none";
  document.getElementById("incorrect").style.display = "none";

  attachEventListeners(questionNumber);
}

function attachEventListeners(questionNumber) {
  document
    .getElementById(`question${questionNumber}`)
    .querySelectorAll("button")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        const isCorrect = button.getAttribute("data-correct") === "true";

        if (questionNumber === 1) {
          if (isCorrect) {
            document.getElementById("correct").style.display = "block";
            document.getElementById("correct").style.textAlign = "center";
            setTimeout(function () {
              questionNumber++;
              numberCorrect++;
              showQuestion(questionNumber);
            }, 1000);
          } else {
            document.getElementById("incorrect").style.display = "block";
            document.getElementById("incorrect").style.textAlign = "center";
            timerCount -= 10; // Deduct 10 seconds for incorrect answer
            timerElement.textContent = timerCount; // Update timer display
            setTimeout(function () {
              questionNumber++;
              showQuestion(questionNumber);
            }, 1000);
          }
        } else if (questionNumber === 2) {
          if (isCorrect) {
            document.getElementById("correct").style.display = "block";
            document.getElementById("correct").style.textAlign = "center";
            setTimeout(function () {
              questionNumber++;
              numberCorrect++;
              showQuestion(questionNumber);
            }, 1000);
          } else {
            document.getElementById("incorrect").style.display = "block";
            document.getElementById("incorrect").style.textAlign = "center";
            timerCount -= 10; // Deduct 10 seconds for incorrect answer
            timerElement.textContent = timerCount; // Update timer display
            setTimeout(function () {
              questionNumber++;
              showQuestion(questionNumber);
            }, 1000);
          }
        } else if (questionNumber === 3) {
          if (isCorrect) {
            document.getElementById("correct").style.display = "block";
            document.getElementById("correct").style.textAlign = "center";
            setTimeout(function () {
              questionNumber++;
              numberCorrect++;
              showQuestion(questionNumber);
            }, 1000);
          } else {
            document.getElementById("incorrect").style.display = "block";
            document.getElementById("incorrect").style.textAlign = "center";
            timerCount -= 10; // Deduct 10 seconds for incorrect answer
            timerElement.textContent = timerCount; // Update timer display
            setTimeout(function () {
              questionNumber++;
              showQuestion(questionNumber);
            }, 1000);
          }
        } else if (questionNumber === 4) {
          if (isCorrect) {
            document.getElementById("correct").style.display = "block";
            document.getElementById("correct").style.textAlign = "center";
            setTimeout(function () {
              questionNumber++;
              numberCorrect++;
              endQuiz ();
            }, 1000);
          } else {
            document.getElementById("incorrect").style.display = "block";
            document.getElementById("incorrect").style.textAlign = "center";
            timerCount -= 10; // Deduct 10 seconds for incorrect answer
            timerElement.textContent = timerCount; // Update timer display
            setTimeout(function () {
              questionNumber++;
              endQuiz ();
            }, 1000);
          }
        }
      });
    });
}

function endQuiz() {
  document.getElementById(`question4`).style.display = "none";
  document.getElementById("correct").style.display = "none";
  document.getElementById("incorrect").style.display = "none";
  document.getElementById("quiz-over").style.display = "block";
  document.getElementById("quiz-over").style.textAlign = "center";
  document.getElementById("number-correct").style.display = "block";
  document.getElementById("number-correct").style.textAlign = "center";
  document.getElementById("number-correct").textContent = `You got ${numberCorrect} correct! `;
  clearInterval(timer);
  const timeTaken = 60 - timerCount; // Calculate time taken
  document.getElementById("store-score").style.display = "block";
  document.getElementById("store-score").style.textAlign = "center";
  document.getElementById("initials").style.display = "block";
  document.getElementById("initials").style.margin = "auto";
  document.getElementById("submit").style.display = "block";
  document.getElementById("submit").style.margin = "auto";
  const userInitials = document.getElementById("initials").value;
  storeUserData(timeTaken, numberCorrect, userInitials);
}

function storeUserData(timeTaken, numberCorrect, userInitials) {
  const userData = {
    time: timeTaken,
    correctAnswers: numberCorrect,
    initials: userInitials
  };

  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push(userData);

  // Sort the high scores
  highScores.sort((a, b) => a.time - b.time);  //had internet help for this sort

  // Store the high scores back to localStorage
  localStorage.setItem("highScores", JSON.stringify(highScores));
}


// Make an outOfTime(); function.

startButton.addEventListener("click", startQuiz);



// to do's 
// out of time function
// event listener for submit button
// New page to store high scores
// retrieve high scores from local storage and display them 
//link from first page to second page and back again 
//readme
//clean up code
//submit