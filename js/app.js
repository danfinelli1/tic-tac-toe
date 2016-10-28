// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  function drawX() {
    $(this).prepend('<img id="letterX" src="letterX.jpg"/>');

  }
  $(".box").click(function() {
    console.log(this);
    $(this).prepend('<img id="letterX" src="letterX.jpg"/>');


  });
  console.log('im ready!');
});
