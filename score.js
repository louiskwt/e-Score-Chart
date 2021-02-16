// Set up variables
const team1 = {
    score: 0,
    increaseButton: document.querySelector('#teamOneIncrease'),
    decreaseButton: document.querySelector('#teamOneDecrease'),
    display: document.querySelector('#teamOneDisplay')
}

const team2 = {
    score: 0,
    increaseButton: document.querySelector('#teamTwoIncrease'),
    decreaseButton: document.querySelector('#teamTwoDecrease'),
    display: document.querySelector('#teamTwoDisplay')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScore');

// Default Set up 
let winningScore = 3;
let isGameOver = false;

// increase score function
function increaseScore(team, opponent) {
    // check if winning score is reached
    if(!isGameOver) {
        team.score ++;
        // increase the score
        team.display.textContent = team.score;
        if(team.score === winningScore) {
            isGameOver = true;
            team.display.classList.add('text-success');
            opponent.display.classList.add('text-danger');
            team.increaseButton.disabled = true;
            opponent.increaseButton.disabled = true;
            team.decreaseButton.disabled = true;
            opponent.decreaseButton.disabled = true;
        }
    }
}

// decrease score function
function decreaseScore(team) {
    if(team.score > 0) {
        team.score --;
        team.display.textContent = team.score;
    }
}


team1.increaseButton.addEventListener('click', () => {
    increaseScore(team1, team2);
})

team2.increaseButton.addEventListener('click', () => {
    increaseScore(team2, team1); 
})

team1.decreaseButton.addEventListener('click', () => {
    decreaseScore(team1);
})
team2.decreaseButton.addEventListener('click', () => {
    decreaseScore(team2);
})

function reset() {
    isGameOver = false;
    for(let team of [team1, team2]) {
        team.score = 0;
        team.display.textContent = team.score;
        team.display.classList.remove('text-success', 'text-danger');
        team.increaseButton.disabled = false;
        team.decreaseButton.disabled = false;
    }
}

resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})