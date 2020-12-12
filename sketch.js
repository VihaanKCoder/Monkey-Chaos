
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup,banana, obstacleGroup;
var ground;
var score, survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  //console.log(monkey.y)
  
  survivalTime = 0;
  score = 0;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("cyan");
  
  monkey.collide(ground);

  if (ground.x < 0) {
  ground.x = ground.width / 2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY+0.8;  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 300,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  drawSprites();
  food();
  obstacles();
}

function food(){
  if(World.frameCount % 60===0){
    banana = createSprite(400,300,20,20);
    banana.addImage("food", bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -3;
    banana.lifetime = 150;
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if(World.frameCount % 300===0){
    obstacle = createSprite(400,315,20,20);
    obstacle.addImage("dodge me",obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
    obstacle.lifetime = 150;
    obstacleGroup.add(obstacle);
  }  
}
























