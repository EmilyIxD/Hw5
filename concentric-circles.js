function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 200; i >= 10; i = i +- 5) {
		stroke (0, 0, 0);
		fill (255, 132, 0);
    circle (200, 200, i);
  }
}
