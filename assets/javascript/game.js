/*
	Landing Page:
	Title & Game directions
	button "click to play"
			-
			When button is clicked:
			Display images and game div
			generate random number in goal value
			-display number
			each kitten is assigned a value
			-you see 0 in your number

	Functions :
	when kitten is clicked, value is added to your number
	when your number matches goal number - add to wins and restart game
	if your number goes over - add to loss and restart game
	else - nothing

*/  

var yourNumber = 0;
var goalValue = 0;
var kittens = ["kitten1", "kitten2", "kitten3", "kitten4"];

var wins = 0;
var losses = 0;

$("start").click(startGame);
$("kittens").click(addPoints);

$("#goalValue").html(goalValue);
$("#yourNumber").html(yourNumber);
$("#wins").html(wins);
$("#losses").html(losses);

function randomizeKittens() {
	for (var i = 0; i < kittens.length; i++) {
		kittens[i] = Math.floor((Math.random() * 12) + 1);
	console.log(kittens[i]);
	};
};

function startGame() {
	console.log("game started");
	goalValue = Math.floor((Math.random() * 120) + 19);
	console.log(goalValue);
	yourNumber = 0;
	console.log(yourNumber);
	randomizeKittens();

};

function addPoints() {
	yourNumber = kittens[i] + yourNumber;
};

$("start").click(startGame);
$("kittens").click(addPoints);

