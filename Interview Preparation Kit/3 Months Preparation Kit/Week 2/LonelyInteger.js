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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    for (let i = 0; i < a.length; i++) {
        let isUnique = true;
        for (let j = 0; j < a.length; j++) {
            if (i !== j && a[i] === a[j]) {
                // if a duplicate is found, mark as not unique
                isUnique = false;
                break;
            }
        }
        // if the element is unique, return it
        if (isUnique) {
            return a[i];
        }
    }
    // if no unique element is found, return null or handle null or handle the error
    return null; //or throw new Error("No unique element found");

    /**Explanation:

We use nested loops to compare each element in the array with all other elements.
For each element a[i], we iterate through the array again and check if there's any other element a[j] that is equal to a[i].
If a duplicate is found (a[i] === a[j]), we mark the element as not unique and break out of the inner loop.
If after comparing with all other elements, the element is still marked as unique, we return it as the result.
If no unique element is found after the entire loop, you can return null or handle the error as appropriate. */


}

// Example usage:
const array = [1, 2, 3, 2, 1];
console.log(lonelyinteger(array)); // Output: 3

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
