const rollBtn = document.getElementById("roll-btn");
const resetBtn = document.getElementById("reset-btn");
const winnerText = document.getElementById("winner");

const player1Score = document.getElementById("score1");
const player2Score = document.getElementById("score2");

const dice = document.getElementById("dice");
const rollResult = document.getElementById("roll-result");

let scores = [0, 0];
let activePlayer = 0;

// Roll Dice
rollBtn.addEventListener("click", () => {
    const roll = Math.floor(Math.random() * 6) + 1;

    // Display Dice and Result
    dice.textContent = roll;
    rollResult.textContent = `Player ${activePlayer + 1} rolled a ${roll}!`;

    // Update Score
    scores[activePlayer] += roll;

    if (activePlayer === 0) {
        player1Score.textContent = scores[0];
    } else {
        player2Score.textContent = scores[1];
    }

    // Check Winner
    if (scores[activePlayer] >= 20) {
        winnerText.textContent = `🎉 Player ${activePlayer + 1} wins!`;
        rollBtn.disabled = true;
        rollBtn.style.opacity = 0.6;
    }

    // Switch Player
    activePlayer = activePlayer === 0 ? 1 : 0;
});

// Reset Game
resetBtn.addEventListener("click", () => {
    scores = [0, 0];
    activePlayer = 0;
    player1Score.textContent = "0";
    player2Score.textContent = "0";
    dice.textContent = "🎲";
    rollResult.textContent = "Roll to start!";
    winnerText.textContent = "";
    rollBtn.disabled = false;
    rollBtn.style.opacity = 1;
});