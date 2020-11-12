const Engine = Matter.Engine;
const World= Matter.World ;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world= engine.world;
  var groundoptions={
    isStatic:true
  }
  ground= Bodies.rectangle(200,390,400,30,groundoptions);
  World.add(world,ground);
 var balloptions={
   restitution:1
 }

  ball= Bodies.circle(200,20,20,balloptions);
  World.add(world,ball);

}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER);

  fill("brown");
  rect (ground.position.x,ground.position.y,400,30);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}