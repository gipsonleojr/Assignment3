function play()
    {
  //This creates the random number from 1 to 6 for dice 1 and dice 2.
  var die1 = Math.ceil(Math.random() * 6);
  var die2 = Math.ceil(Math.random() * 6);
  //This is the sum of the numbers generated from dice 1 and dice 2.
  var sum = die1 + die2;
  //This generates the output within the html file for dice1, dice2, and the sum.
  document.getElementById("die1Res").innerHTML = "Die 1 = " + die1;
  document.getElementById("die2Res").innerHTML = "Die 2 = " + die2;
  document.getElementById("sumRes").innerHTML = "Result Roll = " + sum;
  //if statement to generate rule for winning if the list numbers are in the sum.
  if (sum==7||sum==11) {

  document.getElementById("finalRes").innerHTML = "You Win!!!"
   }
  //else if statement to generate rule for losing if the list numbers are in the sum.
  else if (sum==2||sum==3||sum==12){
  document.getElementById("finalRes").innerHTML = "You Lose."
  }
  //else statement to generate if the if or else if conditions are not met.
  else {document.getElementById("finalRes").innerHTML = "Roll again."}
        
    }