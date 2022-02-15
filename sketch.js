var player1;
var player2;
var player3;
var player4;

var canvas;

var gamestate = 0;
var database, playercount;

var form, game;

var players;

var playaImg;
var playerImg1, playerImg2, playerImg3, playerImg4;

function preload(){

}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.gamestate();
  game.start();
  
}


function draw(){
  if(playercount === 4){
    game.update(1);
  }
}
