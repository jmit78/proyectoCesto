const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body  = Matter.Body;
 
let engine;
let world;


var ground,pelota,boton,boton2,botonup2,botonup;
var left;
var right;
var right2;
var top_wall;
var top_wall2;

function preload(){
  boton2 = loadImage("right.png");
  botonup2 = loadImage("up.png");
}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;
  ground =new Ground(600,590,1800,20);
  right = new Ground(1200,530,20,100);
  right2 = new Ground(1360,530,20,1200);
  left = new Ground(1000,530,20,100);
  top_wall = new Ground(10,100,20,1000);
  top_wall2 = new Ground(100,10,2500,20);
  pelota = new Ball(200,200,50);
  botonup = createSprite(300,300);
  botonup.addImage("botonup2",botonup2);
  botonup.scale = 0.1;
  boton = createSprite(200,200);
  boton.addImage("boton2",boton2);
  boton.scale = 0.5;
  //boton.mouseClicked(pelota.Hforce);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  top_wall2.show();
  left.show();
  right.show();
  right2.show();
  pelota.show();
  Engine.update(engine);
  if(mousePressedOver(boton)){
    pelota.Hforce()
  }
     if(mousePressedOver(botonup)){
    pelota.Hforceup()
  }
  drawSprites();
}

