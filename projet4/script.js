
let colorlist =   ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("lightsteelblue");
}

function draw() {
  noStroke()
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 25, 25);
}


