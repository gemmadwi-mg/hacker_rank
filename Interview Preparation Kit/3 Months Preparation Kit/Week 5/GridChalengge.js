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
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    // Iterate through each row
    for (let i = 0; i < grid.length; i++) {
        // Sort characters in current row alphabetically
        grid[i] = grid[i].split('').sort().join('');
    }

    // Check if columns are in ascending alphabetical order
    for (let j = 0; j < grid[0].length; j++) {
        for (let i = 1; i < grid.length; i++) {
            // Compare characters in current column
            if (grid[i][j] < grid[i - 1][j]) {
                return "NO";
            }
        }
    }

    // All columns are in ascending alphabetical order
    return "YES";

    /**Explanation:

First, we iterate through each row of the grid and sort the characters in each row alphabetically.
Then, we iterate through each column and compare the characters in the current column with the characters in the previous column. If any character in the current column is less than the corresponding character in the previous column, it means the columns are not in ascending alphabetical order, so we return "NO".
If the loop completes without finding any discrepancies, it means all columns are in ascending alphabetical order, so we return "YES".



 */

}

// Example usage:
const grid = [
    "abc",
    "ade",
    "efg"
];

console.log(gridChallenge(grid)); // Output: YES

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        let grid = [];

        for (let i = 0; i < n; i++) {
            const gridItem = readLine();
            grid.push(gridItem);
        }

        const result = gridChallenge(grid);

        ws.write(result + '\n');
    }

    ws.end();
}
