function guessingGame() {

    const answer = (Math.floor(Math.random() * 100));
    let gameOver = false;
    let count = 0;

    return function (guess) {
        count++;
        if (gameOver) { return "The game is over, you already won!" }
        if (answer === guess) {
            gameOver = true;
            return `You win! You found ${answer} in ${count} guesses.`;
        }

        return (answer < guess) ? `${guess} is too high!` : `${guess} is too low!`;
    }
}

module.exports = { guessingGame };
