// app.js

const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger("Application started.");

const number = 8;

console.log("Number:", number);
console.log("Is Even:", isEven(number));

logger("Application finished.");