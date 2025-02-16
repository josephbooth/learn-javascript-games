

	const squares = document.querySelectorAll('.square');
	const mole = document.querySelector('.mole');
	const timeLeft = document.querySelector('#time-left');
	const score = document.querySelector('#score');

	let nameOfHighScorePlayer;

	let newGame = document.getElementById('new-game');

	let result = 0; // game score
	let hitPosition;
	let currentTime = 60;
	let timerId = null;
	let countDownTimerId;

	document.getElementById('high-score').innerHTML = localStorage.getItem('highscore');
	document.getElementById('high-score-player').innerHTML = localStorage.getItem('highscoreplayer');

	function randomSquare() {

		squares.forEach(square => { 
			square.classList.remove('mole');
		});

		let randomSquare = squares[Math.floor(Math.random() * 9)];
		randomSquare.classList.add('mole');

		hitPosition = randomSquare.id;
	}

	squares.forEach(square => { 
		square.addEventListener('mousedown', () => {
			if (square.id == hitPosition) {
				result++;
				score.textContent = result;
				hitPosition = randomSquare.id;
			}
		});
	});

	function moveMole() {
		console.log('inside of moveMole fn');
		timerId = setInterval(randomSquare, moleSpeed());

	}

	function moleSpeed() {
		console.log('inside of moleSpeed');
	  	return Math.floor(Math.random() * (560 - 420 + 1) + 420)
	}

	//moveMole();

	function countDown () {
		console.log('in countDown function' + currentTime);

		currentTime--;
		timeLeft.textContent = currentTime;

		if (currentTime == 0) {
			clearInterval(countDownTimerId);
			clearInterval(timerId);
			alert('Game Over! Your final score is: ' + result);
			
			if (localStorage.getItem('highscore') < result) {
				localStorage.setItem('highscore', result);

				nameOfHighScorePlayer = prompt('What is your name?');

				localStorage.setItem('highscoreplayer', nameOfHighScorePlayer);
			}
			
			document.getElementById('high-score').innerHTML = localStorage.getItem('highscore');
			document.getElementById('high-score-player').innerHTML = localStorage.getItem('highscoreplayer');

			squares.forEach(square => { 
			square.classList.remove('mole');
			});

			document.getElementById('5').setAttribute('class', 'square mole');
		}

	}

	function startGame() {
		console.log('inside of startGame function');
		countDownTimerId = setInterval(countDown, 1000);
		moveMole();
	}












