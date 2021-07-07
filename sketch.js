var bg;
var backgroundIMG;



function preload(){
 backgroundIMG=loadImage("FruitsIMG/background img.jpg");


}


function setup() {
  createCanvas(800,400);

  bg=createSprite(400, 200, 50, 50);
  bg.addImage(backgroundIMG);




}

function draw() {
  background(255,255,255);  
  drawSprites();
}




