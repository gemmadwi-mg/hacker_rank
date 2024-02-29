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
    // Create a map to store the frequency of numbers in both arrays
    const frequancyMap = new Map();

    // Count the frequency of numbers in the first array
    for (const num of arr) {
        frequancyMap.set(num, (frequancyMap.get(num) || 0) + 1);
    }

    // substract the frequency of numbers in the second array
    for (const num of brr) {
        frequancyMap.set(num, (frequancyMap.get(num) || 0) - 1);
    }

    // Collect the missing numbers
    const missingNumbers = [];
    for (const [num, count] of frequancyMap) {
        if (count < 0) {
            missingNumbers.push(num);
        }
    }

    // Sort and return the missing numbers
    return missingNumbers.sort((a, b) => a - b);

    /**Explanation:

We create a Map called frequencyMap to store the frequency of numbers in both arrays.
We iterate through the first array (arr) and count the frequency of each number, storing it in the frequencyMap.
Then, we iterate through the second array (brr) and subtract the frequency of each number from the frequencyMap.
After that, we collect the numbers that have negative counts in the frequencyMap, which indicates they are missing from the first array.
Finally, we sort and return the missing numbers.



 */


}

// Example usage:
const arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
const brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
console.log(missingNumbers(arr, brr)); // Output: [ 204, 205, 206 ]

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


/**
 * Here's a solution in basic JavaScript without using Map:

javascript
Copy code
function missingNumbers(arr, brr) {
    // Create objects to store the frequency of numbers
    const frequencyArr = {};
    const frequencyBrr = {};
    
    // Count the frequency of numbers in the first array
    for (const num of arr) {
        frequencyArr[num] = (frequencyArr[num] || 0) + 1;
    }
    
    // Count the frequency of numbers in the second array
    for (const num of brr) {
        frequencyBrr[num] = (frequencyBrr[num] || 0) + 1;
    }
    
    // Collect the missing numbers
    const missingNumbers = [];
    for (const num in frequencyBrr) {
        if (!frequencyArr[num] || frequencyBrr[num] > frequencyArr[num]) {
            missingNumbers.push(parseInt(num));
        }
    }
    
    // Sort and return the missing numbers
    return missingNumbers.sort((a, b) => a - b);
}

// Example usage:
const arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
const brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
console.log(missingNumbers(arr, brr)); // Output: [ 204, 205, 206 ]
Explanation:

We create two objects frequencyArr and frequencyBrr to store the frequency of numbers in both arrays.
We count the frequency of numbers in both arrays by iterating through them and updating the corresponding frequencies in the objects.
Then, we iterate through the frequencies of numbers in the second array (frequencyBrr) and check if a number is missing from the first array or if its frequency is greater in the second array. If so, we push it into the missingNumbers array.
Finally, we sort and return the missingNumbers array.
 */