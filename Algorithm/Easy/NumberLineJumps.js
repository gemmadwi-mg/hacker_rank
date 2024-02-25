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
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    // If both kangaroos have the same starting position and velocity, they will meet at the same time
    if (x1 === x2 && v1 === v2) {
        return "YES";
    }

    // If both kangaroos have the same velocity but different starting positions, they will never meet
    if (v1 === v2) {
        return "NO";
    }

    // Calculate the time at which both kangaroos meet
    const time = (x2 - x1) / (v1 - v2);

    // If time is a non-negative integer, they will meet at the same position at that time
    if (Number.isInteger(time) && time >= 0) {
        return "YES";
    } else {
        return "NO";
    }


    /**
     * This function first handles special cases where both kangaroos have the same starting position and velocity or if they have the same velocity but different starting positions. Then, it calculates the time at which both kangaroos meet and checks if this time is a non-negative integer. If it is, then it returns "YES", otherwise "NO".
     */

}

// Example usage:
const x1 = 0, v1 = 3, x2 = 4, v2 = 2;
console.log(kangaroo(x1, v1, x2, v2)); // Output: YES

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(firstMultipleInput[0], 10);

    const v1 = parseInt(firstMultipleInput[1], 10);

    const x2 = parseInt(firstMultipleInput[2], 10);

    const v2 = parseInt(firstMultipleInput[3], 10);

    const result = kangaroo(x1, v1, x2, v2);

    ws.write(result + '\n');

    ws.end();
}
