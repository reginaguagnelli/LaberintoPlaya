var player1;
var player2;
var player3;
var player4;

var canvas;

var gamestate = 0;
var database, playercount;

var form, game;

var player, players;

var allPlayers;

var playaImg;
var playerImg1, playerImg2, playerImg3, playerImg4;

function preload(){
playaImg=loadImage("playa.jpg")
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
  if(gamestate===1){
    game.play();
  }
}
