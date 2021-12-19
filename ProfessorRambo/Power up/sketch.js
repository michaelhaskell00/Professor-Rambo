// My canvas size with the framrate to create the movement of the objects at 120fps
function setup() {
  createCanvas(500,500);
  frameRate(120);
  rectMode(CENTER);
}

// The loop and background that represents Rambo's power
// Variety of ellipses which represent different powers and the main square that takes in all the ellipses
function draw() {
  let step = frameCount % 10;
  background(0);
  translate(80,80);
    applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);
  rect(0, 0, 50, 50);
  fill(0,0,255);
  stroke(255,153,0);
  strokeWeight(2);
  ellipse(50,100,20,20);
  fill(255,153,0);
  stroke(0,0,255);
  ellipse(250,250,40,40);
  fill(0,255,0);
  stroke(0,0,255);
  strokeWeight(6); ellipse(random(width),random(height),40,40);
  ellipse(200,200,20,20);
  fill(0);
  stroke(255,0,0);
  strokeWeight(8); ellipse(random(width),random(height),20,20);
  ellipse(170,170,60,60);
  fill(123,255,230);
  stroke(200,0,255);
  strokeWeight(4); ellipse(random(width),random(height),30,30);
    ellipse(290,290,80,80);
  fill(240,255,0);
  stroke(255,0,0);
  strokeWeight(5); ellipse(random(width),random(height),70,70);
}

