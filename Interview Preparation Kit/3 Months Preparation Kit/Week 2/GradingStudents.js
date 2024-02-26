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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Array to store rounded grades
    let roundedGrades = [];

    // Loop through each grade
    for (let grade of grades) {
        // If the grade is less than 38 or the diffrence between the grade and the next multiple of 5 is less than 3, round up
        if (grade < 38 || grade % 5 < 3) {
            roundedGrades.push(grade);
        } else {
            // Otherwise, round up to the next multiple of 5
            roundedGrades.push(grade + (5 - (grade % 5)));
        }
    }

    return roundedGrades;

    /**Explanation:

We define a function gradingStudents that takes an array of grades as input.
We create an empty array called roundedGrades to store the rounded grades.
We loop through each grade in the input array.
For each grade, if it's less than 38 or the difference between the grade and the next multiple of 5 is less than 3, we push the grade into roundedGrades as is.
Otherwise, we round up the grade to the next multiple of 5 and push it into roundedGrades.
Finally, we return the array of rounded grades. */
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}