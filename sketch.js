var scaleX;
var scaleY;
var min;
var max;
var radius;
var r, g, b;

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0);
	smooth();
	r = random(255);
	g = random(255);
	b = random(255);
}

function drawEllipse() {
	noFill();
	stroke(r, g, b, 28);
	ellipse(0, 0, 120, 80);
}

function draw() {
	scaleX = map(mouseX, 0, windowWidth, 1.5, 11.5);
	scaleY = map(mouseY, 0, windowHeight, 1.5, 11.5);
	min = map(mouseX, 0, windowWidth, 0.1, 0.5);
	max = map(mouseY, 0, windowHeight, 0.8, 1.8);
	background(0);
	translate(windowWidth/2, windowHeight/2);
	for (var i=0; i<360; i += 0.5) {
		push();
		rotate(radians(i));
		translate(0, 200);
		rotate(radians(i*3));
		scale(map(sin(radians(i*scaleX)),	1, 1, min, max), map(sin(radians(i*scaleY)),	1, 1, min, max));
		drawEllipse();
		pop();
	}
}