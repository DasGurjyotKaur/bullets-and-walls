var bullet
var wall,thickness
var speed , weight

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
 bullet=createSprite(50, 200, 10, 20);
  wall=createSprite(800,200,thickness,height/2);
wall.shapeColor="grey";
  speed=random(223,321);
  weight=random(30,52);
 bullet.velocityX=speed;

 






      }

function draw() {
  background(0);
   if(hasCollided(bullet,wall))
   { 
     bullet.velocityX=0; 
     var deformation=0.5*weight*speed*speed/22509; 
   
    if(deformation>10)
     { 
       wall.shapeColor="yellow";
    
       }
      if(deformation<10){
        wall.shapeColor="red";
      }
       }

  drawSprites();
}
function hasCollided(b,w){
  bulletRightEdge=b.x+b.width;
  wallLeftEdge=w.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}

