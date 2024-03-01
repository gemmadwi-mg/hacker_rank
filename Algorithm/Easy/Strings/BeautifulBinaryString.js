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
 * Complete the 'beautifulBinaryString' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING b as parameter.
 */

function beautifulBinaryString(b) {
    let count = 0; // Initialize count of moves to 0

    //Iterate through the binary string
    for (let i = 0; i < b.length - 2; i++) {
        // Check for the substring "010"
        if (b[i] === '0' && b[i + 1] === '1' && b[i + 2] === '0') {
            count++; // Increment count of moves
            i += 2; // Skip the next two characters
        }
    }

    return count;

    /**Explanation:

We iterate through the binary string and check for the substring "010".
Whenever we find "010", we increment the count of moves and skip the next two characters to avoid counting them again.
Finally, we return the count of moves required to make the binary string beautiful. */

}

// Example usage:
console.log(beautifulBinaryString("0100101010")); // Output: 3

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const b = readLine();

    const result = beautifulBinaryString(b);

    ws.write(result + '\n');

    ws.end();
}
