// function setup() {
//   createCanvas(displayWidth, displayHeight);
//   background('pink');
// }

// function draw() {
//   // Set the stroke color for the line
//   stroke('white');

//   // Calculate the center of the canvas
//   let centerX = width / 2;
//   let centerY = height / 2;

//   // Draw a line from the center of the canvas to a fixed position
//   line(centerX, centerY, 85, 75);

//   if (mouseIsPressed) {
//     // Draw a small circle at the mouse position when mouse is pressed
//     circle(mouseX, mouseY, 2);
//   } else {
//     // Draw a line originating from the center to the mouse position
//     line(centerX, centerY, mouseX, mouseY);
//   }
// }

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