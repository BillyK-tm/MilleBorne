let newGame = false;
const safetyCard = 100;
const fourSaftyCards = 400;
const coupForre = 300;
const maxTrip = 400;
const allCardsPlayed = 300;
const safeTrip = 300;
const roundWinner = 500;
const noTwohundreds = 300;
const winningScore = 5000;
let roundCount = 1;
let teamScores = [0, 0];

let team1Scores = {
  teamNumber: 1,
  teamName: "Team1",
  roundScore: 0,
  roundWinner: 0,
  coupForres: 0,
  safetyCards: 0,
  noTwoHundreds: noTwohundreds,
  totalRoundScore: 0,
};

let team2Scores = {
  teamNumber: 2,
  teamName: "Team2",
  roundScore: 0,
  roundWinner: 0,
  coupForres: 0,
  safetyCards: 0,
  noTwoHundreds: noTwohundreds,
  totalRoundScore: 0,
};

const team1Name = document.getElementById("team1Name");
const team1CalcScore = document.getElementById("team1CalcScore_btn");
const team1Score = document.getElementById("team1Score");
const team1RoundWinner = document.getElementById("team1RoundWin");
const team1TwoHundredsUsedYes = document.getElementById("team1No200Yes");
const team1TwoHundredsUsedNo = document.getElementById("team1No200YNo");
const showTeam1Scores = document.getElementById("showScoresTeam1");
const t1Scores = document.getElementById("t1Score");
const team1NumCoupForres = document.getElementById("team1CoupForres");
const team1NumSafeties = document.getElementById("team1Safeties");
const Team1GameScore = document.getElementById("team1GameScore");
const roundScores = document.getElementById("roundScores");

const team2Name = document.getElementById("team2Name");
const team2Score = document.getElementById("team2Score");
const team2RoundWinner = document.getElementById("team2RoundWin");
const team2TwoHundredsUsedYes = document.getElementById("team2No200Yes");
const team2TwoHundredsUsedNo = document.getElementById("team2No200YNo");
const showTeam2Scores = document.getElementById("showScoresTeam2");
const t2Scores = document.getElementById("t2Score");
const team2NumCoupForres = document.getElementById("team2CoupForres");
const team2NumSafeties = document.getElementById("team2Safeties");
const Team2GameScore = document.getElementById("team2GameScore");

// nextRound_btn.disabled = true;
nextRound_btn.style.visibility = "hidden";

team1Name.addEventListener("change", function () {
  team1Scores.teamName = team1Name.value;
});
team1Score.addEventListener("change", function (e) {
  team1Scores.roundScore = parseInt(team1Score.value);
  console.log(team1Scores);
  calcScores(team1Scores);
});
team1RoundWinner.addEventListener("click", function () {
  let ischecked = team1RoundWinner.checked;
  if (ischecked === true) {
    team1Scores.roundWinner = roundWinner;
  } else {
    team1Scores.roundWinner = 0;
    team1Scores.noTwoHundreds = 0;
  }
  calcScores(team1Scores);
});
team1TwoHundredsUsedYes.addEventListener("click", function () {
  let ischecked = team1TwoHundredsUsedYes.checked;
  if (ischecked === true) {
    team1Scores.noTwoHundreds = 0;
  } else {
    team1Scores.noTwoHundreds = noTwohundreds;
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
  console.log(safetyCard);
  if (parseInt(team1NumSafeties.value) === 0) {
    team1Scores.safetyCards = 0;
  } else {
    team1Scores.safetyCards = parseInt(team1NumSafeties.value) * safetyCard;
  }
  calcScores(team1Scores);
});
// TEAM TWO
team2Name.addEventListener("change", function () {
  team2Scores.teamName = team2Name.value;
});
team2Score.addEventListener("change", function (e) {
  team2Scores.roundScore = parseInt(team2Score.value);
  calcScores(team2Scores);
});
team2RoundWinner.addEventListener("click", function () {
  let ischecked = team2RoundWinner.checked;
  if (ischecked === true) {
    team2Scores.roundWinner = roundWinner;
  } else {
    team2Scores.roundWinner = 0;
    team2Scores.noTwoHundreds = 0;
  }
  calcScores(team2Scores);
});
team2TwoHundredsUsedYes.addEventListener("click", function () {
  let ischecked = team2TwoHundredsUsedYes.checked;
  if (ischecked === true) {
    team2Scores.noTwoHundreds = 0;
  } else {
    team2Scores.noTwoHundreds = noTwohundreds;
  }
  calcScores(team2Scores);
});
team2NumCoupForres.addEventListener("change", function () {
  if (parseInt(team2NumCoupForres.value) === 0) {
    team2Scores.coupForres = 0;
  } else {
    team2Scores.coupForres = parseInt(team2NumCoupForres.value) * coupForre;
  }
  calcScores(team2Scores);
});
team2NumSafeties.addEventListener("change", function () {
  if (parseInt(team2NumSafeties.value) === 0) {
    team2Scores.safetyCards = 0;
  } else {
    team2Scores.safetyCards = parseInt(team2NumSafeties.value) * safetyCard;
  }
  calcScores(team2Scores);
});

//FUNCTIONS
function clearFields(team) {
  if (team.teamNumber === 1) {
    team1Scores.innerHTML = `round score: `;
    team1Score.value = 0;
    team1NumCoupForres.value = 0;
    team1NumSafeties.value = 0;
    team1RoundWinner.checked = false;
    // team1TwoHundredsUsed.disabled = true;
    team1TwoHundredsUsedYes.checked = false;
    showTeam1Scores.innerHTML = "Round Scores: 0";
    // team1GameScores.clearFields;
  } else {
    //Clear team 2
    team2Scores.innerHTML = `round score: `;
    team2Score.value = 0;
    team2NumCoupForres.value = 0;
    team2NumSafeties.value = 0;
    team2RoundWinner.checked = false;
    // team1TwoHundredsUsed.disabled = true;
    team2TwoHundredsUsedYes.checked = false;
    showTeam2Scores.innerHTML = "Round Scores: 0";
    // team2GameScores.clearFields;
  }
  clearObjects(team1Scores);
  clearObjects(team2Scores);
}
function clearObjects(team) {
  teamNumber = team.teamNumber;
  team.teamNumber = teamNumber;
  team.teamName = "Team" + teamNumber;
  team.roundScore = 0;
  team.roundWinner = 0;
  team.coupForres = 0;
  team.safetyCards = 0;
  team.noTwoHundreds = noTwohundreds;
  team.totalRoundScore = 0;

  if (newGame === true) {
    team.totalGameScore = 0;
  }
}

newGame_btn.addEventListener("click", function () {
  clearFields(team1Scores);
  clearFields(team2Scores);
  clearObjects(team1Scores);
  clearObjects(team2Scores);
  nextRound_btn.disabled = false;
  newGame = true;
  showTeam1Scores.innerHTML = "Round Scores:";
  showTeam2Scores.innerHTML = "Round Scores:";
  Team1GameScore.innerHTML = "Running Total:";
  Team2GameScore.innerHTML = "Running Total:";
  nextRound_btn.style.visibility = "visible";
});

nextRound_btn.addEventListener("click", function () {
  console.log(
    `BEFORE:- team 1: ${team1Scores.totalGameScore} / Team 2:${team2Scores.totalGameScore}`
  );
  teamScores[0] += team1Scores.totalRoundScore;
  teamScores[1] += team2Scores.totalRoundScore;
  console.log(`AFTER:- team 1: ${teamScores[0]} / Team 2:${teamScores[1]}`);
  Team1GameScore.innerHTML = `Running Total: ${teamScores[0]}`;
  Team2GameScore.innerHTML = `Running Total: ${teamScores[1]}`;

  checkWinner();
  clearFields(team1Scores);
  clearFields(team2Scores);
});
function checkWinner() {
  if (
    team1Scores.totalGameScore >= winningScore ||
    team2Scores.totalGameScore >= winningScore
  ) {
    console.log("Check winner - in IF");
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
}
function updateRoundScores(team) {
  // roundScores.innerHTML = "";
  // let listItems = "";
  // listItems += `
  //   <table id="roundScores">
  //   <tr>
  //     <th>Round Number</th>
  //     <th>Team</th>
  //     <th>Score</th>
  //     <th>Total Score</th>
  // </tr>
  // <tr>
  // <td>${roundCount}</td>
  // <td>${team.teamName}</td>
  //   <td>${team.totalRoundScore}</td>
  //   <td>${team.totalGameScore}</td>
  // </tr>
  // <tr>
  // <td>${roundCount}</td>
  // <td>${team.teamName}</td>
  //   <td>${team.totalRoundScore}</td>
  //   <td>${team.totalGameScore}</td>
  // </tr>
  // `;
  // roundScores.innerHTML += listItems;
  // Team1GameScore.innerHTML = team.totalGameScore;
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
    showTeam2Scores.innerHTML = `round score: ${team.totalRoundScore}`;
    console.log("team 2 calc scores");
  } else {
    showTeam1Scores.innerHTML = `round score: ${team.totalRoundScore}`;
    console.log("team 1 calc scores");
    // Team1GameScore.innerHTML = `Running Total: ${team.totalGameScore}`;
  }
}
