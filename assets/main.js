




var wordBank = ["scar", "shotgun", "pistol", "glider", "pickaxe", "enemy", "squad", "fortnite", "victory", "volcano"];
var chosenWord;
var wordStatus = [];
var guessesLeft = 9;
var usedLetters = [];


function numbersOfGuessLeft() {
	document.getElementById("guessCount").innerHTML = guessesLeft;
};

function shadowDisplay() {
	for (i = 0; i < chosenWord.length; i++) {
		wordStatus[i] = "_ ";
	}
	
	var spanElement = document.createElement("span");
	var node = document.createTextNode(wordStatus.join(" "));
	spanElement.appendChild(node);
	document.getElementById("shadowWord").appendChild(spanElement);

};



function computerChoice() {
	chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	console.log(chosenWord);
};

document.onkeyup = function (e) {
	keyPress = event.key;
	usedLetters.push(keyPress);
	var spanElement = document.createElement("span");
	var node = document.createTextNode(keyPress + ",");
	spanElement.appendChild(node);
	document.getElementById("usedLetters").appendChild(spanElement);
	if (chosenWord[i] = event.key) {
		wordStatus.push(event.key)
	};
};




numbersOfGuessLeft();
computerChoice();
shadowDisplay();


