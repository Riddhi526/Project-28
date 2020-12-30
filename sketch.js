
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var ground1;
var tree1;
var boy;
var elasticBand;
var stone1;


function preload()
{
	boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
  ground1=new Ground(500,490,1000,20);
  tree1=new Tree(800,250,300,500);
  mango1=new Mango(800,200,50);
  mango2=new Mango(775,110,60);
  mango3=new Mango(700,150,50);
  mango4=new Mango(890,210,40);
  mango5=new Mango(760,210,20);
  mango6=new Mango(890,120,40);
  mango7=new Mango(820,110,40);
  mango8=new Mango(850,180,40);
  mango9=new Mango(710,210,50);
  mango10=new Mango(820,50,40);
  stone1=new Stone(100,100,80);
  boy=createSprite(250,425,80,130);
  boy.addImage(boyImage);
  boy.scale=0.1;
  elasticBand = new Elastic(stone1.body,{x: 200,y: 360});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  
  
  tree1.display();
  mango10.display();
  mango9.display();
  mango8.display();
  mango7.display();
  mango6.display();
  mango5.display();
  mango4.display();
  mango3.display();
  mango2.display();
  mango1.display();
  elasticBand.display();
  drawSprites();
  stone1.display();
  ground1.display();


  detectCollision(mango1,stone1);
  detectCollision(mango2,stone1);
  detectCollision(mango3,stone1);
  detectCollision(mango4,stone1);
  detectCollision(mango5,stone1);
  detectCollision(mango6,stone1);
  detectCollision(mango7,stone1);
  detectCollision(mango8,stone1);
  detectCollision(mango9,stone1);
  detectCollision(mango10,stone1);
  keyPressed();
} 
 function mouseDragged(){
   Matter.Body.setPosition(stone1.body,{x: mouseY, y: mouseY});
 }
function mouseReleased(){
  elasticBand.fly();
}
function detectCollision(object1,object2){
  

   var distance=dist(object2.x,object2.y,object1.x,object1.y);
   if (distance>=object2.r+object1.r){
      Matter.Body.setStatic(object2.body,false);
   }
   //console.log("hello");
}
function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(stone1.body,{x:200,y:360});
    elasticBand.attach(stone1.body);
  }
}
  
  
 
 




