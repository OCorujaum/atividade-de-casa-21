
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var altura,largura,Sstatic;

var Ground,ball,Ground1,Ground2;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	altura=windowWidth;
	largura=windowHeight;


	


	engine = Engine.create();
	world = engine.world;



	
	Ground = new ground(width/2,height-10,width,10);
	Ground1 = new ground(width/1.25,height-65,5,100);
	Ground2 = new ground(width/1.5,height-65,5,100);		

	var ballOptions={
		restitution:0.3,
		friction:0,
		density:1.2,
		



	}
	ball=Bodies.circle(width/10,height-700,12,ballOptions);
	World.add(world,ball);


	

	
	



	Engine.run(engine);
  
}


function draw() {
  
  background(0);


  drawSprites();
  Engine.update(engine);
  Ground.displayGround();
  Ground1.displayGround();
  Ground2.displayGround();
  ellipse(ball.position.x,ball.position.y,12);

	


 
}

function keyPressed(){
	if(keyCode==RIGHT_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:10,y:-10});
	}
}

