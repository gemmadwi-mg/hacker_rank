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
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }

    return count;

    /**
     * Explanation:

We define the divisibleSumPairs function that takes three parameters: n (the length of the array), ar (the array of integers), and k (the integer divisor).
We initialize a variable count to keep track of the number of pairs that meet the criteria.
We use nested loops to iterate through all possible pairs of integers in the array.
For each pair, we check if the sum is divisible by k using the modulo operator (%). If it is, we increment the count.
Finally, we return the count which represents the number of pairs where the sum is divisible by k.
This solution efficiently calculates the number of pairs in the array where the sum is divisible by k. However, note that this solution has a time complexity of O(n^2) due to the nested loops, where n is the length of the array.
     */
}

// Example usage:
const n = 6;
const ar = [1, 3, 2, 6, 1, 2];
const k = 3;
console.log(divisibleSumPairs(n, ar, k)); // Output: 5

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = divisibleSumPairs(n, k, ar);

    ws.write(result + '\n');

    ws.end();
}
