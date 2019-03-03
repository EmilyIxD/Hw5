function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 20; i <= 400; i = i + 5) {
    var startX = i;
    var startY = i;
    var endX = i;
    var endY = 10;
    line(startX, startY, endX, endY);
  }
}
