
let colorlist =   ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  
  fill("white");
  textFont("sans-serif");
  textSize(100);
  textAlign(CENTER);
  textStyle(BOLD);
  stroke('deepskyblue');
  strokeWeight(5);

  text("Bonjour !", 300, 150);
  ellipse(20, 20, 20);
 
}


