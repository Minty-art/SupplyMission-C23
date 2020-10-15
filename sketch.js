var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var boxB,boxL, boxR
var packageBody,ground, boxBSprite, boxLSprite, boxRSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{  
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	boxB = createSprite(width/2, 660, 200, 7)
	boxL = createSprite(width/2 + 100,640, 7, 50)
	boxR = createSprite (width/2 - 100,640, 7, 50)

	boxB.shapeColor= "red"
	boxL.shapeColor= "red"
	boxR.shapeColor= "red"

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	// box
	boxBSprite = Bodies.rectangle(width/2, 660, 90, 30,{isStatic:true});
	boxLSprite = Bodies.rectangle(width/2 + 45,625, 30, 100, {isStatic:true});
	boxRSprite = Bodies.rectangle (width/2 - 45,625, 35, 100, {isStatic:true});
	World.add(world, boxBSprite);
	World.add(world, boxLSprite);
	World.add(world, boxRSprite);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
  }
}