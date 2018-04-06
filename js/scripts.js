//playernames
var player1 = "";
var player2 = "";


//function for rolling dice
var throwdice = function () {
  return Math.floor(Math.random()*6)+1;
}


//Function for Player turns
function player(turn){
  this.roll = 0;
  this.tempscore = 0;
  this.total = 0;
  this.turn = turn;
  this.playerName;
}


//Checking if equal to 1
if(this.roll === 1) {
  this.tempscore = 0;
  alert(this.playerName + "Scored a 1")
} else {
  this.tempscore += this.roll;
}


//Holding the Game
player.prototype.hold = function(){
  this.tempscore += this.roll;
  this.tempscore = 0;
  //Change turn
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
  this.playerName"";
}

//Clearing The Values of the Previous Players
var clearValues = function(){
  $(".player1").val("");
  $(".player2").val("");
}
