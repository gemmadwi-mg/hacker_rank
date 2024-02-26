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
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Initialize frequency array with 100 elements, all set to 0
    let frequencyArray = Array(100).fill(0);

    // Count occurrences of each value in the input array
    for (let num of arr) {
        frequencyArray[num]++;
    }

    return frequencyArray;

    /**Explanation:

We define a function countingSort that takes an array arr as input.
We initialize a frequencyArray with 100 elements, all set to 0, to represent the frequency of each value.
We loop through each element in the input array (arr) and increment the corresponding index in the frequencyArray.
After counting the occurrences of each value, we return the frequencyArray. */
}

// Example usage:
const arr = [1, 1, 3, 2, 1, 4];
console.log(countingSort(arr)); // Output: [0, 3, 1, 1, 1, 0, ..., 0] (depending on the input values)

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
