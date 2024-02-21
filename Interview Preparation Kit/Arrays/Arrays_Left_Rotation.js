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
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

function rotLeft(a, d) {
    // Write your code here
    const n = a.length;
    const rotatedArray = new Array(n);

    // calculate the effective number of rotations
    const rotations = d % n;

    // perform the rotations
    for (let i = 0; i < n; i++) { 
        // Calculate the new index after rotation
        const newIndex = (i + n - rotations) % n;
        rotatedArray[newIndex] = a[i];
    }

    return rotatedArray;

    //This code defines a function rotLeft that takes an array a and the number of rotations d as input and returns the rotated array. It calculates the effective number of rotations (taking into account the circular nature of the array), performs the rotations, and returns the rotated array.
}


// Example usage
const a = [1, 2, 3, 4, 5];
const d = 2;
console.log(rotLeft(a, d).join(' ')); // Output: 3 4 5 1 2

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
