var stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < 800; i++) {
    stars[i].update();
    stars[i].show();
  }
}
