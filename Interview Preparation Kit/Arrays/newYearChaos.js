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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // Write your code here
    let bribes = 0;

    // Loop through the queue from the end to the beginning
    for (let i = q.length - 1; i >= 0; i--) {
        // check if the person has moved more than 2 positions ahead
        if (q[i] - (i + 1) > 2) {
            console.log('Too chaotic')
            return
        }

        // count the number of bribes this person received
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribes++;
            }
        }
    }

    console.log(bribes);

    //This code defines a function minimumBribes that takes an array q representing the final state of the queue after all bribes. It iterates through the queue from the end to the beginning, checking if each person has moved more than 2 positions ahead (which would indicate too many bribes). Then, it counts the number of bribes each person received by comparing their position with the positions of those ahead of them. Finally, it prints the total number of bribes or "Too chaotic" if someone has bribed more than 2 people.


}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
