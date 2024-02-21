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
    // Write your code here

    // Create an object to store the count of each color
    let colorCounts = {};

    // Count the occurrences(kejadian) of each color
    for (let i = 0; i < n; i++) {
        if (colorCounts[ar[i]] === undefined) {
            colorCounts[ar[i]] = 1;
        } else {
            colorCounts[ar[i]]++;
        }
    }

    // count the pairs for each color
    let pairs = 0;

    for (let color in colorCounts) {
        pairs += Math.floor(colorCounts[color] / 2)
    }

    return pairs

    /**This function takes in the number of socks n and an array ar containing the colors of each sock. It first counts the occurrences of each color using an object (colorCounts), then calculates the number of pairs for each color and sums them up to get the total number of pairs. Finally, it returns the total number of pairs. */

}

// Example usage:
const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(n, ar));

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
