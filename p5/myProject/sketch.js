function setup() {
  createCanvas(displayWidth, displayHeight);
  background('pink');
  noCursor(); // Hide the default mouse cursor
}


function draw() {
  // Draw a white dot at the current mouse position when the mouse is pressed
  if (mouseIsPressed) {
    fill('white');
    ellipse(mouseX, mouseY, 25, 25); // White dot with a diameter of 5
  }


  // Draw the rectangle wand at the current mouse position without leaving a trace
  fill('white');
  noStroke();
  rect(mouseX, mouseY, 2, 2); // Rectangle dimensions
}