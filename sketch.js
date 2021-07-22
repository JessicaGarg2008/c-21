function setup() {
  createCanvas(1000,400);
  
  thickness = random(20,80);

 bullet = createSprite(50,200,50,50);

wall = createSprite(800,200,20,height/2);



speed = random(55,90);
bullet.velocityX = speed ;

weight = random(400,1500);

}

function draw() {
  background(0,0,0);
  
  if (hasCollided(bullet,wall)){

    bullet.velocityX=0;
    var damage = .5 * weight * speed* speed/(thickness *thickness *thickness) ;

    if(damage<10){

  bullet.shapeColor = color(255,0,0)

    }

    else if(damage>10 ){

  bullet.shapeColor = color(230,230,0);

    }

else{
bullet.shapeColor = color(255,0,0);

}


}




  
  

  drawSprites();
}
function hasCollided(bullet,wall){

  if(wall.x-bullet.x<bullet.width/2+wall.width/2){

return true 

  }

  else{

return false 

  }

}