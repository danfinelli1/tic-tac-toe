// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var player = [];
  var turn = 1;
  var xPositions = [];
  var oPositions = [];
  var arrayindex = 0
  var colOneX = 0;
  var colTwoX = 0;
  var colThreeX = 0;
  var topRowX = 0;
  var midRowX = 0;
  var botRowX = 0;
  var diagLeftX = 0;
  var diagRightX = 0;
  var colOneO = 0;
  var colTwoO = 0;
  var colThreeO = 0;
  var topRowO = 0;
  var midRowO = 0;
  var botRowO = 0;
  var diagLeftO = 0;
  var diagRightO = 0;


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

function gameLogic() {
if (turn>5){
if(colOneO === 3 || colTwoO === 3 || colThreeO === 3){
  player[1].gamesWon++;
  player[0].gamesLost++;
  alert('Awesome vertical line by player 2! O Wins!');
} else if(topRowO === 3 || midRowO === 3 || botRowO === 3){
  player[1].gamesWon++;
  player[0].gamesLost++;
  alert('Awesome horizontal line by player 2! O Wins!');
} else if(diagLeftO === 3 || diagRightO === 3){
  player[1].gamesWon++;
  player[0].gamesLost++;
  alert('Awesome diagonal line by player 2! O Wins!');
} else if(colOneX === 3 || colTwoX === 3 || colThreeX === 3){
  player[0].gamesWon++;
  player[1].gamesLost++;
  alert('Awesome vertical line by player 1! X Wins!');
} else if(topRowX === 3 || midRowX === 3 || botRowX === 3){
  player[0].gamesWon++;
  player[1].gamesLost++;
  alert('Awesome horizontal line by player 1! X Wins!');
} else if(diagLeftX === 3 || diagRightX === 3){
  player[0].gamesWon++;
  player[0].gamesLost++;
  alert('Awesome diagonal line by player 1! X Wins!');
} else if(turn === 10){
  player[0].gamesTied++;
  player[1].gamesTied++;
  alert("It's a draw!");
}}}

function newBoard() {
  $(".box").empty();
  turn = 1;
  xPositions = [];
  oPositions = [];
  arrayindex = 0;
  colOneX = 0;
  colTwoX = 0;
  colThreeX = 0;
  topRowX = 0;
  midRowX = 0;
  botRowX = 0;
  diagLeftX = 0;
  diagRightX = 0;
  colOneO = 0;
  colTwoO = 0;
  colThreeO = 0;
  topRowO = 0;
  midRowO = 0;
  botRowO = 0;
  diagLeftO = 0;
  diagRightO = 0;
}

function drawXNO() {
  arrayindex = (Math.round(turn/2)-1);

    if (turn%2===1) {
          $(this).prepend('<img id="letterX" src="letterX.jpg"/>');
          xPositions.push($(this).attr('id'));
          turn++;
          switch (parseInt(xPositions[arrayindex], 10)) {
            case 1:
              colOneX++;
              topRowX++;
              diagLeftX++;
              break;
            case 2:
              colTwoX++;
              topRowX++;
              break;
            case 3:
              colThreeX++;
              topRowX++;
              diagRightX++;
              break;
            case 4:
              colOneX++;
              midRowX++;
              break;
            case 5:
              colTwoX++;
              midRowX++;
              diagRightX++;
              diagLeftX++;
              break;
            case 6:
              colThreeX++;
              midRowX++;
              break;
            case 7:
              colOneX++;
              diagRightX++;
              botRowX++;
              break;
            case 8:
              colTwoX++;
              botRowX++;
              break;
            case 9:
              colThreeX++;
              diagLeftX++;
              botRowX++;
              break;
        default:
          console.log('broke');
          break;}
      gameLogic();
} else if(turn%2===0) {
          $(this).prepend('<img id="letterO" src="letterO.jpg"/>');
          oPositions.push($(this).attr('id'));
          turn++;
          switch (parseInt(oPositions[arrayindex], 10)) {
            case 1:
              colOneO++;
              topRowO++;
              diagLeftO++;
              break;
            case 2:
              colTwoO++;
              topRowO++;
              break;
            case 3:
              colThreeO++;
              topRowO++;
              diagRightO++;
              break;
            case 4:
              colOneO++;
              midRowO++;
              break;
            case 5:
              colTwoO++;
              midRowO++;
              diagRightO++;
              diagLeftO++;
              break;
            case 6:
              colThreeO++;
              midRowO++;
              break;
            case 7:
              colOneO++;
              diagRightO++;
              botRowO++;
              break;
            case 8:
              colTwoO++;
              botRowO++;
              break;
            case 9:
              colThreeO++;
              diagLeftO++;
              botRowO++;
              break;
        default:
          console.log('broke');
          break;}
          gameLogic();}
}


$("button").click(newBoard);
$(".box").click(drawXNO);
  console.log('im ready!');
});
