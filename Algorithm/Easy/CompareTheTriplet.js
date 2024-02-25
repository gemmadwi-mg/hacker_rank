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
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aliceScore++;
        } else if (a[i] < b[i]) {
            bobScore++;
        }
    }

    return [aliceScore, bobScore];

    /**
     * Explanation:

We define a function compareTriplets that takes in two arrays a and b.
We initialize variables aliceScore and bobScore to keep track of their scores, initially set to 0.
We then iterate through each element of the arrays using a for loop.
Inside the loop, we compare the corresponding elements of a and b. If a[i] is greater than b[i], Alice is awarded a point (aliceScore++). If a[i] is less than b[i], Bob is awarded a point (bobScore++). If they are equal, no points are awarded.
After the loop, we return an array containing Alice's score followed by Bob's score.
     */

}

// Example usage:
const a = [1, 2, 3];
const b = [3, 2, 1];
const result = compareTriplets(a, b);
console.log(result); // Output: [1, 1]

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
