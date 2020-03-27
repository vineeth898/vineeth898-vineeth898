var r = 0;
var g = 255;
var b=255;
var Ellipse;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  createCanvas(1450,850);
 // fill(255);
  //Ellipse=ellipse(200,200,20);
}


function draw(){
r=map(World.mouseX,0,480,0,255);
g=map(World.mouseX,480,960,0,255);
b=map(World.mouseX,960,1450,0,255);
background(r,g,b);
fill(255);
Ellipse=ellipse(World.mouseX,World.mouseY,40);
}