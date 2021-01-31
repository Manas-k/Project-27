
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 10;
	
	roofObject = new Roof(600,50,700,40);
	bobObject1 = new Bob(420,450,90);
	bobObject2 = new Bob(510,450,90);
	bobObject3 = new Bob(600,450,90);
	bobObject4 = new Bob(690,450,90);
	bobObject5 = new Bob(780,450,90);
	chain1 = new Chain(bobObject1.body,roofObject.body,-180,0);
	chain2 = new Chain(bobObject2.body,roofObject.body,-90,0);
	chain3 = new Chain(bobObject3.body,roofObject.body,0,0);
	chain4 = new Chain(bobObject4.body,roofObject.body,90,0);
	chain5 = new Chain(bobObject5.body,roofObject.body,180,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(245);
  
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  keyPressed();
  drawSprites();
 
}

//press up arrow key to apply force and and press down arrow key to reduce force	
function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-20,y:-25});

	}
}




