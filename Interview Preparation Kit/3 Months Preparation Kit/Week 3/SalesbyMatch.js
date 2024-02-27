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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    let pairs = 0;
    const colorCount = {};

    // Count the number of socks of each color
    for (let i = 0; i < n; i++) {
        if (colorCount[ar[i]]) {
            colorCount[ar[i]]++;
        } else {
            colorCount[ar[i]] = 1;
        }
    }

    // Count the number of pairs for each color
    for (const color in colorCount) {
        pairs += Math.floor(colorCount[color] / 2);
    }

    return pairs;

    /**Explanation:

We define a function sockMerchant that takes two parameters: n (the number of socks) and ar (an array representing the colors of each sock).
We initialize a variable pairs to keep track of the total number of pairs.
We create an object colorCount to count the number of socks of each color.
We iterate through the ar array and count the number of socks of each color, updating the colorCount object accordingly.
After counting the socks of each color, we iterate through the colorCount object and calculate the number of pairs for each color by dividing the count by 2 and flooring the result (since we're only interested in complete pairs).
We add up the number of pairs for each color to get the total number of pairs.
Finally, we return the total number of pairs.
Example usage demonstrates how to use the function with sample input data. */

}

// Example usage:
const n = 9; // Number of socks in the pile
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]; // Colors of the socks
console.log(sockMerchant(n, ar)); // Output: 3

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
