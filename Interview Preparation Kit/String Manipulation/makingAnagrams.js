'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagram(a, b) {
    // Write your code here
    // Initialize an array to count frequencies of characters
    const count = new Array(26).fill(0); // Assuming lowercase English alphabetic letters
    
    // Count frequencies of characters in string a
    for (let char of a) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        count[index]++;
    }
    
    // Decrease frequencies of characters in string b
    for (let char of b) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        count[index]--;
    }
    
    // Calculate the total number of deletions required
    let deletions = 0;
    for (let freq of count) {
        deletions += Math.abs(freq);
    }
    
    return deletions;
}

// Example usage:
const a = "cde";
const b = "abc";
console.log(makeAnagram(a, b)); // Output: 4

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
