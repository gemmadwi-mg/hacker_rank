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
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    let count = 0;

    // Loop through the chocolate bar segments
    for (let i = 0; i <= s.length - m; i++) {
        let segmentSum = 0;

        // Calculate the sum of the current segment
        for (let j = i; j < i + m; j++) {
            segmentSum += s[j];
        }

        // If the sum matches Ron's birth day, increment count
        if (segmentSum === d) {
            count++;
        }
    }

    return count;

    /**Explanation:

We define a function birthday that takes three parameters: s (array of numbers on each chocolate square), d (Ron's birth day), and m (Ron's birth month).
We initialize a variable count to keep track of the number of ways the chocolate bar can be divided.
We iterate through the chocolate bar segments using a loop, ensuring that we don't go beyond the end of the array.
Within the loop, we calculate the sum of the current segment by iterating over m squares starting from the current position i.
If the sum of the segment matches Ron's birth day (d), we increment the count.
Finally, we return the count, which represents the number of ways the chocolate bar can be divided according to the given conditions.
Example usage demonstrates how to use the function with sample input data. */

}

// Example usage:
const n = 5; // Number of squares in the chocolate bar
const s = [1, 2, 1, 3, 2]; // Numbers on each of the squares
const d = 3; // Ron's birth day
const m = 2; // Ron's birth month

console.log(birthday(s, d, m)); // Output: 2


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const result = birthday(s, d, m);

    ws.write(result + '\n');

    ws.end();
}
