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
 * Complete the 'theLoveLetterMystery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function theLoveLetterMystery(s) {
    // Write your code here
    let operations = 0; // Initialize the count of operations to 0

    // Loop through the string up to the middle
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        // Calculate the difference in ASCII values between corresponding characters
        let diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length - 1 - i));
        // Icrement the count of operations by the absolute difference
        operations += diff;
    }

    return operations;

    /**We loop through the string s up to its middle.
For each character, we calculate the absolute difference in ASCII values between the corresponding characters from the start and the end of the string.
We increment the count of operations by this absolute difference.
Finally, we return the total count of operations required to convert the string into a palindrome. */
}

// Example usage:
console.log(theLoveLetterMystery("cde")); // Output: 2

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = theLoveLetterMystery(s);

        ws.write(result + '\n');
    }

    ws.end();
}
