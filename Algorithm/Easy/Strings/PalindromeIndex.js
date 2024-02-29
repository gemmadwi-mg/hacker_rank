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
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // If removing the character at left index makes the string a palindrome
            if (isPalindrome(s.substring(0, left) + s.substring(left + 1))) {
                return left;
            }
            // If removing the character at right index makes the string a palindrome
            else if (isPalindrome(s.substring(0, right) + s.substring(right + 1))) {
                return right;
            }
            // If neither removal makes the string a palindrome, return -1
            else {
                return -1;
            }
        }

        left++;
        right--;
    }

    // If the string is already a palindrome, return -1
    return -1;

    /**Explanation:

The palindromeIndex function takes a string s as input and returns the index of the character to remove to make the string a palindrome, or -1 if the string is already a palindrome or there is no solution.
It uses a two-pointer approach to iterate over the string from both ends towards the center.
If at any point, characters at the current left and right pointers are not equal, it checks if removing either of them would make the string a palindrome.
If removing the character at the left index or right index makes the string a palindrome, it returns the corresponding index.
If neither removal makes the string a palindrome, it returns -1.
If the loop completes without finding any mismatched characters, it means the string is already a palindrome, so it returns -1.
The isPalindrome function is a helper function to check if a string is a palindrome. It returns true if the string is a palindrome and false otherwise. */



}

function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

// Example usage
console.log(palindromeIndex("abca")); // Output: 2


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = palindromeIndex(s);

        ws.write(result + '\n');
    }

    ws.end();
}
