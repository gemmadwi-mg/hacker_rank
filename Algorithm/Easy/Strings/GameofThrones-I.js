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
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function gameOfThrones(s) {
    const charCount = {}; // Object to count occurences of each character

    // Count occurences of each character in the string
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let oddCount = 0; // Initialize count of characters with odd occurences

    // Iterate through the character counts
    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++; // Increment count if the occurence is odd
        }
    }

    // If the string has more than one character with odd occurences, it can't be rearranged into a palindrome
    if (oddCount > 1) {
        return "NO"
    } else {
        return "YES"
    }

    /**Explanation:

We first count the occurrences of each character in the input string using an object (charCount).
Then, we iterate through the object and count how many characters have an odd number of occurrences.
If there is more than one character with an odd count, it's impossible to rearrange the string into a palindrome, so we return "NO". Otherwise, we return "YES". */

}

// Example usage:
console.log(gameOfThrones("civic")); // Output: YES

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = gameOfThrones(s);

    ws.write(result + '\n');

    ws.end();
}
