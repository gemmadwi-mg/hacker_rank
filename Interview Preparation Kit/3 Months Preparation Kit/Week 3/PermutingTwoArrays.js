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
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
    // Sort arrays A and B in ascending order
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    // Initialize pointers for arrays A and B
    let ptrA = 0;
    let ptrB = B.length - 1;

    // Loop through both arrays to check if the relation holds
    for (let i = 0; i < A.length; i++) {
        // Find the minimum and maximum values that satisfy the relation
        let minVal = k - A[i];
        let maxVal = k - A[i];

        // Find the minimum value i array B that can satisfy the relation
        while (ptrB >= 0 && B[ptrB] > maxVal) {
            ptrB--;
        }

        // if no valid value is found in B, return "NO"
        if (ptrB < 0 || B[ptrB] < minVal) {
            return "NO";
        }

        // Move the pointer for array B to the left
        ptrB--;

    }

    // If the loop completes without returning "NO", return "YES"
    return "YES";

    /**Explanation:

We define a function twoArrays that takes three parameters: k, A, and B.
Inside the function, we sort arrays A and B in ascending order.
We initialize two pointers ptrA and ptrB to keep track of the elements we're currently comparing in arrays A and B, respectively.
We iterate through array A and for each element A[i], we find the minimum and maximum values that satisfy the relation A[i] + B[j] >= k.
We search for the minimum value in array B that satisfies the relation and update ptrB accordingly.
If we can't find a valid value in array B, we return "NO". Otherwise, we continue the loop.
If the loop completes without returning "NO", it means we found a permutation that satisfies the relation, so we return "YES".
Example usage demonstrates how to use the function with sample input data. */

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const k = parseInt(firstMultipleInput[1], 10);

        const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

        const B = readLine().replace(/\s+$/g, '').split(' ').map(BTemp => parseInt(BTemp, 10));

        const result = twoArrays(k, A, B);

        ws.write(result + '\n');
    }

    ws.end();
}
