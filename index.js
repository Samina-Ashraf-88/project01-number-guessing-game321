#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations!you guessed right number.");
}
else {
    console.log("you guessed wrong number.");
}
