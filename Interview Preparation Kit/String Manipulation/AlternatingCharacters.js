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
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternatingCharacters(s) {
    let deletions = 0;

    // Iterate through the string, starting from the second character
    for(let i = 1; i < s.length; i++) { 
        // If the current character is the same as the previous character, increment deletions
        if(s[i] === s[i - 1]) { 
            deletions++;
        }
    }

    return deletions;

    /**Explanation:

We initialize a variable deletions to keep track of the number of deletions required.
We iterate through the string s, starting from the second character (index 1).
For each character, we compare it with the previous character. If they are the same, we increment the deletions count.
Finally, we return the deletions count, which represents the minimum number of deletions required to ensure no matching adjacent characters in the string. */

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = alternatingCharacters(s);

        ws.write(result + '\n');
    }

    ws.end();
}
