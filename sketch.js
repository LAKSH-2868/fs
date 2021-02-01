var fairy,fairyImage;
var star,starImage;
var backGround,backGroundImage


function preload(){
   //preload the images here
  fairyImage = loadImage("fairy1.png");
  starImage = loadImage("star.png");
  backGroundImage = loadImage("starnight.png");

}

function setup() {
  createCanvas(800, 750);

  backGround = createSprite(800,750);
  backGround.addImage("back",backGroundImage);

  fairy = createSprite(200,150)
  fairy.addImage("fairy",fairyImage);
  
  star = createSprite(700,100)
  star.addImage("tara",starImage);

  
}


function draw() {
  background("black");


  drawSprites();
}
