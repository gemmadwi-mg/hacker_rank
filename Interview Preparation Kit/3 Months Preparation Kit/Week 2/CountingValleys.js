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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let altitude = 0; // Initialize altitude
    let valleys = 0; // Initialize valleys count
    let isInValley = false; // Flag to track if currently in a valley

    // Loop through each step in the path
    for (let i = 0; i < steps; i++) {
        // Update altitude based on step direction
        if (path[i] === 'U') {
            altitude++;
        } else {
            altitude--;
        }

        // Check if currently in a valley
        if (altitude < 0 && !isInValley) {
            isInValley = true;
        }

        // check if just exited a valley
        if (altitude === 0 && isInValley) {
            valleys++;
            isInValley = false;
        }
    }

    return valleys;

    /**Explanation:

We define a function countingValleys that takes the number of steps (steps) and the path (path) as input.
We initialize variables altitude to keep track of the current altitude, valleys to count the number of valleys traversed, and isInValley as a flag to track if the hiker is currently in a valley.
We loop through each step in the path.
For each step, we update the altitude based on whether it's an uphill or downhill step.
We check if the hiker is currently in a valley (altitude < 0) and update the isInValley flag accordingly.
We check if the hiker just exited a valley (altitude === 0 after being in a valley) and increment the valleys count accordingly.
Finally, we return the total number of valleys traversed. */
}

// Example usage:
const steps = 8;
const path = "UDDDUDUU";
console.log(countingValleys(steps, path)); // Output: 1

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
