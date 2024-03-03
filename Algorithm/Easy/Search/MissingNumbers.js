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
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

function missingNumbers(arr, brr) {
    const frequencyMap = {}; // Create a frequency map to store occurences of number in arr
    const missingNumbers = []; // Array to store missing numbers

    // Populate frequency map for arr
    for (let num of arr) {
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1
        }
    }

    // Check occurences of numbers in brr and compare with arr
    for (let num of brr) {
        if (!frequencyMap[num] || frequencyMap[num] === 0) {
            missingNumbers.push(num); //If num is missing or has lesser occurences in arr, add it to missingNumbers
        } else {
            frequencyMap[num]--; // Decrease frequency count in frequencyMap
        }
    }

    return missingNumbers.sort((a, b) => a - b) // Return sorted array of missing numbers

}

// Example usage:
const arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
const brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
console.log(missingNumbers(arr, brr)); // Output: [204, 205, 206]

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine().trim(), 10);

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
