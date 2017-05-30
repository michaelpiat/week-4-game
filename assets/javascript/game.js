$(document).ready(function() {


var wins = 0;
var losses = 0; 
var playerPoints = 0;
var gameNumber = 0;
var crystalNumbers = [];

	


	//creates 4 number between 1-12 and puts them in an array called crystal numbers	function crystalNumberGenerator() {
	function crystalNumberGenerator() {
		crystalNumbers = [];
		for (var i = 0; i < 4; i++) {
			var numbers = Math.floor(Math.random()*12 + 1);
			crystalNumbers.push(numbers);
		}
		console.log(crystalNumbers);
	}
	crystalNumberGenerator();


	//function that creates a random number between 19 and 120.
	function randomNumber(min, max) {
	 	gameNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
	}
	randomNumber(19, 120);


	
	function crystallMaker(crystalPosition) {
		//takes the array of crystal numbers at each position and addes them together for player points
		playerPoints = playerPoints + crystalNumbers[crystalPosition];	
		//the first if statment is the one that resets the game when the player has the same or more points then the random number
		if (gameNumber <= playerPoints) {
			//if the player points = the random number the player wins.
			if (gameNumber === playerPoints) {
				//increment wins
				wins++;
				$.dialog({
    				title: "You're a boss! You're a mogul!",
    				content: "Let's win more!",
					type: 'green',
    				typeAnimated: true
    			});
				$("#win").html(wins);
			//player lost if his points are more then the random number
			} else {
				//increment losses
				losses++;
				$.dialog({
    				title: 'You just played yourself',
    				content: "Let's try another one!",
					type: 'red',
    				typeAnimated: true
				});
				$("#loss").html(losses);
				
			}
		//this resets the game when the first if statment is true	
			playerPoints = 0;
			randomNumber(19, 120);
			crystalNumberGenerator();
			$("#randomNumber").html(gameNumber);
		}
		$("#playerScore").html(playerPoints);
	}

	//crystal 1 gets the number at index 0 of crystal numbers array
	$(".crystal1").on("click", function() {
	crystallMaker(0);
	})

	//crystal 1 gets the number at index 1 of crystal numbers array
	$(".crystal2").on("click", function() {	
	crystallMaker(1);	
	})

	//crystal 1 gets the number at index 2 of crystal numbers array
	$(".crystal3").on("click", function() {
	crystallMaker(2);
	})

	//crystal 1 gets the number at index 3 of crystal numbers array
	$(".crystal4").on("click", function() {
	crystallMaker(3);
	})


$("#randomNumber").html(gameNumber);



});














