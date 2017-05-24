//the player is shown a random number between 19-120 at the start of the game
//when crystal is clicked an amount of points will be added to total score between 1-12.
//update the score when crystal is clicked
//player wins if thier total score matches the random number
//player loses if thier score is above random number
//game restarts when the player wins or loses
$(document).ready(function() {


var wins = 0;
var losses = 0; 
var playerPoints = 0;
var crystalNumbers = [];



//creates 4 number between 1-12 and puts them in an array called crystal numbers
	function crystalNumberGenerator() {

		for (var i = 0; i < 4; i++) {
			var numbers = Math.floor(Math.random()*12 + 1);
			crystalNumbers.push(numbers);
		}

		console.log(crystalNumbers);
	}

	crystalNumberGenerator();

//function that creates a random number between 19 and 120.
	function randomNumber(min, max) {
	 	
	 	return Math.floor(Math.random() * (max - min + 1)) + min; 
	}

//places the random number in the HTML
$("#randomNumber").text(randomNumber(19, 120));

//this function takes a number from the crystal numbers array and assigns it to a crystal.
function crystallMaker(crystalPosition) {
	playerPoints = playerPoints + crystalNumbers[crystalPosition];
		console.log(playerPoints);
//targets the playerScore id and changes it with the players score		
		$("#playerScore").text(playerPoints);	

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

	



















});
