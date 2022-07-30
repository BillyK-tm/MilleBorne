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
let team1Scores = {
  teamNumber:1,
  playerName :"",
  roundScore: 0,
  roundWinner: 0,
  coupForres: 0,
  safetyCards: 0,
  noTwoHundreds: 0,
  totalRoundScore: 0,
};

let team2Scores = {
  teamNumber:2,
  playerName :"",
  roundScore: 0,
  roundWinner: 0,
  coupForres: 0,
  safetyCards: 0,
  noTwoHundreds: 0,
  totalRoundScore: 0,
};

const team1PlayerName = document.getElementById("player1Name")
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

const team2PlayerName = document.getElementById("player2Name")
const team2Score = document.getElementById("team2Score");
const team2RoundWinner = document.getElementById("team2RoundWin");
const team2TwoHundredsUsed = document.getElementById("team2No200");
const player2Scores = document.getElementById("showScoresPlayer2");
const player2Name = document.getElementById("player2Name");
const player2Score = document.getElementById("team2Score");
const team2NumCoupForres = document.getElementById("team2CoupForres");
const team2NumSafeties = document.getElementById("team2Safeties");

team1PlayerName.addEventListener("change",function(){
  team1Scores.playerName =   team1PlayerName.value
})

team1NumSafeties.addEventListener("change", function () {
  team1Scores.safetyCards = parseInt(team1NumSafeties.value) * safetyCard;

  calcScores(team1Scores);
});
team1NumCoupForres.addEventListener("change", function () {
  console.log(team1NumCoupForres.value);
  team1Scores.coupForres = parseInt(team1NumCoupForres.value) * coupForre;

  calcScores(team1Scores);
});

playerScore.addEventListener("change", function (e) {
  team1Scores.roundScore = parseInt(playerScore.value);
  calcScores(team1Scores);
});

team1RoundWinner.addEventListener("click", function () {
  let ischecked = team1RoundWinner.checked;
  if (ischecked === true) {
    team1Scores.roundWinner = roundWinner;
  } else {
    team1Scores.roundWinner = 0;
  }
  calcScores(team1Scores);
  //   console.log(scores);
});
team1TwoHundredsUsed.addEventListener("click", function () {
  let ischecked = team2TwoHundredsUsed.checked;
  if (ischecked === false) {
    team1Scores.noTwoHundreds = noTwohundreds;
  } else {
    team1Scores.noTwoHundreds = 0;
  }
  calcScores(team1Scores);
  //   console.log(scores);
});

team1CalcScore.addEventListener("change", function () {
  player1Name.innerHTML = "bill";
  calcScores();
});
team2CalcScore.addEventListener("click", function () {
  console.log("team 2 score");
});

// PLAYER 2
team2PlayerName.addEventListener("change",function(){
  team2Scores.playerName =   team2PlayerName.value
})
playerScore.addEventListener("change", function (e) {
  team2Scores.roundScore = parseInt(playerScore.value);
  calcScores(team2Scores);
});
team2RoundWinner.addEventListener("click", function () {
  let ischecked = team2RoundWinner.checked;
  if (ischecked === true) {
    team2Scores.roundWinner = roundWinner;
  } else {
    team2Scores.roundWinner = 0;
  }
  calcScores(team2Scores);
  //   console.log(scores);
});
team2NumSafeties.addEventListener("change", function () {
  team2Scores.safetyCards = parseInt(team2NumSafeties.value) * safetyCard;

  calcScores(team2Scores);
});
team2NumCoupForres.addEventListener("change", function () {
  console.log(team2NumCoupForres.value);
  team2Scores.coupForres = parseInt(team2NumCoupForres.value) * coupForre;

  calcScores(team2Scores);
});



team2TwoHundredsUsed.addEventListener("click", function () {
  let ischecked = team2TwoHundredsUsed.checked;
  if (ischecked === false) {
    team2Scores.noTwoHundreds = noTwohundreds;
  } else {
    team2Scores.noTwoHundreds = 0;
  }
  calcScores(team2Scores);
  //   console.log(team2Scores);
});

team2CalcScore.addEventListener("change", function () {
  console.log("team 2 score");
  player2Name.innerHTML = "bill";
  calcScores(team2Scores);
});
team2CalcScore.addEventListener("click", function () {
  console.log("team 2 score");
});
//
function calcScores(team) {
  console.log(team);
  team.totalRoundScore = 0;
  team.totalRoundScore =
  team.roundScore +
  team.roundWinner +
  team.coupForres +
  team.safetyCards +
  team.noTwoHundreds +
  team.totalRoundScore;

  if (team.teamNumber===1){
      player1Scores.innerHTML = `round score ${team.totalRoundScore}`;
  }else{
    player2Scores.innerHTML = `round score ${team.totalRoundScore}`;
  }
}
