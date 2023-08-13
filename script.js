const option1Button = document.getElementById('option1').querySelector('button');
const option2Button = document.getElementById('option2').querySelector('button');
const option1Votes = document.getElementById('option1').querySelector('p');
const option2Votes = document.getElementById('option2').querySelector('p');

let votes = [0, 0]; // Initialize votes for both options
let hasVoted = false; // Track whether the user has voted

function updateVoteCounts() {
  option1Votes.textContent = `${votes[0]} Votes`;
  option2Votes.textContent = `${votes[1]} Votes`;
}

function vote(optionIndex) {
  if (!hasVoted) {
    votes[optionIndex - 1]++;
    updateVoteCounts();
    hasVoted = true;
    disableVotingButtons();
  }
}

function disableVotingButtons() {
  option1Button.disabled = true;
  option2Button.disabled = true;
}

updateVoteCounts();
