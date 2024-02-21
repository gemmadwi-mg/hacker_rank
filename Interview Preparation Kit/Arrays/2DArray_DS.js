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
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    let maxSum = -Infinity; // Initialize the maximum sum as negative infinity


    //iterate through each possible hourglass
    for (let i= 0; i<= 3; i++) { 
        for(let j = 0; j<= 3; j++) { 
            // calculate the sum of the hourglass elements
            let currentSum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + 
                                        arr[i+1][j+1] + 
                            arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];

            maxSum = Math.max(maxSum, currentSum);

        }
    }

    return maxSum;
}

// Example usage
const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

console.log(hourglassSum(arr)); // Output: 7

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
