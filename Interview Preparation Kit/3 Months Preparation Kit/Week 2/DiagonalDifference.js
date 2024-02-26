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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    const n = arr.length;

    // calculate the sums of the diagonals
    for (let i = 0; i < n; i++) {
        leftDiagonalSum += arr[i][i]
        rightDiagonalSum += arr[i][n - 1 - i];
    }

    // Calculate the absolute difference
    const absoluteDifference = Math.abs(leftDiagonalSum - rightDiagonalSum);

    return absoluteDifference;

    /**Explanation:

We initialize variables leftDiagonalSum and rightDiagonalSum to store the sums of the left-to-right and right-to-left diagonals respectively.
We loop through the rows of the matrix and add the elements corresponding to the left-to-right diagonal (where row index equals column index) to leftDiagonalSum, and the elements corresponding to the right-to-left diagonal (where row index + column index equals the size of the matrix minus one) to rightDiagonalSum.
After calculating the sums of the diagonals, we find the absolute difference between them and return the result. */
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];
console.log(diagonalDifference(matrix)); // Output: 2

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
