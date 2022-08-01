
const team2PlayerName = document.getElementById("player2Name")
const team2CalcScore = document.getElementById("team2CalcScore_btn");
const team2Score = document.getElementById("team2Score");
const team2RoundWinner = document.getElementById("team2RoundWin");
const team2TwoHundredsUsed = document.getElementById("team2No200");
const player2Scores = document.getElementById("showScoresPlayer2");
const player2Name = document.getElementById("player2Name");
const player2Score = document.getElementById("team2Score");
const team2NumCoupForres = document.getElementById("team2CoupForres");
const team2NumSafeties = document.getElementById("team2Safeties");
const Team2GameScore = document.getElementById("team2GameScore")

// PLAYER 2
team2PlayerName.addEventListener("change",function(){
    team2Scores.playerName =   team2PlayerName.value
  })
  player2Score.addEventListener("change", function (e) {
    team2Scores.roundScore = parseInt(player2Score.value);
    calcScores(team2Scores);
  });
  team2RoundWinner.addEventListener("click", function () {
    let ischecked = team2RoundWinner.checked;
    if (ischecked === true) {
      team2Scores.roundWinner = roundWinner;
      team2TwoHundredsUsed.disabled = false
    } else {
      team2Scores.roundWinner = 0;
      team2TwoHundredsUsed.disabled = true
      team2TwoHundredsUsed.checked = false
      team2Scores.noTwoHundreds = 0;
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