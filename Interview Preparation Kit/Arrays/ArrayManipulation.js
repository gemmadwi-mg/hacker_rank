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
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
    // Write your code here
    const arr = new Array(n).fill(0);

    // Perform the operations
    for (let i = 0; i < queries.length; i++) {
        const [a, b, k] = queries[i];
        arr[a - 1] += k; // add k to the element at index a-1
        if (b < n) {
            arr[b] -= k; // substract k from the element at index b
        }
    }

    // compute the prefix sum
    let max = 0
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += arr[i]
        max = Math.max(max, sum);
    }

    return max

    //This code defines a function arrayManipulation that takes the number of elements in the array n and a 2D array of queries queries as input. It initializes an array of length n filled with zeros. Then, it iterates through each query, adding the summand k to the elements between indices a and b, inclusive. After performing all operations, it computes the prefix sum and returns the maximum value in the resultant array.

}

// Example usage
const n = 10;
const queries = [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1]
];
console.log(arrayManipulation(n, queries)); // Output: 10

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = arrayManipulation(n, queries);

    ws.write(result + '\n');

    ws.end();
}
