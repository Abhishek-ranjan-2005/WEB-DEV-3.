// dice.js

const crypto = require("crypto");

function rollDice() {
    const randomNumber = crypto.randomInt(1, 7);
    return randomNumber;
}

console.log("Dice Rolling Started...");

for (let i = 1; i <= 5; i++) {
    const result = rollDice();
    console.log(`Roll ${i}: Dice Rolled: ${result}`);
}

console.log("Dice Rolling Finished.");