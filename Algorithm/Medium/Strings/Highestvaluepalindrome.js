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
 * Complete the 'highestValuePalindrome' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER n
 *  3. INTEGER k
 */

function highestValuePalindrome(s, n, k) {
    s = s.split(""); // Convert string to array for easy manipulation
    let changes = 0;
    const mid = Math.floor(n / 2);
    const changesArray = new Array(mid).fill(false); //Array to track which characters are changed

    // Check if palindrome is possible with given constraints
    for (let i = 0; i < mid; i++) {
        if (s[i] !== s[n - i - 1]) {
            changes++;
            changesArray[i] = true;
        }
    }

    if (changes > k) {
        return "-1"; // Palindrome not possible
    }

    // Make palindrome as large as possible
    let remainingChanges = k - changes;
    for (let i = 0; i < mid; i++) {
        if (s[i] !== s[n - i - 1]) {
            const max = Math.max(s[i], s[n - i - 1]);
            if (max !== '9' && remainingChanges > 0) {
                s[i] = '9';
                s[n - i - 1] = '9';
                remainingChanges--;
            } else {
                if (changesArray[i] || changesArray[n - i - 1]) {
                    s[i] = max;
                    s[n - i - 1] = max;
                }
            }
        } else {
            if (s[i] !== '9' && remainingChanges >= 2) {
                s[i] = '9';
                s[n - i - 1] = '9';
                remainingChanges -= 2;
            }
        }
    }

    // if n is odd and there's still remaining change
    if (n % 2 !== 0 && remainingChanges > 0) {
        s[mid] = '9';
    }

    return s.join(""); // Convert array back to string

    /**Explanation:

First, we check if it's possible to create a palindrome with the given constraints by counting the number of changes needed.
Then, we iterate through the string to make it as large as possible while keeping it a palindrome. We start from the left and right ends, moving towards the center.
We prioritize making the digits as large as possible while considering the remaining changes allowed.
If the string length is odd and there are still remaining changes, we update the middle digit to '9'.
Finally, we join the array back to a string and return the result. */

}

// Example usage:
const s = "3943";
const n = s.length;
const k = 1;
console.log(highestValuePalindrome(s, n, k)); // Output: "3993"

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const s = readLine();

    const result = highestValuePalindrome(s, n, k);

    ws.write(result + '\n');

    ws.end();
}
