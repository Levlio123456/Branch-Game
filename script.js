guess = document.getElementById('guess');
correctness = document.getElementById('correctness');

branches = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
randomBranch = Math.floor(Math.random() * 12);
console.log(branches[randomBranch]);
guess.innerHTML = "Find branch: " + branches[randomBranch];


function branchClicked(branch) {
	if (branch === branches[randomBranch]) {
		console.log('Correct!');
		correctness.innerHTML = "Correct!";
	} else {
		correctness.innerHTML = "Incorrect!";
	}
	randomBranch = Math.floor(Math.random() * 12);
	console.log(branches[randomBranch]);
	guess.innerHTML = "Find branch: " + branches[randomBranch];
}
