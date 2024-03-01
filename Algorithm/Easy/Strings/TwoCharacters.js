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
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    let maxLen = 0;
    const uniqueChars = [...new Set(s)]; // Get unique characters in the string

    // Try all possible pairs of unique characters
    for (let i = 0; i < uniqueChars.length; i++) {
        for (let j = i + 1; j < uniqueChars.length; j++) {
            const pair = [uniqueChars[i], uniqueChars[j]]; // Current pair of characters
            const modifiedString = removeChars(s, pair); // Remove characters not in the pair
            if (isAlternating(modifiedString)) { // Check if resulting string alternates
                maxLen = Math.max(maxLen, modifiedString.length); // Update max length if valid
            }
        }
    }

    return maxLen;

    /**Explanation:

We first find all unique characters in the string s.
Then, we iterate through all pairs of unique characters.
For each pair, we remove characters not in the pair from the string using the removeChars function.
After that, we check if the resulting string alternates using the isAlternating function.
If it alternates, we update the maximum length found so far.
Finally, we return the maximum length of the alternating string. */

}


// Function to remove characters not in the pair from the string
function removeChars(s, pair) {
    return s.split('').filter(char => pair.includes(char)).join('');
}

// Function to check if a string alternates
function isAlternating(s) {
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            return false;
        }
    }
    return true;

}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
