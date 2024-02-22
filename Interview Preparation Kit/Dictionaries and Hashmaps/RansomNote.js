'use strict';

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
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine, note) {
    // Write your code here
    const magazineWords = new Map();

    //count the occurrences of each word in the magazine
    for (const word of magazine) {
        if (magazineWords.has(word)) {
            magazineWords.set(word, magazineWords.get(word) + 1);
        } else {
            magazineWords.set(word, 1);
        }
    }

    //check if the words in the note can be formed using the magazine
    for (const word of note) {
        if (magazineWords.has(word) && magazineWords.get(word) > 0) {
            magazineWords.set(word, magazineWords.get(word) - 1);
        } else {
            console.log("No");
            return;
        }
    }

    console.log("Yes");

    //This implementation uses a Map to store the occurrences of each word in the magazine. It iterates over each word in the magazine and increments the count in the map. Then, it iterates over each word in the note and checks if the word exists in the magazine and has a count greater than zero. If all words in the note can be formed using the magazine, it prints "Yes"; otherwise, it prints "No".

}

// Example usage:
const magazine = ["give", "me", "one", "grand", "today", "night"];
const note = ["give", "one", "grand", "today"];
checkMagazine(magazine, note); // Output: Yes

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(firstMultipleInput[0], 10);

    const n = parseInt(firstMultipleInput[1], 10);

    const magazine = readLine().replace(/\s+$/g, '').split(' ');

    const note = readLine().replace(/\s+$/g, '').split(' ');

    checkMagazine(magazine, note);
}
