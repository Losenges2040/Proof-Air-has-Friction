const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;
var Gg;
var ball;
var box1,box2;

function preload(){
backgroundImage = loadImage("BackG.jpeg");

}

function setup() {
  createCanvas(1280,800);
  engine = Engine.create();
world = engine.world;

Gg=new Ground(640,650,1280,50);
box1=new Box(326,0,99,39);
box2=new Box(380,-50,70,39);
var Option = {
  restitution:0.611213153121
}
ball=Bodies.circle(1150,50,34,Option);
World.add(world,ball);

Engine.run(engine);
}

function draw() {
  background(backgroundImage);  
 
  Gg.display();
  box1.display(); 
  box2.display();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,34,34);
}
