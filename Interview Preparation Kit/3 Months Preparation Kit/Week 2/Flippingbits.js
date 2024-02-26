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
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    // convert n to its binary representation and pad it to 32 bits
    let binary = n.toString(2).padStart(32, '0');

    // Invert each bit
    let invertedBinary = '';
    for (let bit of binary) {
        invertedBinary += bit === '0' ? '1' : '0';
    }

    // convert the inverted binary back to decimal
    return parseInt(invertedBinary, 2);

    /**Explanation:

We define a function flippingBits that takes an integer n as input.
We convert n to its binary representation using toString(2) method and pad it to 32 bits using padStart(32, '0').
We then iterate through each bit of the binary representation and invert it (change 0s to 1s and vice versa).
After inverting all bits, we convert the inverted binary representation back to decimal using parseInt(invertedBinary, 2) and return the result.



 */
}

// Example usage:
console.log(flippingBits(2147483647)); // Output: 2147483648

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
