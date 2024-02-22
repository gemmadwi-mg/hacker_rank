'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    //Count positive, negative, and zero elements
    for(let i = 0; i < arr.length; i++) { 
        if(arr[i] > 0) { 
            positiveCount++;
        } else if (arr[i] < 0) { 
            negativeCount++;
        } else { 
            zeroCount++;
        }
    }

    //Calculate proportions
    const total = arr.length;
    const positiveRatio = (positiveCount / total).toFixed(6);
    const negativeRatio = (negativeCount / total).toFixed(6);
    const zeroRatio = (zeroCount / total).toFixed(6);

    // Print the ratios
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
