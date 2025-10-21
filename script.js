const guess = document.getElementById('guess');
const correctness = document.getElementById('correctness');
const scoreCounter = document.getElementById('scoreCounter');

var selectedMode = 'timed';

var score = 0;
var totalGames = 0;

var branches = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
var oldRandomBranch = 0;
var randomBranch = Math.floor(Math.random() * 12);
//console.log(branches[randomBranch]);
guess.innerHTML = "Find branch: " + branches[randomBranch];


function branchClicked(branch) {
	totalGames++;
	if (branch === branches[randomBranch]) {
		//console.log('Correct!');
		correctness.innerHTML = "Correct!";
		score++;
	} else {
		correctness.innerHTML = "Incorrect!";
	}
	scoreCounter.innerHTML = score + ' / ' + totalGames + '<br>' + Math.floor(score / totalGames * 100) + '%';

	oldRandomBranch = randomBranch;
	while (randomBranch === oldRandomBranch) {
		randomBranch = Math.floor(Math.random() * 12);
		//console.log(branches[randomBranch]);
		guess.innerHTML = "Find branch: " + branches[randomBranch];
	}
}

function modeSelected() {
	selectedMode = document.getElementById('modeSelect').value;
	console.log(selectedMode);
}
