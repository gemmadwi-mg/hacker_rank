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
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s) {
    // Write your code here
    // Function to generate all possible substrings of a string
    const generateSubstrings = (s) => {
        const substrings = [];
        for (let i = 0; i < s.length; i++) {
            for (let j = i + 1; j <= s.length; j++) {
                substrings.push(s.slice(i, j));
            }
        }

        return substrings;
    }

    //Function to sort a string alphabetically
    const sortString = (str) => {
        return str.split('').sort().join('');
    }

    let anagramCount = 0;
    const substrings = generateSubstrings(s);

    // Count occurences of each sorted sustring
    const substringsCount = new Map();
    substrings.forEach(substring => {
        const sortedSubstring = sortString(substring);

        if (substringsCount.has(sortedSubstring)) {
            substringsCount.set(sortedSubstring, substringsCount.get(sortedSubstring) + 1);
        } else {
            substringsCount.set(sortedSubstring, 1);
        }
    });

    // Calculate the number of pairs of anagrams
    for (let count of substringsCount.values()) {
        anagramCount += count * (count - 1) / 2;
    }

    return anagramCount;

    /**
     * Explanation:

The function sherlockAndAnagrams takes a string s as input and returns the number of unordered anagrammatic pairs of substrings.
Inside this function, generateSubstrings function is defined to generate all possible substrings of a given string s.
Another helper function sortString is defined to sort a string alphabetically.
Occurrences of each sorted substring are counted using a Map.
Finally, the number of pairs of anagrams is calculated by iterating over the counts of each sorted substring and applying the combination formula to calculate pairs.
In the example usage, it takes an array strings containing strings to analyze, and for each string, it prints the number of unordered anagrammatic pairs of substrings.




     */

}

// Example usage:
const queries = 2; // Number of queries
const strings = ["abba", "abcd"];
for (let i = 0; i < queries; i++) {
    const s = strings[i]; // Input string to analyze
    console.log(sherlockAndAnagrams(s));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = sherlockAndAnagrams(s);

        ws.write(result + '\n');
    }

    ws.end();
}
