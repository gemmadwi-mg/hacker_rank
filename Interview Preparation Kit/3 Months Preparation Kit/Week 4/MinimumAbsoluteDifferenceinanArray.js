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
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    let minDiff = Infinity;

    // Find the minimum absolute difference between adjacent elements
    for(let i = 1; i < arr.length; i++) { 
        const diff = Math.abs(arr[i] - arr[i - 1]);

        if(diff < minDiff) { 
            minDiff = diff
        }
    }

    return minDiff;

    /**Explanation:

We define a function minimumAbsoluteDifference that takes an array of integers arr.
We sort the array in ascending order using the sort() method with a custom comparator function (a, b) => a - b.
We initialize minDiff variable to Infinity to store the minimum absolute difference found so far.
We iterate over the sorted array and calculate the absolute difference between each pair of adjacent elements.
If the difference is smaller than minDiff, we update minDiff with the current difference.
Finally, we return minDiff, which represents the minimum absolute difference between any pair of elements in the array. */

}

// Example usage:
const arr = [3, -7, 0];
console.log(minimumAbsoluteDifference(arr)); // Output should be 3

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = minimumAbsoluteDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
