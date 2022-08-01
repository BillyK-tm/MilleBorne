const safetyCard = 100;
const fourSaftyCards = 400;
const coupForre = 300;
const maxTrip = 400;
const allCardsPlayed = 300;
const safeTrip = 300;
const roundWinner = 500;
const noTwohundreds = 300;
let team1GameScores = [];
let team2GameScores = [];
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

let team2Scores = [{
  teamNumber:2,
  playerName :"",
  roundScore: 0,
  roundWinner: 0,
  coupForres: 0,
  safetyCards: 0,
  noTwoHundreds: 0,
  totalRoundScore: 0,
}];

const team1Name = document.getElementById("team1Name")
const team1CalcScore = document.getElementById("team1CalcScore_btn");
const team1Score = document.getElementById("team1Score");
const team1RoundWinner = document.getElementById("team1RoundWin");
const team1TwoHundredsUsed = document.getElementById("team1No200");
const showTeam1Scores = document.getElementById("showScoresTeam1");
const t1Scores = document.getElementById("t1Score")
// const player1Name = document.getElementById("player1Name");
const team1NumCoupForres = document.getElementById("team1CoupForres");
const team1NumSafeties = document.getElementById("team1Safeties");
const Team1GameScore = document.getElementById("team1GameScore")

team1TwoHundredsUsed.disabled = true
// team2TwoHundredsUsed.disabled = true

team1Name.addEventListener("change",function(){
  team1Scores.playerName =   team1Name.value
})
team1Score.addEventListener("change", function (e) {
  team1Scores.roundScore = parseInt(team1Score.value);
  calcScores(team1Scores);
});
team1RoundWinner.addEventListener("click", function () {
  console.log("rnd winner")
  let ischecked = team1RoundWinner.checked;
  if (ischecked === true) {
    team1Scores.roundWinner = roundWinner;
    team1TwoHundredsUsed.disabled = false
  } else {
    team1Scores.roundWinner = 0;
    team1TwoHundredsUsed.disabled = true
    team1TwoHundredsUsed.checked = false
    team1Scores.noTwoHundreds = 0;
  }
  console.log(`team display:${team1Scores}`);
  calcScores(team1Scores);
    
});
team1TwoHundredsUsed.addEventListener("click", function () {
  let ischecked = team1TwoHundredsUsed.checked;
  console.log(ischecked)
  if (ischecked === false) {
    team1Scores.noTwoHundreds = noTwohundreds;
  } else {
    console.log("200's checked")
    team1Scores.noTwoHundreds = 0;
  }
  calcScores(team1Scores);
  //   console.log(scores);
});
team1NumCoupForres.addEventListener("change", function () {
  console.log(team1NumCoupForres.value);
    if (parseInt(team1NumCoupForres.value)===0){
      team1Scores.coupForres =0}
      else{  
    team1Scores.coupForres = parseInt(team1NumCoupForres.value) * coupForre;
    }
  calcScores(team1Scores);
});
team1NumSafeties.addEventListener("change", function () {
  if (parseInt(team1NumSafeties.value) ===0){
    team1Scores.safetyCards = 0
  }else{
  team1Scores.safetyCards = parseInt(team1NumSafeties.value) * safetyCard;
  }
  calcScores(team1Scores);
});

function clearFields(team){

  if (team===1){
  team1Scores.innerHTML = `round score: `;
  team1Score.value = 0
team1NumCoupForres.value = 0
team1NumSafeties.value=0 
team1RoundWinner.checked = false
team1TwoHundredsUsed.disabled = true
team1TwoHundredsUsed.checked = false
showTeam1Scores.innerHTML= "Round Scores: 0"
  }else{
    //Clear team 2
  }
}
nextRound_btn.addEventListener("click", function () {
  console.log("next rnd")
  team1GameScores.push(team1Scores.totalRoundScore)
  // Team1GameScore.innerHTML = team1Scores.totalRoundScore
  team1Scores.innerHTML = `round score: 0`;
  // team2GameScores.push(team2Scores.totalRoundScore)
  // Team2GameScore.innerHTML = team2Scores.totalRoundScore
for (let i=0;i<team1GameScores.length;i++){
  Team1GameScore.innerHTML = `${team1Scores.playerName} Scored:  ${team1Scores.totalRoundScore}`
}
clearFields(1)
});

function calcScores(team) {
  team.totalRoundScore = 0;
  team.totalRoundScore +=
  team.roundScore +
  team.roundWinner +
  team.coupForres +
  team.safetyCards +
  team.noTwoHundreds 
  if (team.teamNumber===2){
      player2Scores.innerHTML = `round score: ${team.totalRoundScore}`;
  }else{
    showTeam1Scores.innerHTML = `round score: ${team.totalRoundScore}`;

    // t1Scores.innerHTML = `round score ${team.totalRoundScore}`;
  }
}
