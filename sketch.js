

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground;
var ground1;
var b1,b2,b3,b4,b5;
var b6,b7,b8,b9;
var polygon;
var polygonImage;
var rope1;

function preload(){
polygonImage = loadImage("polygon.png");

}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,40);
    ground1= new Ground(320,640,300,20);
    b1= new Box(265,625,30,30);
    b2= new Box(295,625,30,30);
    b3= new Box(325,625,30,30);
    b4= new Box(355,625,30,30);
    b5= new Box(385,625,30,30);
    b6= new Box(295,595,30,30);
    b7= new Box(325,595,30,30);
    b8= new Box(355,595,30,30);
    b9= new Box(325,565,30,30);
    polygon = Bodies.circle(100,600, 50);
    World.add(world, polygon);

    rope1= new Rope(polygon, {x:100, y:600})
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
ground.display();
ground1.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
ellipseMode(RADIUS);
imageMode(CENTER);
image(polygonImage, polygon.position.x, polygon.position.y, 50,50)
rope1.display();
}



function mouseDragged()
{
	Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	rope1.fly();
   
}




