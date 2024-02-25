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
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleCount = 0;
    let orangeCount = 0;

    // Calculate positions where apples land and count those within the range
    for(let i = 0; i < apples.length; i++) { 
        const position = a + apples[i];
        if (position >= s && position <= t) { 
            appleCount++;
        }
    }

    // Calculate positions where oranges land and count those within the range
    for (let i = 0; i < oranges.length; i++) { 
        const position = b + oranges[i];
        if (position >= s && position <= t) { 
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);

    /**
     * Explanation:

The function countApplesAndOranges takes six parameters: s and t define the range of Sam's house, a and b are the positions of the apple and orange trees respectively, and apples and oranges are arrays containing the distances at which each apple and orange falls from its respective tree.
Inside the function, we initialize appleCount and orangeCount variables to keep track of the number of apples and oranges that land on Sam's house.
We iterate through the arrays of apples and oranges, calculating the positions where each fruit lands and incrementing the corresponding count if the position falls within the range [s, t].
Finally, we print out the counts of apples and oranges on separate lines.
     */


}

// Example usage:
const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const s = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const a = parseInt(secondMultipleInput[0], 10);

    const b = parseInt(secondMultipleInput[1], 10);

    const thirdMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(thirdMultipleInput[0], 10);

    const n = parseInt(thirdMultipleInput[1], 10);

    const apples = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
