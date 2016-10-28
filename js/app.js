// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var player = [];
  var turnP1 = true;
  var turn = 1;

  player[0] = {
    name: "Player 1",
    gamesWon: 0,
    gamesLost: 0,
    gamesTied: 0
  };

  player[1] = {
    name: "Player 2",
    gamesWon: 0,
    gamesLost: 0,
    gamesTied: 0
  };

function newBoard() {
  $(".box").empty();
}
function drawXNO() {
  if (turn%2===1) {
          $(this).prepend('<img id="letterX" src="letterX.jpg"/>');
          turn++;
} else if(turn%2===0) {
          $(this).prepend('<img id="letterO" src="letterO.jpg"/>');
          turn++;}}

$("button").click(newBoard);
$(".box").click(drawXNO);
  console.log('im ready!');
});
