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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here

    // count the occurences of 'a' in the original string
    let countInSingleString = 0;

    for (let char of s) {
        if (char === 'a') {
            countInSingleString++;
        }
    }

    // Calculate the number of times the whole string repeats
    let repetitions = Math.floor(n / s.length);

    // Calculate the remaining characters after the last repetition
    let remainingChars = n % s.length;

    // Count the occurences of 'a' in the remaining part
    let countInRemaining = 0;
    for (let i = 0; i < remainingChars; i++) {
        if (s[i] === 'a') {
            countInRemaining++;
        }
    }

    // Total occurences of 'a' is the occurences in the whole repetitions pus in the remaining part
    let totalCount = repetitions * countInSingleString + countInRemaining

    return totalCount

    /** This function takes in a string s to repeat and the number of characters n to consider. It first counts the occurrences of 'a' in the original string s. Then, it calculates the number of times the whole string repeats in the first n characters and counts the occurrences of 'a' in the remaining characters. Finally, it returns the total count of 'a' in the substring of length n.*/

}

// Example usage:
const s = "aba";
const n = 10;
console.log(repeatedString(s, n)); // Output should be 7

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
