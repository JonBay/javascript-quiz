// add html
//add css
//add a start button for the quiz
//add prevent default for quiz button
//When quiz button pushed start timer and display first question
//when question answered presented with another question
//If question is answered incorrectly then time is subtracted
//possibly add an instruction section
//When all question are answered or the time reaches 0 game is over. 
//when game is over ten I can save my iitials and score ( in local storage)
//come up with 4 quiz questions and answers
//create 4 quiz questions in the Html.  They need to be multiple choice and have the correct stuff.   
//use show hide to display them when wanted. 
//add timer to the quiz
// View Highscores will be local storage for data.  It is a link that can take you to a separate page
//go bak and start over button
//clear high scores button
// start with an explanation.  Then hide it when quiz starts
//timer in corner somewhere
//multiple choice buttons are ordered list


var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-left");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var showQuestion = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];


// startQuiz is called when the start button is clicked
function startQuiz() 
    {
        showQuestion = true;
        timerCount = 120;
        //startButton.disabled = true;  will need to change this to hide button and text when start button is pushed and unhide first question.  
        //renderBlanks()  could change this to a show questions function that is called.  
        startTimer()
    }

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// I borrowed this function from the mini project we did and tweaked it to work. 
function startTimer() 
    {
        // Sets timer
        timer = setInterval(function() 
            {
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
            }
        // Tests if time has run out
        //if (timerCount === 0) 
        //    {
                // Clears interval
        //        clearInterval(timer);
                //loseGame();
        //    }
        , 1000);
    }
  
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);
