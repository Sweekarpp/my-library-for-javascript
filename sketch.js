var fixedRect,movingRect;

function setup() {
  createCanvas(800,800);
 fixedRect = createSprite( 400, 0, 50, 50);
 movingRect = createSprite( 400, 800, 50, 50);
 fixedRect.shapeColor = 'magenta';
 movingRect.shapeColor = 'orange';
 fixedRect.velocityY = 4;
 movingRect .velocityY = -4;
}

function draw() {
  background(0,0,0);
  

  bounceoff();
  drawSprites();
}

