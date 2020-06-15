var ship, pirateship;
var ground, invisibleground,missile;
var obstaclegroup;

function preload(){
  shipImage = loadImage("ship.jpg");
 obstacleImage1 = loadImage("obstacle1.png");
 obstacleImage2 = loadImage("obstacle4.png");
 obstacleImage3 = loadImage("obstacle3.png");
 missile = loadImage("missile.png");

  
  groundImage = loadImage("ocean.png");
  
}

function setup() {
  createCanvas(800,380);
 
  
  

  ground = createSprite(200,180,400,20);
  ground.addImage("ocean.png",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;

  invisibleGround = createSprite(120,400,400,10);
  invisibleGround.visible = false;
  obstaclesGroup = new Group();

  ship = createSprite(120,390,20,70);
  ship.addImage("ship.jpg",shipImage);
  ship.scale = 0.3;
  console.log("ship");
}
function draw() {
  background(255,255,255);  
  
  

  if(keyDown("space")) {
     missile = createSprite(player.x,player.y,20,20);
    missile.addImage("missile.png");
    missile.scale = 0.5;
    missile.velocityX = 4;
}
  
if (obstaclegroup.isTouching(missile)) {
  obstaclegroup.destroyEach();
  missile.destroyEach();
  score  = score + 2;
 
  
  
} 

  ship.velocityY = ship.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  ship.collide(invisibleGround);
  

  spawnObstacles();
  
   var count = Math.round(frameCount/4);
  text("Score: "+ count, 500, 50);
  
  drawSprites();
}
function spawnObstacles() {
  if(frameCount % 80 === 0) {
    var obstacle = createSprite(600,329,10,40);
    obstacle.velocityX = -4;
    
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1:
      obstacle.addImage("obstacle",obstacleImage1);
        break;
        
         case 2:
      obstacle.addImage("obstacle",obstacleImage2);
        break;
        
       
       default:break;
        
         }           
    obstacle.scale = 0.2;
    obstacle.lifetime = 200;
    obstaclesGroup.add(obstacle);
  }
}