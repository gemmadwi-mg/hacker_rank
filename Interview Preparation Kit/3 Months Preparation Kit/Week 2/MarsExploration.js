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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    let changedCount = 0;

    // Loop through the string in chunks of 3 characters
    for (let i = 0; i < s.length; i += 3) {
        // Check if the chunk is not equal to "SOS"
        if (s[i] !== 'S') {
            changedCount++;
        }
        if (s[i + 1] !== 'O') {
            changedCount++;
        }
        if (s[i + 2] !== 'S') {
            changedCount++;
        }
    }

    return changedCount;

    /**Explanation:

We initialize a variable changedCount to keep track of the number of letters changed during transmission.
We loop through the string s in chunks of 3 characters, as each SOS message consists of three characters.
For each chunk, we check if the characters are equal to "S", "O", and "S" respectively. If any character in the chunk is different, we increment changedCount.
Finally, we return the total count of changed letters. */

}

// Example usage:
const signalReceived = "SOSSOS";
console.log(marsExploration(signalReceived)); // Output: 2

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}
