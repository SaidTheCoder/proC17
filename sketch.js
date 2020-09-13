var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var monkeysound;

function preload(){
  
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  monkeysound = loadSound("monkey1.mp3")
}



function setup() {
createCanvas(400,400)

 ground=createSprite(200,370,800,20)  
 ground.velocityX=-4;
   ground.x=ground.width/2; 
monkey=createSprite(50,300,20,20)
monkey.addAnimation("monkeyrunning",monkey_running);
monkey.scale=0.2;
  
}


function draw() {
background("cyan")
text("score= "+ score,300,40)
if(ground.x<0){
 ground.x=ground.width/2; 
}
monkey.collide(ground)
  
monkey.velocityY= monkey.velocityY + 0.91;
  
  
if(keyDown("space")){
monkey.velocityY=-10;
}


  
food();
obstacles();
drawSprites();
}

function food(){
if(frameCount%110==0){
banana=createSprite(400,200,20,20)
banana.addImage(bananaImage)
banana.velocityX=-7;
banana.scale=0.15
banana.lifetime=100;
 }
}

function obstacles(){
 if(frameCount%110==0){
  obstacle=createSprite(400,300,20,20)
  obstacle.addImage(obstacleImage)
  obstacle.velocityX=-6;
  obstacle.scale= 0.3;
  obstacle.lifetime=100;
 }
}

