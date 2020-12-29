const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var ground;
var world;
//var ball;
//var ball2;
var box1;
var box2;
var box3;
var box4;
var box5;

var pig1, pig2;

var log1,log2,log3,log4;

var bird;

function setup() {
  createCanvas(1200,400);
 
  engine = Engine.create();
  world = engine.world;
 /* var ball_options = {
    restitution : 0.8
  }
  var ball2_options = {
    restitution : 1
  }*/
  
 ground = new Ground(600,380,1200,20);

 /* ball = Bodies.circle(200,200,25,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(100,200,25,ball2_options);
  World.add(world,ball2);*/

  box1 = new Box(800,300,70,70);
  box2 = new Box(1000,300,70,70);
  box3 = new Box(800,200,70,70);
  box4 = new Box(1000,200,70,70);
  box5 = new Box(900,50,70,70);
 
  pig1 = new Pig(900,300);
  pig2 = new Pig(900,200);

  log1 = new Log(900,200,270,PI/2);
  log2 = new Log(900,100,270,PI/2);
  log3 = new Log(800,50,130,PI/7);
  log4 = new Log(1000,50,130,-PI/7);

  bird = new Bird(100,100);
}

function draw() {
  background("black");  
 
  Engine.update(engine);
  
  
 /* fill("red");

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);

  fill("violet");
  ellipseMode(RADIUS);
  ellipse(ball2.position.x,ball2.position.y,25,25);*/
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  ground.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  bird.display();
}