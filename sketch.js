
var gameState=0;
var playerCount,player,game,form;
var database;
var allPlayers; 
var car1,car2,car3,car4,cars;   

function preload(){
  track=loadImage("images/track.jpg");
  car1IMG=loadImage("images/car1.png");
  car2IMG=loadImage("images/car2.png");
  car3IMG=loadImage("images/car3.png");
  car4IMG=loadImage("images/car4.png");
  ground=loadImage("images/ground.png");
  formBG=loadImage("images/car racing form.jpg");

  // rank1=loadImage("images/rank1.jpg");
  //       rank2=loadImage("images/rank2.jpg");
  //       rank3=loadImage("images/rank3.png");
  //       rank4=loadImage("images/rank4.png");

}
function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  
 database=firebase.database();
 game=new Game ();
 game.getState();
 game.start();
 
}

function draw() {
  if(playerCount===4){
    game.update(1);
    
  }
  if(gameState===1){
    clear();
    game.play();

  }
  if(gameState===2){
    game.end();
 
  
}
}
