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
 * Complete the 'stringConstruction' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function stringConstruction(strings) {
    // Loop through each string in the array
    for (let s of strings) { 
        let cost =  1; // Initialize cost to 1 dollar, as we need to copy at least one character
        let uniqueChars = new Set(); // Initialize a set to store unique characters

        // Loop through each character in the string
        for(let char of s) { 
            // Check if the character is not already present in the set
            if (!uniqueChars.has(char)) { 
                uniqueChars.add(char); // Add the character to the set
                cost++; //Increment cost as we need to append this unique character
            }
        }

        console.log(cost); // Print the minimum cost for copying the string

    }

    /**Explanation:

The function stringConstruction takes an array of strings as input.
For each string s in the input array:
It initializes the cost to 1, as we need to copy at least one character.
It initializes an empty set uniqueChars to store unique characters encountered in the string.
It loops through each character in the string:
If the character is not already present in the uniqueChars set, it adds it to the set and increments the cost.
Finally, it prints the minimum cost for copying the string.
Example usage is provided at the bottom where the function is called with an array of strings. */



}

// Example usage
const strings = ["abcd", "abab", "abcabc"];
stringConstruction(strings);

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = stringConstruction(s);

        ws.write(result + '\n');
    }

    ws.end();
}
