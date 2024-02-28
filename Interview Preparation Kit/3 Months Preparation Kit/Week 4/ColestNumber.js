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
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    let minDiff = Infinity;
    let result = [];

    // Find the minimum absolute difference between adjacent elements
    for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - arr[i - 1]);
        if (diff < minDiff) {
            minDiff = diff;
            result = [arr[i - 1], arr[i]];
        } else if (diff === minDiff) {
            result.push(arr[i - 1], arr[i]);
        }

    }

    return result;

    /**Explanation:

We define a function closestNumbers that takes an array of integers arr.
We sort the array in ascending order using the sort() method with a custom comparator function (a, b) => a - b.
We initialize minDiff variable to Infinity to store the minimum absolute difference found so far.
We initialize an empty array result to store the pairs of elements with the minimum absolute difference.
We iterate over the sorted array and calculate the absolute difference between each pair of adjacent elements.
If the difference is smaller than minDiff, we update minDiff and reset result with the current pair of elements.
If the difference equals minDiff, we add the current pair of elements to result.
Finally, we return result containing all pairs with the minimum absolute difference.



 */

}

// Example usage:
const arr = [4, 2, 1, 3, 5];
console.log(closestNumbers(arr)); // Output should be [1, 2, 2, 3, 3, 4, 4, 5]


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = closestNumbers(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
