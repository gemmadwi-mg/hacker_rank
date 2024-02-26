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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Extract hours, minutes, seconds, and AM/PM indicator from the input string
    let hours = parseInt(s.substring(0, 2));
    const minutes = parseInt(s.substring(3, 5));
    const seconds = parseInt(s.substring(6, 8));
    const period = s.substring(8, 10);

    // Convert hours to 24-hour format
    if (period === 'AM' && hours === 12) {
        hours = 0; // Midnight
    } else if (period === "PM" && hours !== 12) {
        hours += 12; // Afternoon
    }

    // Format hours, minutes, and seconds to have leading zeros if needed
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    // Return the time in 24-hour format as a string
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    /**Explanation:

We define a function timeConversion that takes a time string in 12-hour format as input.
We extract the hours, minutes, seconds, and AM/PM indicator from the input string using substring.
We convert the hours to 24-hour format by adjusting them based on the period (AM or PM).
We format the hours, minutes, and seconds to have leading zeros if needed using padStart.
Finally, we return the time in 24-hour format as a string. */

}

// Example usage:
console.log(timeConversion('07:05:45PM')); // Output: '19:05:45'

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
