const safetyCard = 100;
const fourSaftyCards = 400;
const coupForre = 300;
const maxTrip = 400;
const allCardsPlayed = 300;
const safeTrip = 300;
const roundWinner = 500;
const noTwohundreds = 300;
let teamOneScores = [];
let teamTwoScores = [];
let scores = {
  roundScore: 0,
  roundWinner: 0,
  coupForres: 0,
  safetyCards: 0,
  noTwoHundreds: 0,
  totalRoundScore: 0,
};

const team1CalcScore = document.getElementById("team1CalcScore_btn");
const team2CalcScore = document.getElementById("team2CalcScore_btn");
const team1Score = document.getElementById("team1Score");
const team1RoundWinner = document.getElementById("team1RoundWin");
const team1TwoHundredsUsed = document.getElementById("team1No200");
const player1Scores = document.getElementById("showScoresPlayer1");
const player1Name = document.getElementById("player1Name");
const playerScore = document.getElementById("team1Score");
const team1NumCoupForres = document.getElementById("team1CoupForres");
const team1NumSafeties = document.getElementById("team1Safeties");

const team2Score = document.getElementById("team2Score");
const team2RoundWinner = document.getElementById("team2RoundWin");
const team2TwoHundredsUsed = document.getElementById("team2No200");
const player2Scores = document.getElementById("showScoresPlayer2");
const player2Name = document.getElementById("player2Name");
const player2Score = document.getElementById("team2Score");
const team2NumCoupForres = document.getElementById("team2CoupForres");
const team2NumSafeties = document.getElementById("team2Safeties");

team1NumSafeties.addEventListener("change", function () {
  scores.safetyCards = parseInt(team1NumSafeties.value) * safetyCard;

  calcScores();
});
team1NumCoupForres.addEventListener("change", function () {
  console.log(team1NumCoupForres.value);
  scores.coupForres = parseInt(team1NumCoupForres.value) * coupForre;

  calcScores();
});

playerScore.addEventListener("change", function (e) {
  scores.roundScore = parseInt(playerScore.value);
  calcScores();
});

team1RoundWinner.addEventListener("click", function () {
  let ischecked = team1RoundWinner.checked;
  if (ischecked === true) {
    scores.roundWinner = roundWinner;
  } else {
    scores.roundWinner = 0;
  }
  calcScores();
  //   console.log(scores);
});
team1TwoHundredsUsed.addEventListener("click", function () {
  let ischecked = team2TwoHundredsUsed.checked;
  if (ischecked === false) {
    scores.noTwoHundreds = noTwohundreds;
  } else {
    scores.noTwoHundreds = 0;
  }
  calcScores();
  //   console.log(scores);
});

team1CalcScore.addEventListener("change", function () {
  console.log("team 1 score");
  player1Name.innerHTML = "bill";
  calcScores();
});
team2CalcScore.addEventListener("click", function () {
  console.log("team 2 score");
});

// PLAYER 2
team2NumSafeties.addEventListener("change", function () {
  scores.safetyCards = parseInt(team2NumSafeties.value) * safetyCard;

  calcScores();
});
team2NumCoupForres.addEventListener("change", function () {
  console.log(team2NumCoupForres.value);
  scores.coupForres = parseInt(team2NumCoupForres.value) * coupForre;

  calcScores();
});

playerScore.addEventListener("change", function (e) {
  scores.roundScore = parseInt(playerScore.value);
  calcScores();
});

team2RoundWinner.addEventListener("click", function () {
  let ischecked = team2RoundWinner.checked;
  if (ischecked === true) {
    scores.roundWinner = roundWinner;
  } else {
    scores.roundWinner = 0;
  }
  calcScores();
  //   console.log(scores);
});
team2TwoHundredsUsed.addEventListener("click", function () {
  let ischecked = team2TwoHundredsUsed.checked;
  if (ischecked === false) {
    scores.noTwoHundreds = noTwohundreds;
  } else {
    scores.noTwoHundreds = 0;
  }
  calcScores();
  //   console.log(scores);
});

team2CalcScore.addEventListener("change", function () {
  console.log("team 2 score");
  player2Name.innerHTML = "bill";
  calcScores();
});
team2CalcScore.addEventListener("click", function () {
  console.log("team 2 score");
});
//
function calcScores() {
  console.log(scores);
  scores.totalRoundScore = 0;
  scores.totalRoundScore =
    scores.roundScore +
    scores.roundWinner +
    scores.coupForres +
    scores.safetyCards +
    scores.noTwoHundreds +
    scores.totalRoundScore;
  player1Scores.innerHTML = `round score ${scores.totalRoundScore}`;
}
