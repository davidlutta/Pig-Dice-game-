// business-Logic

// Function for Throwing Dice

var throwdice = function () {

  return Math.floor(Math.random()*6)+1;

}

function player (roll, tempscore, total){

  this.roll = roll;

  this.tempscore=  tempscore;

  this.total = total;

}

var playerName1 = new player(0, 0, 0);

var playerName2 = new player(0, 0, 0);

//Check if equal to 1

player.prototype.rollone = function(){

  if(this.roll === 1){

    this.tempscore = 0;

    alert("The current Player Scored a 1 please switch !")

  } else {

    this.tempscore += this.roll;

  }

}

//Holding Function

player.prototype.hold = function(){

  this.total += this.tempscore;

  this.tempscore = 0;

  // Changing the player

  alert("The current player has Held the game pass on to the next player");

}

//Checking for the winner

player.prototype.winnerCheck = function(){

  if(this.total >= 100){

    alert("You are the Winner ! Yaay")

  }

}


//Function for Sterting a new game

player.prototype.newGame = function(roll, tempscore, total){

  this.roll = roll;

  this.tempscore = tempscore;

  this.total = total

}


//User-Logic

$(document).ready(function(){

  $("button#start").click(function(event){

    event.preventDefault();

        $(".playerconsolecontainer").show();

        $(".intro").hide();

        var player1Name = $("input#player1").val();

        $("h2#player1").text(player1Name + " :");

        var player2Name = $("input#player2").val();

        $("h2#player2").text(player2Name + " :");

        //Player1 Rolling dice and checking if value is equal to one and showing the round total

        $("button#player1-roll").click(function(event){

          playerName1.roll = throwdice();


          $("#die-roll-1").text(playerName1.roll);

          playerName1.rollone();

          $("#roundtotal1").text(playerName1.tempscore);

        })

        //Player 2 rolling Dice and checking if the value is equal to Onea nd showing the round total

        $("button#player2-roll").click(function(event){

          playerName2.roll = throwdice();

          $("#die-roll-2").text(playerName2.roll);

          playerName2.rollone();

          $("#roundtotal2").text(playerName2.tempscore);

        })

        // player 1 Holding and printing the totoal Score and checking for the winner

        $("button#player1-hold").click(function(event){

          playerName1.hold();

          $("#totalscore1").text(playerName1.total);

          $("#roundtotal1").empty();

          $("#die-roll-1").empty();

          playerName1.winnerCheck();

        });

        // Player 2 Holding and printing the total Score and checking for the winner

        $("button#player2-hold").click(function(event){

          playerName2.hold();

          $("#totalscore2").text(playerName2.total)

          $("#roundtotal2").empty();

          $("#die-roll-2").empty();

          playerName2.winnerCheck();

        });

        //Starting a New game

        $("button#newStart").click(function() {

          $(".playerconsolecontainer").hide();

          $("input#player1").val("");

          $("input#player2").val("");

          playerName1.newGame();

          playerName2.newGame();

          $("#die-roll-1").empty();

          $("#roundtotal1").empty();

          $("#totalscore1").empty();

          $("#die-roll-2").empty();

          $("#roundtotal2").empty();

          $("#totalscore2").empty();

          $(".intro").show();

        });

  });

});
