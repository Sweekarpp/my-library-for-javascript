function bounceoff(){
    if(istouching()){
    fixedRect.velocityY = fixedRect.velocityY*(-1);
    movingRect.velocityY = movingRect.velocityY*(-1);
    fixedRect.velocityX = fixedRect.velocityX*(-1);
    movingRect.velocityX = movingRect.velocityX*(-1);  
    }  
    }