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

// Complete the countTriplets function below.
function countTriplets(arr, r) {
    let count = 0;
    const freqMap = {};
    const pairsMap = {};

    for (let num of arr) {
        if (num % r === 0) {
            const prevNum = num / r;
            const prevPairs = pairsMap[prevNum] || 0;
            count += prevPairs;

            const prevFreq = freqMap[prevNum] || 0;
            pairsMap[num] = (pairsMap[num] || 0) + prevFreq;
        }

        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    return count;

    /**
     * Explanation:

The countTriplets function takes an array arr and a common ratio r as input and returns the number of triplets of indices such that the elements at those indices are in geometric progression.
Inside the function, count variable is initialized to 0 to keep track of the count of triplets.
freqMap is used to keep track of the frequency of each number in the array.
pairsMap is used to keep track of the number of pairs that can form a triplet.
The function iterates through each number in the array.
For each number num, it checks if num/r is present in pairsMap. If it is, it means there are some pairs of elements that can form a triplet with the current number. The count is incremented by the value in pairsMap[num/r].
It updates pairsMap[num] by adding the frequency of num/r from freqMap.
Finally, it updates the frequency of the current number num in freqMap.
The function returns the final count of triplets.
     */

}

// Example usage:
const arr = [1, 3, 9, 9, 27, 81];
const r = 3;
console.log(countTriplets(arr, r)); // Output: 6

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nr = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);

    ws.write(ans + '\n');

    ws.end();
}
