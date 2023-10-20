function goBack() {
    window.location.href = "index.html"; 
}

// Retrieve and display high scores.  I used internet help for this "COMContentLoaded" piece
document.addEventListener("DOMContentLoaded", function() {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    const highScoresList = document.getElementById("high-scores-list");

    highScores.forEach(score => {
        const listItem = document.createElement("li");
        listItem.textContent = `Initials: ${score.initials}, Time: ${score.time}, Correct Answers: ${score.correctAnswers}`;
        highScoresList.appendChild(listItem);
    });
});