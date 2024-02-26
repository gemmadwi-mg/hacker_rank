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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Create a set to store unique letters encountered
    const letters = new Set();

    // convert the string to lowercase to ignore case
    s = s.toLowerCase();

    // Loop through each character in the string
    for (let char of s) {
        // Check if the character is a letter of the alphabet
        if (/[a-z]/.test(char)) {
            // Add the lowercase letter to the set
            letters.add(char);
        }
    }

    // Check if all 26 letters of the alphabet are present
    if (letters.size === 26) {
        return "pangram";
    } else {
        return "not pangram"
    }

    /**Explanation:

We create a set called letters to store the unique letters encountered in the string.
We convert the input string to lowercase to ignore case sensitivity.
We loop through each character of the string, checking if it's a letter of the alphabet using a regular expression (/[a-z]/). If it is, we add it to the set.
After processing all characters, we check if the set contains all 26 letters of the alphabet. If it does, we return "pangram"; otherwise, we return "not pangram". */

}

// Example usage:
const sentence = "The quick brown fox jumps over the lazy dog";
console.log(pangrams(sentence)); // Output: pangram

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
