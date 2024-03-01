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
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function camelcase(s) {
    let count = 1; // Initialize count to 1 because the first word is always in lowercase

    // Iterate through each character in the string starting from the second character 
    for(let i = 1; 1 < s.length; i++) { 
        // if the character is uppercase, it indicates the start of a new word
        if(s[i] === s[i].toUpperCase()) { 
            count++; // Increment the count
        }
    }

    return count;

    /**Explanation:

We initialize the count variable to 1 because the first word is always in lowercase.
We iterate through each character in the string starting from the second character (i = 1).
If we encounter an uppercase character, it indicates the start of a new word, so we increment the count.
Finally, we return the count, which represents the number of words in the CamelCase string. */

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = camelcase(s);

    ws.write(result + '\n');

    ws.end();
}
