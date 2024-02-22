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
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
    // Write your code here
    const set1 = new Set(s1);

    for (let char of s2) {
        if (set1.has(char)) {
            return "YES";
        }
    }

    return "NO";

    /**
     * Explanation of the code:

The function twoStrings takes two strings s1 and s2 as input parameters.

It creates a set set1 containing unique characters from the first string s1.

It then iterates through each character in the second string s2.

If any character from s2 is found in set1, it means there is a common substring, so it returns "YES".

If no common characters are found after iterating through s2, it returns "NO".

In the example usage, testCases specifies the number of test cases, and strings contains pairs of strings for each test case. It iterates through each test case, calls the twoStrings function with the respective pair of strings, and logs the result to the console.
     */

}

// Example usage:
const testCases = 2; // Number of test cases
const strings = [
    ["hello", "world"],
    ["hi", "bye"]
];

for (let i = 0; i < testCases; i++) {
    const s1 = strings[i][0];
    const s2 = strings[i][1];
    console.log(twoStrings(s1, s2));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        const result = twoStrings(s1, s2);

        ws.write(result + '\n');
    }

    ws.end();
}
