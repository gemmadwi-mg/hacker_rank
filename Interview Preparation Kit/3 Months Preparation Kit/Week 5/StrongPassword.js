'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special_characters = "!@#$%^&*()-+";

    let missingTypes = 0;

    // Check if password contains at least one of each required character type
    if (!password.match(/[0-9]/)) missingTypes++;
    if (!password.match(/[a-z]/)) missingTypes++;
    if (!password.match(/[A-Z]/)) missingTypes++;
    if (!password.match(/[!@#$%^&*()-+]/)) missingTypes++;

    // Determine how many characters need to be added to satisfy the criteria
    return Math.max(6 - n, missingTypes);

    /**We define sets of characters for each type: numbers, lowercase letters, uppercase letters, and special characters.
We initialize a variable missingTypes to keep track of the number of required character types missing in the password.
We use regular expressions to check if the password contains at least one character from each required type.
We calculate how many characters need to be added to make the password strong based on the length of the password and the number of missing character types.
Finally, we return the maximum value between the required length of 6 and the number of missing character types, as we need to add at least that many characters to ensure the password is strong. */

}

// Example usage:
const n = 11;
const password = "#HackerRank";
console.log(minimumNumber(n, password)); // Output should be 1

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const password = readLine();

    const answer = minimumNumber(n, password);

    ws.write(answer + '\n');

    ws.end();
}
