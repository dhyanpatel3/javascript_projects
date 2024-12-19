function startGame() {
    const targetNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    const maxAttempts = parseInt(prompt("Enter the number of attempts you want to guess the number:"), 10);
    if (isNaN(maxAttempts) || maxAttempts <= 0) {
        alert("Please enter a valid positive number for attempts.");
        document.getElementById("game-status").textContent = "Game canceled due to invalid attempts input.";
        return;
    }

    let attempts = 0;
    let guessedCorrectly = false;

    while (!guessedCorrectly && attempts < maxAttempts) {
        const userGuess = prompt(`Attempt ${attempts + 1}/${maxAttempts}: Guess a number between 1 and 10:`);

        if (userGuess === null) {
            document.getElementById("game-status").textContent = "Game canceled!";
            return;
        }

        const guess = Number(userGuess);
        attempts++;

        if (isNaN(guess) || guess < 1 || guess > 10) {
            alert("Please enter a valid number between 1 and 10.");
        } else if (guess > targetNumber) {
            alert("Too high! Try again.");
        } else if (guess < targetNumber) {
            alert("Too low! Try again.");
        } else {
            guessedCorrectly = true;
            alert(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
            document.getElementById("game-status").textContent = `You won in ${attempts} attempts!`;
        }
    }

    if (!guessedCorrectly) {
        alert(`Sorry, you've used all ${maxAttempts} attempts. The number was ${targetNumber}.`);
        document.getElementById("game-status").textContent = `Game over! The number was ${targetNumber}.`;
    }
}