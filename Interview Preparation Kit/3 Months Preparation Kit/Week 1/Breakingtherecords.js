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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    let minScore = scores[0];
    let maxScore = scores[0];
    let minRecordBreaks = 0;
    let maxRecordBreaks = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < minScore) {
            minScore = scores[i];
            minRecordBreaks++;
        } else if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxRecordBreaks++;
        }
    }

    return [maxRecordBreaks, minRecordBreaks]

    /**
     * Explanation:

We initialize variables minScore, maxScore, minRecordBreaks, and maxRecordBreaks to keep track of the minimum score, maximum score, and the number of times Maria breaks her records for the most and least points scored.

We iterate over the scores starting from the second score (index 1). For each score:

If the current score is less than minScore, we update minScore to the current score and increment minRecordBreaks.
If the current score is greater than maxScore, we update maxScore to the current score and increment maxRecordBreaks.
Finally, we return an array [maxRecordBreaks, minRecordBreaks] representing the numbers of times Maria breaks her records for the most and least points scored, respectively.

This solution efficiently determines the number of times Maria breaks her records for most and least points scored during the season. It has a time complexity of O(n), where n is the number of games.
     */
}

// Example usage:
const scores = [12, 24, 10, 24];
console.log(breakingRecords(scores)); // Output: [1, 1]

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
