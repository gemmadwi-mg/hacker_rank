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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Create an object to store the count of each bird type
    const birdCount = {};

    // Iterate through the bird sightings and count the occurrences of each type
    arr.forEach(bird => {
        if (birdCount[bird]) {
            birdCount[bird]++;
        } else {
            birdCount[bird] = 1;
        }
    });

    let maxCount = 0;
    let mostFrequentBird = Infinity;

    // Iterate through the bird count object to find the most frequently sighted bird
    for (const bird in birdCount) {
        if (birdCount[bird] > maxCount) {
            maxCount = birdCount[bird];
            mostFrequentBird = bird;
        } else if (birdCount[bird] === maxCount && bird < mostFrequentBird) {
            mostFrequentBird = bird;
        }
    }

    return mostFrequentBird;

    /**Explanation:

We define a function migratoryBirds that takes an array arr representing the types of bird sightings.
We initialize an object birdCount to store the count of each bird type.
We iterate through the arr array and count the occurrences of each bird type, updating the birdCount object accordingly.
We initialize variables maxCount to keep track of the maximum count of sightings and mostFrequentBird to store the id of the most frequently sighted bird. We set mostFrequentBird to Infinity initially.
We iterate through the birdCount object to find the most frequently sighted bird. If we encounter a bird type with a count greater than maxCount, we update maxCount and mostFrequentBird. If we encounter a bird type with the same count as maxCount, we update mostFrequentBird to the smaller id.
Finally, we return mostFrequentBird, which represents the lowest type id of the most frequently sighted bird.
Example usage demonstrates how to use the function with sample input data.


 */

}

// Example usage:
const n = 6; // Size of the array
const arr = [1, 4, 4, 4, 5, 3]; // Bird sightings
console.log(migratoryBirds(arr)); // Output: 4

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
