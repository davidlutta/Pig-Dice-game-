//playernames
// var player1 = "";
// var player2 = "";


//function for rolling dice
var throwdice = function () {
  return Math.floor(Math.random()*6)+1;
}


//Function for Player turns
function player(){
  this.roll = 0;
  this.tempscore = 0;
  this.total = 0;
  // this.t
  // this.playerName = playerName;
}
 // var playerName =

//Checking if equal to 1
player.prototype.rollone = function (){
if(this.roll === 1) {
  this.tempscore = 0;
  alert(this.playerName + "Scored a 1, so please switch")
} else {
  this.tempscore += this.roll;
}
}

//Holding the Game
player.prototype.hold = function(){
  this.tempscore += this.roll;
  // this.tempscore = 0;
  // Change =turn
  alert("Time to switch !")
}

//Checking if equal to 100 to see winner
player.prototype.checkWinner = function(){
if(this.roll >= 100) {
  alert(this.playerName + " is the winner Yaay !")
  }
}


// In the case of a new Game
function newGame(turn){
  this.roll = 0;
  this.tempscore = 0;
  this.total = 0;
  this.playerName = "";
}

// Clearing The Values of the Previous Players
var clearValues = function(){
  $(".player1").val("");
  $(".player2").val("");
}


//User-Logic
$(document).ready(function(){
  // Displaying Players names
  $("button#start").click(function(event){
    event.preventDefault();
    var player1 = new player("player1");
    var player2 = new player("player2");
    $(".playerconsolecontainer").show();
    $(".intro").hide();

    var player1 = $("input#player1").val();
    $("#player1").html(player1);
    console.log(player1);
    var player2 = $("input#player2").val();
    $("#player2").text(player2);
    console.log(player2);
    // player1.playerName = player1;
    // player2.playerName = player2;
  });
  //Player One rolling
  $("button#player1-roll").click(function(event){
    player1.roll = throwdice();
    console.log(player1.roll);
    // player1 = rollone();
    console.log(player1.total.rollone());
    $("#roundtotal1").text(player1.tempscore);
  });
  //player One Holding
  // $("button#player1-hold").click(function(event){
  //   player1.hold();
  //   $("#total-score-1").text(player1.totalscore);
  //   $("#round-total-1").empty();
  //   $("#die-roll-1").empty();
  //   player1.winnerCheck();
  // });
  //Player Two rolling
  // $("button#player2-roll").click(function(event){
  //   player2.roll = throwdice();
  //   player2.rollone();
  //   $("#roundtotal2").text(player2.tempscore);
  // });
  //Player Two Holding
  // $("button#player2-hold").click(function(event){
  //   player1.hold();
  //   $("#total-score-2").text(player1.totalscore);
  //   $("#round-total-2").empty();
  //   $("#die-roll-2").empty();
  //   player2.winnerCheck();
  // });
  //Starting a New Game
  // $("button#newStart").click(function(event){
  //   $(".player-console").hide();
  //   clearValues();
  //   player1.newGame();
  //   player2.newGame();
  //   $("#round-total-1").empty();
  //   $("#total-score-1").empty();
  //   $("#die-roll-1").empty();
  //   $("#round-total-2").empty();
  //   $("#total-score-2").empty();
  //   $("#die-roll-2").empty();
  //
  //   $(".start-menu").show();
  // });
});
