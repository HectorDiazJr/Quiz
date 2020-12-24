var timerEl = document.getElementById("Timer");
var questionEl = document.getElementById("question");
var ans1El = document.getElementById("ans1");
var ans2El = document.getElementById("ans2");
var ans3El = document.getElementById("ans3");
var startEl = document.getElementById("start");
var userinitialsEl = document.getElementById("user-initials");
var scoreEl = document.getElementById("user-score");
var highscoresEl = document.getElementById("highscores");


var score = 0;
var secondsLeft = 20;
var nextQuestion = 2;
var highScores = [];
var timerInterval;
localStorage.getItem("initials");
console.log(localStorage.getItem("initials"));
highScores = JSON.parse(localStorage.getItem("initials"));
console.log(highScores);

// var highScores {
//     name: intEl.value,
//     score: score.value,
// }
//create an object with questions and answers
// var intandscore = [
//     { int: "", score: "" },
//     { q: "was this homework is even harder?", a: "yes" },
//     { q: "What month are we in?", a: "December" }
// ];

//function to update the timer
function setCounterText() {
    timerEl.textContent = secondsLeft
}
//create a function, when the start button is clicked a countdown timer begin and first question function to be called
function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left";
        //WHY DOESNT IT SHOW 0
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            timerEl.textContent = "Game Over";
            ans1El.textContent = "Answer";
            ans2El.textContent = "Answer";
            ans3El.textContent = "Answer";
            startEl.textContent = "Start";
            var intEl = prompt(
                "GAME OVER... Enter your initials"
            );
            questionEl.textContent = intEl + " Your score is " + score + " out of 3";
            // need to save initials and score
            console.log(intEl);
            //JSON will need to be a variable, to reference. 
            var totalhighscores = "";
            highScores.push("Initials: " + intEl + " score " + score);
            console.log(highScores);
            for (var i = 0; i < highScores.length; i++) {
                totalhighscores += highScores[i] + "<br>";
                console.log(highScores[i]);
                console.log(totalhighscores);
            };
            localStorage.setItem("initials", JSON.stringify(highScores));
            userinitialsEl.textContent = "Initials: " + intEl;
            scoreEl.textContent = "Score " + score;
            localStorage.getItem("initials");
            //displaying high scores
           
            highscoresEl.innerHTML = totalhighscores;
            console.log(totalhighscores);
            // highscoresEl.this.value = "";
            //dispaly scores
            // highscoresEl.append = "Initials: " + intEl + " score " + score;
            // HSuserscoreEl.textContent = "Score " + score;
            secondsLeft = 20;
        }
    }, 1000);
    question1();
}

//function to handle correct answer
function correctans () {
    score++;
    alert("Correct" + " your score is " + score) + " out of 3";
    if (nextQuestion === 2){
    question2();
    nextQuestion++;
    }
    else if (nextQuestion === 3) {
        question3();
        nextQuestion++;
    }
    else if (nextQuestion === 4) {
        // clearInterval(timerInterval); 
        secondsLeft = 0;
        setCounterText();
        console.log("hi") 
    }
}
//function to handle incorrect guess
function incorrectans() {
    secondsLeft--;
    setCounterText();
    alert("incorrect. you loose 2 seconds. Try again");
}

//create a function to go through the series of questions (for loop or series of functions calling eachother?)
function question1() {
    if (secondsLeft > 0) {
        questionEl.textContent = "are HTML documents are written like newspapers";
        ans1El.textContent = "no";
        ans2El.textContent = "yes";
        ans3El.textContent = "what is a newspaper?";
        //NEED TO KNOW WHEN ANS2 BUTTOM HAS BEEN CLICKED HERE

        ans2El.addEventListener("click", correctans);
        ans1El.addEventListener("click", incorrectans); 
        ans3El.addEventListener("click", incorrectans);
    };
};

function question2() {
    ans1El.removeEventListener("click",incorrectans);
    ans2El.removeEventListener("click",correctans);
    ans3El.removeEventListener("click",incorrectans);
    if (secondsLeft > 0) {
        questionEl.textContent = "where should the css style sheet link be located?";
        ans1El.textContent = "in the head of the document";
        ans2El.textContent = "in the body";
        ans3El.textContent = "in the footer";
        //NEED TO KNOW WHEN ANS2 BUTTOM HAS BEEN CLICKED HERE
        ans1El.addEventListener("click", correctans);
        ans2El.addEventListener("click", incorrectans); 
        ans3El.addEventListener("click", incorrectans);     
    };
};

function question3() {
    ans1El.removeEventListener("click",correctans);
    ans2El.removeEventListener("click",incorrectans);
    ans3El.removeEventListener("click",incorrectans);
    if (secondsLeft > 0) {
        questionEl.textContent = "where should the js link be located?";
        ans1El.textContent = "head";
        ans2El.textContent = "footer";
        ans3El.textContent = "right before the closing body tag";
        //NEED TO KNOW WHEN ANS2 BUTTOM HAS BEEN CLICKED HERE
        ans1El.addEventListener("click", incorrectans);
        ans2El.addEventListener("click", incorrectans); 
        ans3El.addEventListener("click", correctans);  
        //unable to figure out how to clear the timer
        
    };
};


//button to begin chain of events
startEl.addEventListener("click", function (event) {
    startTimer();
});
