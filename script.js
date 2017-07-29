var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

if (!touchsupport){ // browser doesn't support touch
  document.getElementById("rock").className += "jiggly";
	document.getElementById("paper").className += "jiggly";
	document.getElementById("scissors").className += "jiggly";
}




var icons = document.getElementById("icon_container");

var options = ["rock", "paper", "scissors"];

//opponent move, my move, my outcome
var outcomes = [ ["rock", "rock", "tie"],
								 ["rock", "paper", "win"],
								 ["rock", "scissors", "lose"],
								 ["paper", "rock", "lose"],
								 ["paper", "paper", "tie"],
								 ["paper", "scissors", "win"],
								 ["scissors", "rock", "win"],
								 ["scissors", "paper", "lose"],
								 ["scissors", "scissors", "tie"] ];

//score variables
var myScore = 0;
var opponentScore = 0;

//When the icon container is clicked...
icon_container.onclick = function(event) {

	//find out where in the container the click occured
	var source = event.target;

	//stop animation on touch screen devices
	source.className += "no-jiggly";

	//make sure it was an icon that was clicked
	if (source.id !== "rock" && source.id !== "paper" && source.id !== "scissors") {
		return false;
	}

	//save my move
	var myMove = source.id;

	//remove icons other than the one you picked
	for (i = 0; i < options.length; i++) {
		if (myMove !== options[i]) {
			document.getElementById(options[i]).style.visibility="hidden";
		}
	}

	//save the opponent move
	var opponentMove = options[Math.floor(Math.random() * options.length)];

	//remove icons other than the one the computer picked
	for (i = 0; i < options.length; i++) {
		if (opponentMove !== options[i]) {
			document.getElementById(options[i] + "2").style.visibility="hidden";
		}
	}

	//obtain result of game
	var result;
	for (i in outcomes) {
		if (outcomes[i][0] === opponentMove && outcomes[i][1] === myMove) {
			result = outcomes[i][2];
		}
	}

	//update score based on result
	if (result === "win") {
		myScore++;
	} else if (result === "lose") {
		opponentScore++;
	}

	//display score 
	document.getElementById("yourScore").textContent = "" + myScore;
	document.getElementById("opponentScore").textContent = "" + opponentScore;

	//change winner's text color to red for a little and blink their name
	if (result === "win") {
		document.getElementById("you").style.color = "#ad0b95";
		// document.getElementById("you").className += "blink";
	} else if (result === "lose") {
		document.getElementById("computer").style.color = "#ad0b95";
		// document.getElementById("computer").className += "blink";
	}

	//redisplay the icons after a short delay...
	setTimeout(function() {
		document.getElementById("rock").style.visibility = "visible";
		document.getElementById("rock2").style.visibility = "visible";
		document.getElementById("paper").style.visibility = "visible";
		document.getElementById("paper2").style.visibility = "visible";
		document.getElementById("scissors").style.visibility = "visible";
		document.getElementById("scissors2").style.visibility = "visible";

		//...and also change winner's score color back to white
		document.getElementById("you").style.color = "white";
		// document.getElementById("you").className.replace(/(?:^|\s)blink(?!\S)/,'');
		document.getElementById("computer").style.color = "white";
		// document.getElementById("computer").className.replace(/(?:^|\s)blink(?!\S)/,'');

		// source.className.replace("jiggly");
		// document.getElementById("rock").className.replace("jiggly");
		// document.getElementById("paper").className.replace("jiggly");
		// document.getElementById("scissors").className.replace("jiggly");
		source.className = "jiggly";

	}, 1600);




};

