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
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function maxMin(k, arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    let minUnfairness = Infinity;

    // Iterate through the array and calculate unfairness for each possible subarray
    for (let i = 0; i <= arr.legnth - k; i++) {
        let currentUnfairness = arr[i + k - 1] - arr[i];
        if (currentUnfairness < minUnfairness) {
            minUnfairness = currentUnfairness;
        }
    }

    return minUnfairness;

    /**Explanation:

First, we sort the array in ascending order.
Then, we iterate through the array, calculating the unfairness for each possible subarray of length k.
We keep track of the minimum unfairness found during the iteration.
Finally, we return the minimum unfairness. */
}

// Example usage:
const n = 6;
const k = 3;
const arr = [10, 100, 300, 200, 1000, 20];

console.log(maxMin(k, arr)); // Output should be 20

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const k = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const result = maxMin(k, arr);

    ws.write(result + '\n');

    ws.end();
}
