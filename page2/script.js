var scr = 0;
var compScr = 0;
var userBatting = true;
var userChoice = 0;
var compBatting = false;
var sts = document.getElementById("status");
var sts2 = document.getElementById("status2");
var sts3 = document.getElementById("status3");

function addToScore(val) {
  userChoice = val;
  compChoice = Math.floor(Math.random() * 6);
  if (userBatting == true) {
    scr += val;
    sts.innerHTML = "You are batting ";
    document.getElementById("score").innerHTML = scr;
    document.getElementById("userChoice").innerHTML = "You : " + userChoice;
    document.getElementById("score").innerHTML = "Your Score : " + scr;

    document.getElementById("compChoice").innerHTML = "Computer: " + compChoice;

    if (userChoice == compChoice) {
      playerOut();
    }
  }
  if (userBatting == false && compBatting == true) {
    compScr += compChoice;
    document.getElementById("compScore").innerHTML =
      "Computer score: " + compScr;
    document.getElementById("compChoice").innerHTML = "Computer: " + compChoice;
    document.getElementById("userChoice").innerHTML = "You : " + userChoice;
    document.getElementById("score").innerHTML = "Your Score : " + scr;

    if ((compChoice == userChoice) & (userBatting == false)) {
      compOut();
    }
  }
}

function playerOut() {
  sts.innerHTML = "Out!! now its time for computer to bat 🏏";
  compBatting = true;
  userBatting = false;
  userChoice = 0;
  const myTimeout = setTimeout(myMsg, 3000);
  function myMsg() {
    sts.innerHTML = "Computer is Batting 🏏";
  }

  document.getElementById("userChoice").innerHTML = "";
}

function compOut() {
  if (compScr > scr) {
    compWin();
  } else {
    userWIn();
  }
}

function userWIn() {
  sts.innerHTML = "";
  sts2.innerHTML = "You won 🎆🎊🎊🎊!! <br> ";
  closeAll();
}

function compWin() {
  sts.innerHTML = "";
  sts3.innerHTML = "Computer won and you lost 😥 <br> ";
  closeAll();
}
// So that the buttons are Hidden after the game ends
function closeAll() {
  document.getElementById("btn1").style.visibility = "hidden";
  document.getElementById("btn2").style.visibility = "hidden";
  document.getElementById("btn3").style.visibility = "hidden";
  document.getElementById("btn4").style.visibility = "hidden";
  document.getElementById("btn5").style.visibility = "hidden";
  document.getElementById("btn6").style.visibility = "hidden";
  document.getElementById("play-again").style.visibility = "visible";
}
