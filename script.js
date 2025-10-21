guess = document.getElementById('guess');
correctness = document.getElementById('correctness');
scoreCounter = document.getElementById('scoreCounter');

score = 0;
totalGames = 0;

branches = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
randomBranch = Math.floor(Math.random() * 12);
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

	randomBranch = Math.floor(Math.random() * 12);
	//console.log(branches[randomBranch]);
	guess.innerHTML = "Find branch: " + branches[randomBranch];
}
