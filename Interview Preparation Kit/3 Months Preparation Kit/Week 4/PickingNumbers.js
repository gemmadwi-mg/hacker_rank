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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    let count = Array(100).fill(0); // Initialize an array to store frequency of each element
    let maxLength = 0;

    // Count the frequency of each element in the input array
    for (let num of a) {
        count[num]++;
    }

    // Check for the longest subarray
    for (let i = 1; i < 100; i++) {
        // Check the length of subarray including i and i-1 elements
        let length = count[i] + count[i - 1];

        if (length > maxLength) {
            maxLength = length;
        }


    }

    return maxLength;

    /**Explanation:

First, we initialize an array count of size 100 with all elements initialized to 0. This array will be used to store the frequency of each number in the input array.
We iterate over the input array a, and for each number, we increment the corresponding index in the count array.
Then, we iterate from 1 to 99 (since the input integers are between 1 and 100 inclusive). For each pair of adjacent numbers (i and i-1), we calculate the length of the subarray that includes those two numbers by adding their frequencies.
We update maxLength if we find a longer subarray.
Finally, we return maxLength, which represents the length of the longest subarray where the absolute difference between any two elements is less than or equal to 1. */

}

// Example usage:
const a = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(a)); // Output should be 3

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
