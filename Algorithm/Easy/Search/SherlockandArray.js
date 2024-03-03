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
    let totalsum = arr.reduce((acc, num) => acc + num, 0); // Calculate total sum of array
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (leftSum === totalsum - arr[i] - leftSum) { // Check if left sum equals right sum
            return "YES";
        }
        leftSum += arr[i];
    }

    return "No" // If no such element found

    /**Explanation:

We calculate the total sum of all elements in the array.
We then iterate through the array, maintaining the sum of elements to the left of the current element (leftSum).
At each step, we check if the sum of elements to the left (leftSum) equals the sum of elements to the right (totalSum - arr[i] - leftSum).
If such an element is found, we return "YES". Otherwise, we return "NO" after checking all elements. */

}

// Example usage:
console.log(balancedSums([1, 2, 3])); // Output: "NO"
console.log(balancedSums([1, 2, 3, 3])); // Output: "YES"

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
