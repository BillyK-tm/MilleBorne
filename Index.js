const isWinner = false;
const safetyCard = 100;
const fourSaftyCards = 400;
const coupForre = 300;
const maxTrip = 400;
const allCardsPlayed = 300;
const safeTrip = 300;
const roundWinner = 500;
const noTwohundreds = 300;
const winningScore = 5000;
let team1GameScores = [];
let team2GameScores = [];
let roundCount = 1;

let team1Scores = {
  teamNumber: 1,
  teamName: "Team1",
  roundScore: 0,
  roundWinner: 0,
  coupForres: 0,
  safetyCards: 0,
  noTwoHundreds: 0,
  totalRoundScore: 0,
  totalGameScore: 0,
};

let team2Scores = {
  teamNumber: 2,
  teamName: "Team2",
  roundScore: 0,
  roundWinner: 0,
  coupForres: 0,
  safetyCards: 0,
  noTwoHundreds: 0,
  totalRoundScore: 0,
  totalGameScore: 0,
};

const team1Name = document.getElementById("team1Name");
const team1CalcScore = document.getElementById("team1CalcScore_btn");
const team1Score = document.getElementById("team1Score");
const team1RoundWinner = document.getElementById("team1RoundWin");
const team1TwoHundredsUsed = document.getElementById("team1No200");
const showTeam1Scores = document.getElementById("showScoresTeam1");
const t1Scores = document.getElementById("t1Score");
const team1NumCoupForres = document.getElementById("team1CoupForres");
const team1NumSafeties = document.getElementById("team1Safeties");
const Team1GameScore = document.getElementById("team1GameScore");
const roundScores = document.getElementById("roundScores");

team1TwoHundredsUsed.disabled = true;
nextRound_btn.disabled = true;
// team2TwoHundredsUsed.disabled = true

team1Name.addEventListener("change", function () {
  team1Scores.teamName = team1Name.value;
});
team1Score.addEventListener("change", function (e) {
  team1Scores.roundScore = parseInt(team1Score.value);
  calcScores(team1Scores);
});
team1RoundWinner.addEventListener("click", function () {
  console.log("rnd winner");
  let ischecked = team1RoundWinner.checked;
  if (ischecked === true) {
    team1Scores.roundWinner = roundWinner;
    team1TwoHundredsUsed.disabled = false;
  } else {
    team1Scores.roundWinner = 0;
    team1TwoHundredsUsed.disabled = true;
    team1TwoHundredsUsed.checked = false;
    team1Scores.noTwoHundreds = 0;
  }
  calcScores(team1Scores);
});
team1TwoHundredsUsed.addEventListener("click", function () {
  let ischecked = team1TwoHundredsUsed.checked;
  if (ischecked === false) {
    team1Scores.noTwoHundreds = noTwohundreds;
  } else {
    team1Scores.noTwoHundreds = 0;
  }
  calcScores(team1Scores);
});
team1NumCoupForres.addEventListener("change", function () {
  if (parseInt(team1NumCoupForres.value) === 0) {
    team1Scores.coupForres = 0;
  } else {
    team1Scores.coupForres = parseInt(team1NumCoupForres.value) * coupForre;
  }
  calcScores(team1Scores);
});
team1NumSafeties.addEventListener("change", function () {
  if (parseInt(team1NumSafeties.value) === 0) {
    team1Scores.safetyCards = 0;
  } else {
    team1Scores.safetyCards = parseInt(team1NumSafeties.value) * safetyCard;
  }
  calcScores(team1Scores);
});

function clearFields(team) {
  if (team.teamNumber === 1) {
    team1Scores.innerHTML = `round score: `;
    team1Score.value = 0;
    team1NumCoupForres.value = 0;
    team1NumSafeties.value = 0;
    team1RoundWinner.checked = false;
    team1TwoHundredsUsed.disabled = true;
    team1TwoHundredsUsed.checked = false;
    showTeam1Scores.innerHTML = "Round Scores: 0";
  } else {
    //Clear team 2
  }
}
function clearObjects() {
  team1Scores = {
    teamNumber: 1,
    teamName: "Team1",
    roundScore: 0,
    roundWinner: 0,
    coupForres: 0,
    safetyCards: 0,
    noTwoHundreds: 0,
    totalRoundScore: 0,
    totalGameScore: 0,
  };

  team2Scores = {
    teamNumber: 2,
    teamName: "Team2",
    roundScore: 0,
    roundWinner: 0,
    coupForres: 0,
    safetyCards: 0,
    noTwoHundreds: 0,
    totalRoundScore: 0,
    totalGameScore: 0,
  };
  roundScores.innerHTML = "";
}

newGame_btn.addEventListener("click", function () {
  clearFields(team1Scores);
  clearFields(team2Scores);
  nextRound_btn.disabled = false;
  roundScores.innerHTML = "";
});

nextRound_btn.addEventListener("click", function () {
  team1Scores.totalGameScore += team1Scores.totalRoundScore;
  team1Scores.innerHTML = `round score: 0`;

  team1GameScores.push(team1Scores);
  updateRoundScores(team1Scores);
  checkWinner();
  clearFields(team1Scores);
});
function checkWinner() {
  if (
    team1Scores.totalGameScore >= winningScore ||
    team2Scores.totalGameScore >= winningScore
  ) {
    if (team1Scores.totalGameScore > team2Scores.totalGameScore) {
      // player One run
      Team1GameScore.innerHTML = `Well done ${team1Scores.teamName} Your a Winner`;
    } else if (team1Scores.totalGameScore < team2Scores.totalGameScore) {
      // Player Two won
    } else {
      Team1GameScore.innerHTML = `Well done ${team2Scores.teamName} Your a Winner`;
      // its a draw
    }
  } else {
    console.log("-");
  }

  if (isWinner === false) {
    // check who won
  } else {
    updateRoundScores();
  }
}
function updateRoundScores(team) {
  roundScores.innerHTML = "";
  let listItems = "";
  listItems += `
    <table id="roundScores">
    <tr>
      <th>Round Number</th>
      <th>Team</th>
      <th>Score</th>
      <th>Total Score</th>
      
  </tr>
  <tr>
  <td>${roundCount}</td>
  <td>${team.teamName}</td>
    <td>${team.totalRoundScore}</td>
    <td>${team.totalGameScore}</td>
  </tr>
  <tr>
  <td>${roundCount}</td>
  <td>${team.teamName}</td>
    <td>${team.totalRoundScore}</td>
    <td>${team.totalGameScore}</td>
  </tr>
  `;
  roundScores.innerHTML += listItems;
}

function calcScores(team) {
  team.totalRoundScore = 0;
  team.totalRoundScore +=
    team.roundScore +
    team.roundWinner +
    team.coupForres +
    team.safetyCards +
    team.noTwoHundreds;

  if (team.teamNumber === 2) {
    player2Scores.innerHTML = `round score: ${team.totalRoundScore}`;
  } else {
    showTeam1Scores.innerHTML = `round score: ${team.totalRoundScore}`;

    // t1Scores.innerHTML = `round score ${team.totalRoundScore}`;
  }
}
