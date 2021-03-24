
var redBubble,blueBubble,greenBubble,yellowBubble;
var canvas;
var engine,world;
var red,yellow,green,blue,levels,levelsImg,star,starI;
var back,backImg,fire,fireObj;

 const Constraint=Matter.Constraint;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies; 

function preload(){
    red=loadImage("redBubble.png");
    blue=loadImage("blueBubble.png");
    green=loadImage("greenBubble.png");
    yellow=loadImage("YellowBubble.png");
    backImg=loadImage("mainBack.png");
     levelsImg=loadImage("levelUpImage.png");
    starI=loadImage("star.png"); 
    fire=loadImage("firing.jpg");
}

function setup(){
    canvas=createCanvas(displayWidth,displayHeight);
    engine=Engine.create();
    world=engine.world;
    form=new Form();
    
    
}

function draw(){
    Engine.update(engine);
  
    form.display();
    
}