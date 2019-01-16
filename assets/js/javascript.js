$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  $('#randomNumber').text(Random);
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
function YouWin(){
alert("You won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}
function YouLose(){
alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          YouWin();
        }
        else if ( userTotal > Random){
          YouLose();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          YouWin();
        }
        else if ( userTotal > Random){
          YouLose();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
     $('#finalTotal').text(userTotal);
          if (userTotal == Random){
          YouWin();
        }
        else if ( userTotal > Random){
          YouLose();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          YouWin();
        }
        else if ( userTotal > Random){
          YouLose();
        }
  });   
}); 