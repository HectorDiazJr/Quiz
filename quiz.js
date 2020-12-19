var timerEl = document.getElementById("Timer");
var questionEl = document.getElementById("question");
var ans1El = document.getElementById("ans1");
var ans2El = document.getElementById("ans2");
var ans3El = document.getElementById("ans3");
var startEl = document.getElementById("start");
var userinitialsEl = document.getElementById("user-initials");
var scoreEl = document.getElementById("user-score");

var score = 0;
var secondsLeft = 20;

//testing buttons are connected to js
// timerEl.textContent = "this is a test";
// questionEl.textContent = "this is a test";
// ans1El.textContent = "test";
// ans2El.textContent = "test";
// ans3El.textContent = "test";
// startEl.textContent = "test";

//create an object with questions and answers
var intandscore = [
    { int: "", score: ""},
    { q: "was this homework is even harder?", a: "yes" },
    { q: "What month are we in?", a: "December" }
];

//function to update the timer
function setCounterText() {
    timerEl.textContent = secondsLeft
}
//create a function, when the start button is clicked a countdown timer begin and first question function to be called
function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left";
        //WHY DOESNT IT SHOW 0
        if (secondsLeft === 0) {
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
            localStorage.setItem("initials",JSON.stringify([{int:intEl,score:score}]));
            localStorage.getItem("initials");
            userinitialsEl.textContent ="Initials: " + intEl;
            scoreEl.textContent = "Score " + score;
            secondsLeft = 20;
        }
    }, 1000);
    question1();
}



//function to handle incorrect guess
function incorrectans() {
    secondsLeft--;
            setCounterText();
            alert("incorrect. you loose 2 seconds")
}
//create a function to go through the series of questions (for loop or series of functions calling eachother?)
function question1() {
    if (secondsLeft > 0) {
        questionEl.textContent = "was last weeks homework hard";
        ans1El.textContent = "no";
        ans2El.textContent = "yes";
        ans3El.textContent = "a little";
        //NEED TO KNOW WHEN ANS2 BUTTOM HAS BEEN CLICKED HERE

        ans2El.addEventListener("click",function() {
            score++;
            alert("Correct" + " your score is " + score) + " out of 3";
        })
        ans1El.addEventListener("click", incorrectans);
        ans3El.addEventListener("click",incorrectans);
        // question2();
    }
}

// function question2() {
//     if (secondsLeft > 0) {
//         questionEl.textContent = "was this homework is even harder?";
//         ans1El.textContent = "yes";
//         ans2El.textContent = "no";
//         ans3El.textContent = "a little";
//         //NEED TO KNOW WHEN ANS2 BUTTOM HAS BEEN CLICKED HERE
//         if (ans1El.eventlistener("click")) {
//             score++;
//             alert("Correct" + " your score is " + score);
//         }
//         else {
//             //NEED TO SUBTRACT 2 SECONDS
//             secondsLeft--;
//             setCounterText();
//             alert("incorrect. you loose 2 seconds")
//         }
//         question3();
//     }
// }

// function question3() {
//     if (secondsLeft > 0) {
//         questionEl.textContent = "What month are we in?";
//         ans1El.textContent = "October";
//         ans2El.textContent = "November";
//         ans3El.textContent = "December";
//         //NEED TO KNOW WHEN ANS2 BUTTOM HAS BEEN CLICKED HERE
//         if (ans3El.eventlistener("click")) {
//             score++;
//             alert("Correct" + " your score is " + score);
//         }
//         else {
//             //NEED TO SUBTRACT 2 SECONDS
//             secondsLeft--;
//             setCounterText();
//             alert("incorrect. you loose 2 seconds")
//         }
//         //END THE GAME
//     }
// }
//create if statements. If an answer is incorrect, the timer subtracts 10 seconds

//whent the time is over the game is over and the score is displayed

//dialogue box for user to input his initials

//initials and score are saved and displayed

//button to begin chain of events
startEl.addEventListener("click", function (event) {
    startTimer();
});
