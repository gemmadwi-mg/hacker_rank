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
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {
    let leftSum = 0;
    let rightSum = arr.reduce((acc, val) => acc + val, 0); // Sum of all elements in the array

    for(let i = 0; i < arr.length; i++) { 
        rightSum -= arr[i]; // Update right sum by substracting current element

        if(leftSum === rightSum) { 
            return "YES";
        }

        leftSum += arr[i]; // Update left sum by adding current element

    }

    return "NO";

    /**Explanation:

We initialize leftSum to 0 and rightSum to the sum of all elements in the array arr.
We iterate through each element in the array arr.
For each iteration, we subtract the current element from rightSum and check if leftSum equals rightSum. If they are equal, we return "YES".
If not, we add the current element to leftSum.
If the loop completes without finding any element that satisfies the condition, we return "NO".

2 / 2




 */

}

// Example usage:
const arr = [1, 2, 3, 4, 6];
console.log(balancedSums(arr)); // Output: YES

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = balancedSums(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
