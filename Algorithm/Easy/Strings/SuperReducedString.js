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
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        // If the current character matches the top of the stack, pop it
        if (stack.length > 0 && s[i] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            // otherwise, push the current character onto the stack
            stack.push(s[i])
        }
    }

    // If the stack is empty, return "Empty String"
    if (stack.length === 0) {
        return "Empty String";
    } else {
        // Otherwis, join the characters in the stack and return the resulting string
        return stack.join('');
    }

    /**Explanation:

We iterate through the string s.
For each character, if it matches the top character of the stack, we pop that character from the stack, effectively removing the adjacent pair.
If it doesn't match, we push the current character onto the stack.
Finally, we check if the stack is empty. If it is, we return "Empty String". Otherwise, we join the characters in the stack and return the resulting string. */

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
