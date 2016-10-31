// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var player = [];
  var turn = 1;
  var xPositions = [];
  var oPositions = [];
  var arrayindex = Math.floor(turn/2);
  var colOne = 0;
  var colTwo = 0;
  var colThree = 0;
  var topRow = 0;
  var midRow = 0;
  var botRow = 0;
  var diagLeft = 0;
  var diagRight = 0;


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

if(colOne === 3 || colTwo === 3 || colThree === 3){
  player[0].gamesWon++;
  alert('Awesome vertical line by player 1! X Wins!');
} else if(topRow === 3 || midRow === 3 || botRow === 3){
  player[0].gamesWon++;
  alert('Awesome horizontal line by player 1! X Wins!');
} else if(diagLeft === 3 || diagRight === 3){
  player[0].gamesWon++;
  alert('Awesome diagonal line by player 1! X Wins!');
}

}

function newBoard() {
  $(".box").empty();
  turn = 1;
  xPositions = [];
  oPositions = [];
}

function drawXNO() {
    if (turn%2===1) {
          $(this).prepend('<img id="letterX" src="letterX.jpg"/>');
          xPositions.push($(this).attr('id'));
          turn++;
          console.log(xPositions);
          switch (parseInt(xPositions[arrayindex], 10)) {
            case 1:
              colOne++;
              topRow++;
              diagLeft++;
              break;
            case 2:
              colTwo++;
              topRow++;
              break;
            case 3:
              colThree++;
              topRow++;
              diagRight++;
              turn++
              break;
            case 4:
              colOne++;
              midRow++;
              turn++;
              break;
            case 5:
              colTwo++;
              midRow++;
              diagRight++;
              diagLeft++;
              break;
            case 6:
              colThree++;
              midRow++;
              break;
            case 7:
              colOne++;
              diagRight++;
              botRow++;
              break;
            case 8:
              colTwo++;
              botRow++;
              break;
            case 9:
              colThree++;
              diagLeft++;
              botRow++;
              break;
        default:
          console.log('broke');
          break;}
      gameLogic();
} else if(turn%2===0) {
          $(this).prepend('<img id="letterO" src="letterO.jpg"/>');
          oPositions.push($(this).attr('id'));
          turn++;
          console.log(oPositions);
          gameLogic();}
}


$("button").click(newBoard);
$(".box").click(drawXNO);
  console.log('im ready!');
});
