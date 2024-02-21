'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
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

    let altitude = 0;  // Current altitude
    let valleys = 0; // Number of valleys walked through
    let inValley = false; // Flag to indicate if currently in a valley


    for (let step of path) { 
        if (step === 'U') { 
            altitude++;
        } else { 
            altitude--;
        }

        // check if entered a valley
        if (altitude < 0 && !inValley) { 
            inValley = true;
        }

        // Check if returned to sea level after exiting a valeey
        if(altitude === 0 && inValley) { 
            valleys++;
            inValley = false
        }

    }

    return valleys;

    /**This function takes in the number of steps steps and a string path representing the sequence of steps ('U' for uphill and 'D' for downhill). It iterates through each step, updating the current altitude accordingly. It also tracks whether the hiker is currently in a valley (inValley flag) and counts the number of valleys traversed. Finally, it returns the number of valleys. */
}

// Example usage:
const steps = 8;
const path = "UDDDUDUU";
console.log(countingValleys(steps, path)); // Output should be 1

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
