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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Define the original and rotated alphabets
    const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const rotatedAlphabet = originalAlphabet.slice(k) + originalAlphabet.slice(0, k);

    let encryptedString = '';

    // Iterate over each character in the input string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let index = originalAlphabet.indexOf(char.toLowerCase());

        // If the character is a letter, encrypt it
        if (index != -1) {
            let isUppercase = char === char.toUpperCase();
            let encryptChar = rotatedAlphabet[index];
            encryptChar = isUppercase ? encryptChar.toUpperCase() : encryptChar;
            encryptedString += encryptChar;
        } else {
            // If the character is not a letter, leave it unchanged
            encryptedString += char;
        }
    }

    return encryptedString;

    /**Explanation:

We define a function caesarCipher that takes two parameters: the input string s and the rotation factor k.
We define the original and rotated alphabets. The rotated alphabet is created by slicing the original alphabet to shift it by k positions.
We initialize an empty string encryptedString to store the encrypted string.
We iterate over each character in the input string.
For each character, we check if it is a letter. If it is, we find its index in the original alphabet and replace it with the corresponding letter from the rotated alphabet. We also maintain the case of the letter.
If the character is not a letter, we leave it unchanged.
Finally, we return the encrypted string. */

}

// Example usage:
const s = "middle-Outz";
const k = 2;
console.log(caesarCipher(s, k)); // Output should be "okffng-Qwvb"

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
