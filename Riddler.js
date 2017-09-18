function numberGuess() {
	var randomNumber = Math.floor((Math.random() * 10) + 1);
	var yourGuess = document.getElementById("guess");
	
	if (yourGuess.value == randomNumber) {
		document.getElementById("prompt").innerHTML ="That is......Correct";
		}
	else {
		document.getElementById("prompt").innerHTML ="That is......InCorrect, Guess Again";
	}
}

function lastName() {
	var lname = "Nigma";
	var yourGuess = document.getElementById("guess1");
	
	if(yourGuess.value == lname) {
		document.getElementById("prompt1").innerHTML ="That is....Correct";
	}else{
		document.getElementById("prompt1").innerHTML ="That is.....InCorrect, Think Harder";
	}
}
