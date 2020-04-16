let classifier;
let label = 'listening...';
let soundModel = 'http://127.0.0.1:5500/my_model/';
let istigfar = 0;
let subhanallah = 0;

function preload() {
	classifier = ml5.soundClassifier(soundModel + 'model.json');
}

function setup() {
	createCanvas(500, 300);
	classifier.classify(gotResult);
}

function draw() {
	background(0);

	fill(255);
	textSize(32);
	textAlign(CENTER, CENTER);
	text("SMART TASBE (test 1)", width / 2, height / 2 - 70);
	text('istigfar: ' + istigfar + " kali", width / 2, height / 2);
	// text('Subhanallah: '+subhanallah, width / 2, height / 2);
}

function gotResult(error, results) {
	if (error) {
		console.error(error);
		return;
	}
	
	
	label = results[0].label;
	let confidence = results[0].confidence;
	let percent = Math.floor(confidence * 100);

	if (label == 'istigfar' && percent > 85) {
		istigfar = istigfar + 1;
		console.log(percent);
	} else {
		istigfar = istigfar + 0;
	}
}
