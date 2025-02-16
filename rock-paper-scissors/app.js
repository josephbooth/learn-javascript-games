

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const computerScoreDisplay = document.getElementById('computer-score');
const userScoreDisplay = document.getElementById('user-score');
const tauntDisplay = document.getElementById('taunt');
const possibleChoices = document.querySelectorAll('button');

const playGameToTen = 10;

let userChoice;
let computerChoice;
let computerScore = 0;
let userScore = 0;
let computerTaunt;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {

	userChoice = e.target.id;
	userChoiceDisplay.innerHTML = userChoice;

	generateComputerChoice();
	getResult();
	getTaunt(computerScore, userScore);
	anyPlayerWinTenGames();

}));

function generateComputerChoice() {

	const randomNumber = Math.floor(Math.random() * 3) + 1;
	
	if (randomNumber === 1) {
		computerChoice = 'rock';
	}

	if (randomNumber === 2) {
		computerChoice = 'scissors';
	}

	if (randomNumber === 3) {
		computerChoice = 'paper';
	}

	computerChoiceDisplay.innerHTML = computerChoice;

}


function getResult() {
	if (computerChoice === userChoice) {
		result = "it's a draw";
	}
	if (computerChoice === 'rock' && userChoice === 'scissors') {
		result = 'you lose';
		computerScore += 1;
	}
	if (computerChoice === 'rock' && userChoice === 'paper') {
		result = 'you win';
		userScore += 1;
	}
	if (computerChoice === 'paper' && userChoice === 'rock') {
		result = 'you lose';
		computerScore += 1;
	}
	if (computerChoice === 'paper' && userChoice === 'scissors') {
		result = 'you win';
		userScore += 1;
	}
	if (computerChoice === 'scissors' && userChoice === 'rock') {
		result = 'you win';
		userScore += 1;
	}
	if (computerChoice === 'scissors' && userChoice === 'paper') {
		result = 'you lose';
		computerScore += 1;
	}

	resultDisplay.innerHTML = result;
	computerScoreDisplay.innerHTML = computerScore;
	userScoreDisplay.innerHTML = userScore;

}



function getTaunt(computerScore, userScore, winningMessage) {

	const winningTaunt = [	'I am unbeatable puny human',
							'You are weak human', 
							'No match for superior Computer', 
							'Do you even know the object of this game?',
							'Not even close...'	
						 ];
	const losingTaunt = [	'Play again fleshbag?',
							'Pretty sure you are using Google to beat me', 
							'Stop looking at my code', 
							'I am about to reboot',
							'Keep it up and I hack your bank account'	
						 ];
	const randomNumber = Math.floor(Math.random() * 4) + 1;

	if (computerScore === userScore) {
		tauntDisplay.innerHTML = "press a button... let's break this tie."
	}

	if (computerScore > userScore) {
		tauntDisplay.innerHTML = winningTaunt[randomNumber];
	}

	if (computerScore < userScore) {
		tauntDisplay.innerHTML = losingTaunt[randomNumber];
	}


}

function anyPlayerWinTenGames() {

	if (computerScore === playGameToTen || userScore === playGameToTen) {
		
		let theWinner = whoHasTenPoints();

		document.getElementById("rock").style.display = "none";
		document.getElementById("paper").style.display = "none";
		document.getElementById("scissors").style.display = "none";

		document.getElementById("restart").style.display = "block";

		resultDisplay.innerHTML = "Game Over" + theWinner + "wins";
	}

	function whoHasTenPoints() {
		if (computerScore === playGameToTen) return " Computer ";
		if (userScore === playGameToTen) return " Human ";
	}

}



























