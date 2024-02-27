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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Calculate the number of pages to turn from the front
    const frontTurns = Math.floor(p / 2);

    // Calculate the number of pages to turn from the back
    const backTurns = Math.floor(n / 2) - frontTurns;

    // Return the minimum of frontTurns and backTurns
    return Math.min(frontTurns, backTurns);

    /**Explanation:

We define a function pageCount that takes two parameters: n (the number of pages in the book) and p (the page number to turn to).
We calculate the number of pages to turn from the front by dividing the target page number p by 2 (since each page turn flips two pages) and taking the floor value using Math.floor().
We calculate the number of pages to turn from the back by subtracting the number of pages to turn from the front from the total number of pages divided by 2. This gives us the remaining pages from the back.
We return the minimum of frontTurns and backTurns, as we want to choose the direction that requires the least number of page turns.
Example usage demonstrates how to use the function with sample input data. */

}

// Example usage:
const n = 6; // Number of pages in the book
const p = 2; // Page to turn to
console.log(pageCount(n, p)); // Output: 1

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}
