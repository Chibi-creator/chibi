var bathroomBackground,bathroomBackgroundImage
var bedroomBackground,bedroomBackgroundImage
var Car,CarImage
var keys,keysImage
var livingroomBackground,livingroomBackgroundImage
var obstacle,obstacleImage
var phone,phoneImage
var player,playerImage
var shelf,shelfImage
var shirt1,shirt1Image
var toothbrush,toothbrushImage
var toothpaste,toothpasteImage
var train,trainImage
var watch,watchImage
var score = 0
var play = 1
var start = 0
var end = 2
var gamestate = start


function preload() {
  bedroomBackgroundImage = loadImage('images/bedroomBackground.jpg');
  bathroomBackgroundImage = loadImage('images/bathroomBackground.png');
  CarImage = loadImage('images/Car.png');
  keysImage = loadImage('images/keys.png');
  livingroomBackgroundImage = loadImage('images/livingroomBackground.png');
  obstacleImage = loadImage('images/obstacle.png');
  phoneImage = loadImage('images/phone.jpg');
  playerImage = loadImage('images/player.png');
  shirt1Image = loadImage('images/shirt1.png');
  toothbrushImage = loadImage('images/toothbrush.png');
  toothpasteImage = loadImage('images/toothpaste.png')
  trainImage = loadImage('images/Train.png');
  watchImage = loadImage('images/watch.png');
  
}

function setup() {
  createCanvas(800,400);
  player  = createSprite(350,330,50,50);
  player.addImage(playerImage);
  player.scale = 0.4
  watch = createSprite(678, 322,20,20);
  watch.addImage(watchImage);
  watch.scale = 0.2;
  phone = createSprite()
  shirt1 = createSprite(300,300,20,20);
  shirt1.addImage(shirt1Image);
  shirt1.scale = 0.4;
  keys = createSprite(650,200,20,20);
  keys.addImage(keysImage);
  keys.scale = 0.2;
  //bedroomBackground = createSprite(400, 200, 100, 100)
  //bedroomBackground.addImage(bedroomBackgroundImage);
}

function draw() {
  background(0)
  if(gamestate===start){

      background(bedroomBackgroundImage);  
      if(keyDown(UP_ARROW)){
        player.y = player.y-5
      }
     if(keyDown(LEFT_ARROW)){
      player.x = player.x-5
      }
      if(keyDown(RIGHT_ARROW)){
         player.x = player.x+5
      }
     if(keyDown(DOWN_ARROW)){
     player.y = player.y+5
      }
     if(player.isTouching(shirt1)||player.isTouching(keys)||player.isTouching(watch)){
        score = score+2
      }
     text('SCORE:'+score,100,100)
     // if(score===6){
    // gamestate = play
      //}
}
  //if(gamestate===play){
    //background(bathroomBackgroundImage)
    //console.log('playState');
  //}
  drawSprites();
}