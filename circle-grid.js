function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
	for (var i = 20; i <= 380; i = i + 40)
	for (var h = 20; h <=380; h = h + 30){
		circle(i, h, 10);
	}
}
