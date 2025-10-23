const guess = document.getElementById('guess');
const correctness = document.getElementById('correctness');
const scoreCounter = document.getElementById('scoreCounter');
const timer = document.getElementById('timer');
const restartMenu = document.getElementById('restartMenu');
const endScore = document.getElementById('endScore');

var selectedMode = 'goal';

var score = 0;
var totalGames = 0;

var gameActive = false;
var chosenBranchList;

var branches = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
var oldRandomBranch = 0;
var randomBranch;


function branchClicked(branch) {
	if (gameActive === false) {
		return;
	}
	if (selectedMode === 'goal') {
		if (branch === chosenBranchList[totalGames]) {
			correctness.innerHTML = 'Correct!';
			score++;
		} else {
			correctness.innerHTML = 'Incorrect!';
		}
		totalGames++

		scoreCounter.innerHTML = score + ' / ' + totalGames + '<br>' + Math.floor(score / totalGames * 100) + '%';
		guess.innerHTML = 'Find branch: ' + chosenBranchList[totalGames];

		if (totalGames === 12) {
			gameEnded();

			var randomBranch = Math.floor(Math.random() * 12);
			guess.innerHTML = "Find branch: " + branches[randomBranch];
		}
		return
	}

	totalGames++;
	if (branch === branches[randomBranch]) {
		//console.log('Correct!');
		correctness.innerHTML = 'Correct!';
		score++;
	} else {
		correctness.innerHTML = 'Incorrect!';
	}
	scoreCounter.innerHTML = score + ' / ' + totalGames + '<br>' + Math.floor(score / totalGames * 100) + '%';

	oldRandomBranch = randomBranch;
	while (randomBranch === oldRandomBranch) {
		randomBranch = Math.floor(Math.random() * 12);
		//console.log(branches[randomBranch]);
		guess.innerHTML = 'Find branch: ' + branches[randomBranch];
	}
}

function modeSelected() {
	selectedMode = document.getElementById('modeSelect').value;
}

function restart() {
	score = 0;
	totalGames = 0;
	gameActive = true;

	var randomBranch = Math.floor(Math.random() * 12);
	guess.innerHTML = "Find branch: " + branches[randomBranch];

	if (selectedMode === 'timed') {
		startTime(90000);
	} else if (selectedMode === 'goal') {
		startCounter();
	}

	restartMenu.style.display = 'none';
	scoreCounter.style.display = 'block';
}

function startTime(milliSeconds) {
	var timeLeft = milliSeconds / 1000;
	timer.style.display = 'auto';

	timer.innerHTML = Math.floor(timeLeft/60)+':'+timeLeft % 60;
	var updateTimer = setInterval(function() {
		timeLeft -= 1;
		timer.innerHTML = Math.floor(timeLeft/60)+':'+timeLeft % 60;
		if (timeLeft === 0) {
			clearInterval(updateTimer);
			gameEnded();
		}
	}, 1000);

}
function startCounter() {
	timer.style.display = 'none';

	chosenBranchList = [];
	for (var count = 0; count < 12; count++) {
		randomBranch = Math.floor(Math.random() * 12);

		while (chosenBranchList.includes(branches[randomBranch])) {
			randomBranch = Math.floor(Math.random() * 12);
		}
		chosenBranchList.push(branches[randomBranch]);
	}
	console.log(chosenBranchList);

	guess.innerHTML = 'Find branch: ' + chosenBranchList[totalGames];
}

function gameEnded() {
	gameActive = false;
	restartMenu.style.display = 'block';
	scoreCounter.style.display = 'none';
	endScore.innerHTML = score + ' / ' + totalGames + '<br>' + Math.floor(score / totalGames * 100) + '%';
}