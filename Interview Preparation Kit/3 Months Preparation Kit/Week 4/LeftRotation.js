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
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    const n = arr.length;
    const rotatedArr = new Array(n);

    // Calculate the index after rotation for each element
    for (let i = 0; i < n; i++) {
        const rotatedIndex = (i + (n - d)) % n;
        rotatedArr[rotatedIndex] = arr[i];
    }

    return rotatedArr;

    /**Explanation:

We define a function rotateLeft that takes two parameters: d (the number of left rotations) and arr (the array to rotate).
We create a new array rotatedArr to store the rotated elements.
We iterate over each element in the original array arr.
For each element at index i, we calculate the new index after rotation using the formula (i + (n - d)) % n, where n is the length of the array.
We assign the element at index i in the original array to the calculated rotated index in the rotatedArr.
Finally, we return the rotatedArr, which contains the elements after rotation. */

}

// Example usage:
const d = 2;
const arr = [1, 2, 3, 4, 5];
console.log(rotateLeft(d, arr)); // Output should be [3, 4, 5, 1, 2]

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = rotateLeft(d, arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
