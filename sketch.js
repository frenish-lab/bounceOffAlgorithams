var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 300, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,300,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

  movingRect.velocityX= -5;
  fixedRect.velocityX = +5;
}

function draw() {
  background(0,0,0);  
   bounceOffAlogrithm();
  
  drawSprites();
}