// Game pieces

var targetScore; // Between 18 and 120
var crystals = []; // Four values inside between 1 and 12

// User input variables

var score = 0;
var wins = 0;
var losses = 0;

// Returns a random integer between min (included) and max (included)

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Set the game pieces

function setGame() {

	targetScore = getRandomInt(19, 119);
	$("#target-score").text(targetScore);

	// Loop to get four values in crystals array

	for (var i = 0; i < 4; i++) {
		var temp = getRandomInt(1, 12);
		crystals.push(temp);
	};

	// Reset elements

	score = 0;
	$("#current-score").text(score);

};

// Check the score to determine if it equals or surpasses target score and ends the game

function checkScore() {
	if (score === targetScore) {
		alert("You win!");
		wins++;
		$("#win-count").text(wins);
		setGame();
	} else if (score > targetScore) {
		alert("You lose :(");
		losses++;
		$("#loss-count").text(losses);
		setGame();
	};
};

$(document).ready(function() {
	setGame();
	$("#win-count").text(wins);
	$("#loss-count").text(losses);

	// Loop through crystals to set click events for crystal values

	for (let i = 0; i < crystals.length; i++) {
		$("#crystal-" + (i + 1)).on("click", function() {
			var crystalValue = parseInt(crystals[i]);
			score += crystalValue;
			$("#current-score").text(score);
			checkScore();
		});
	};
});