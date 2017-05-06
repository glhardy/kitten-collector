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
$( document ).ready(function() {

	$("#rules").click(function() {
		$("#directions").slideToggle();
	});

	console.log('ready');

	var wins = 0;
	var losses = 0;
	var currentValue = 0;
	var goalValue = 0;
	var kittens = {
		"kitten1":0,
		"kitten2":0,
		"kitten3":0,
		"kitten4":0
	};

	function startGame() {

		function randomizeKittens() {

			for (var key in kittens) {
				console.log(key);
				kittens[key] = Math.floor((Math.random() * 12) + 1);
			}
			console.log(kittens);
		};

		$('.kitten').unbind('click');

		currentValue = 0;
		goalValue = 0;

		kittens = {
			"kitten1":0,
			"kitten2":0,
			"kitten3":0,
			"kitten4":0
		};

		console.log("game started");
		goalValue = Math.floor((Math.random() * 120) + 19);
		console.log("Goal Value : "+goalValue);
		currentValue = 0;
		console.log("currentValue: "+currentValue);
		randomizeKittens();

		$("#goalValue").html(goalValue);
		$("#currentValue").html(currentValue);
		$("#wins").html(wins);
		$("#losses").html(losses);

		$(".kitten").click(function(event) {
			console.log(event.target.id);

			currentValue += kittens[event.target.id];

			console.log(currentValue);
			$("#currentValue").html(currentValue);
			if (currentValue == goalValue) {
				wins ++;
				alert("You Win!");
				startGame();
			}
			else if (currentValue > goalValue) {
				losses ++;
				alert("You Lose :(");
				startGame();
			}
			else {
				console.log("keep playing");
			}
		});
	};


	$("#start").click(startGame);

});
