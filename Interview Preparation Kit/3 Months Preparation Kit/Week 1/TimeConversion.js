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
    // Write your code here
    // Extract the hour, minute, second, and AM/PM indicator from the input string
    const [time, indicator] = s.split(':');

    // Convert hour to 24-hour format
    let militaryHour = parseInt(time);
    if (indicator.includes('PM') && militaryHour < 12) {
        militaryHour += 12;
    } else if (indicator.includes('AM') && militaryHour === 12) {
        militaryHour = 0;
    }

    // Format hour with leading zero if necessary
    const hour = militaryHour.toString().padStart(2, '0');

    // Construct the 24-hour time string
    const militaryTime = `${hour}:${time.substring(3, 5)}:${time.substring(6, 8)}`;

    return militaryTime;

    /**
     * Explanation:

Input Parsing:

The timeConversion function takes a single string s as input, representing a time in 12-hour clock format (e.g., "07:05:45PM").
The input string is split into components (hour, minute, second, AM/PM indicator) using a regular expression that matches either a colon or the boundary between 'AM' or 'PM' and a preceding digit.
Hour Conversion:

The hour part of the time is converted to 24-hour format:
If the hour is '12' and the indicator is 'AM', it means midnight, so the hour becomes '00'.
If the hour is not '12' and the indicator is 'PM', 12 hours are added to the hour.
Otherwise, the hour remains the same.
Constructing the 24-hour Time String:

The components (hour, minute, second) are combined into a string in the format 'HH:mm:ss', where 'HH' represents hours in 24-hour format.
Return:

The constructed 24-hour time string is returned.
Example Usage:

The function can be called with a string representing a time in 12-hour clock format. It converts the time to 24-hour format and returns the result.
This function effectively converts a time from 12-hour clock format to 24-hour clock format as required.





     */

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
