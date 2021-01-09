const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin1;	
var dustbin2;
var dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,300,10);

	var ground=createSprite(400,380,800,10);
	ground.shapeColor=("white");
	
	dustbin1 = new Dustbin(300,390,150,20);
	dustbin2 = new Dustbin(280,390,20,130);
    dustbin3 = new Dustbin(320,390,20,130);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
	Matter.Body.applyForce(paperObject,paperObject.body.position,{x:85,y:-85});
}

}
