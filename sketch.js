function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0);
	smooth();
}

function drawEllipse() {
	noFill();
	stroke(255, 255, 255, 28);
	ellipse(0, 0, 120, 80);
}

function draw() {
	background(0);
	translate(windowWidth/2, windowHeight/2);
	for (var i=0; i<360; i += 0.5) {
		push();
		rotate(radians(i));
		translate(0, 200);
		rotate(radians(i*3));
		scale(map(sin(radians(i*6)),	1, 1, 0.5, 1), map(sin(radians(i*3)),	1, 1, 0.5, 1));
		drawEllipse();
		pop();
	}
}