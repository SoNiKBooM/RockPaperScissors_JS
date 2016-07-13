/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global counters */
var rcount = 0;
var pcount = 0;
var scount = 0;
var tcount = 0;
var total = 0;

//Function for onclick event
var rpsrun = function() {



var userChoice = prompt("ROCK, PAPER OR SCISSORS?").toLowerCase();

var AIchoice = Math.random();
{
    if (AIchoice <= 0.33) {
        AIchoice = "rock";
    }
    else if (AIchoice < 0.67) {
        AIchoice = "paper";
    }
    else {
        AIchoice = "scissors";
    }
};



var compare = function (choice1, choice2) 

{
  if (choice1 === choice2)
  {
   document.getElementById("demo").innerHTML = "DRAW!";
   tcount++;
   total++;
  } 
  
   else if (choice1 === "rock")
  {
      if (choice2 === "scissors")
      {
          document.getElementById("demo").innerHTML = "ROCK wins!";
          rcount++;
          total++;
      }
    else
    {
        document.getElementById("demo").innerHTML = "PAPER wins!";
        pcount++;
        total++;
    }
  }
  
  else if (choice1 === "paper")
  {
      if (choice2 === "rock")
      {
          document.getElementById("demo").innerHTML = "PAPER wins!";
          pcount++;
          total++;
      }
    else
    {
        document.getElementById("demo").innerHTML = "SCISSORS wins!";
        scount++;
        total++;
    }
  }
  
  else if (choice1 === "scissors")
  {
      if (choice2 === "paper")
      {
        document.getElementById("demo").innerHTML = "SCISSORS wins!";
        scount++;
        total++;
      }
    else
    {
        document.getElementById("demo").innerHTML = "ROCK wins!";
        rcount++;
        total++;
    }
  }
  else
  {
      confirm("Please enter 'rock', 'paper' or 'scissors'");
      document.getElementById("demo").innerHTML = "ERROR: Answer ineligible";
  }
 };


    
compare (userChoice, AIchoice);

document.getElementById("choice1").innerHTML = "You ->" + " " + userChoice.toUpperCase() + " " + "vs" + " " + AIchoice.toUpperCase() + " " + "<- AI";
document.getElementById("rscore").innerHTML = "Rock:" + " " + rcount;
document.getElementById("pscore").innerHTML = "Paper:" + " " + pcount;
document.getElementById("sscore").innerHTML = "Scissors:" + " " + scount;
document.getElementById("tscore").innerHTML = "Tie:" + " " + tcount;
document.getElementById("total").innerHTML = "Total:" + " " + total;


};

