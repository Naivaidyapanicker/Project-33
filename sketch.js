const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg
var ice=[];
var maxSnow=100;
var ground,groundIMG;
var santa , santaIMG;

function preload(){
  bg=loadImage("snow3.jpg");
 groundIMG=loadImage("ground.png");
 santaImg=loadAnimation("s1.PNG","s2.PNG","s3.PNG","s4.PNG","s5.PNG","s6.PNG","s7.PNG","s8.PNG","s9.PNG","s10.PNG","s11.PNG","s12.PNG")
 
}

function setup() {
  createCanvas(1300,600);
  
  engine=Engine.create();
  world= engine.world;
  
  ground=createSprite(650,670);
ground.addImage(groundIMG);
ground.scale=3.2;
ground.velocityX=-10;


santa=createSprite(200,0);
santa.addAnimation("santa",santaImg)
santa.scale=1.1;
santa.velocityX=2;
santa.setCollider("rectangle",15, -20,100,0) 

  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  
}
function draw() {
  background(bg);  
  Engine.update(engine);

  santa.collide(ground);

  if(ground.x < 530){
    ground.x=600;
  }

  if(santa.x > 1200){
    santa.x=150;
  }

  if(keyWentDown("space")&& santa.y >= 100) {
    santa.velocityY = -12;
}


santa.velocityY = santa.velocityY + 0.8


  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    

    ground.display();

  drawSprites();

}