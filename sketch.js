const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var rope;
var fruit;
var fruit_con;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  ground = new Ground(200,690,600,20);
  rope = new Rope(6,{x:250,y:100});
  var fruit_options={
    density: 0.001
  }
  fruit = Bodies.circle(250,250,15,fruit_options);
  Matter.Composite.add(rope.body,fruit);
  fruit_con = new Link(rope,fruit);
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,15,15);
  Engine.update(engine);
  
}




