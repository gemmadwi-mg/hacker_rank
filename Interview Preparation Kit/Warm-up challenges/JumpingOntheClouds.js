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
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0;
    let i = 0;

    while (i < c.length - 1) {
        if (i + 2 < c.length && c[i + 2] === 0) {
            // jumping two clouds if possible
            i += 2;
        } else {
            // jumping one cloud
            i++;
        }

        jumps++;
    }

    return jumps;

    /**This function takes in an array c of binary integers representing the clouds (0 for safe clouds, 1 for thunderheads). It iterates through the clouds, making jumps while avoiding thunderheads. It jumps two clouds if possible to minimize the number of jumps, otherwise it jumps one cloud. Finally, it returns the minimum number of jumps required to reach the last cloud. */

}

// Example usage:
const clouds = [0, 0, 1, 0, 0, 1, 0];
console.log(jumpingOnClouds(clouds)); // Output should be 4

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const c = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

    const result = jumpingOnClouds(c);

    ws.write(result + '\n');

    ws.end();
}
