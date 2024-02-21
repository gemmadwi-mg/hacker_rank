'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let swaps = 0;

    for(let i = 0; i < arr.length; i++) { 
        // check if the current element is not in its correct position
        while(arr[i] !== i+1) { 
            //Swap the current element with the element at its correct position
            let temp = arr[arr[i] - 1];
            arr[arr[i] - 1] = arr[i];
            arr[i] = temp;
            swaps++;
        }
    }

    return swaps;

    //This code defines a function minimumSwaps that takes an unordered array arr of integers and returns the minimum number of swaps required to sort the array in ascending order. It iterates through the array, and for each element, it checks if it's not in its correct position. If not, it swaps the element with the element at its correct position until it reaches its correct position. Finally, it returns the total number of swaps performed.

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
