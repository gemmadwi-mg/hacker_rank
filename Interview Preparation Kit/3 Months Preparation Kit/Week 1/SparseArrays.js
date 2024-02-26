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
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    // Initialize an object to store the frequency of each string
    const frequencyMap = {};

    // Count occurences of each string in the input strings
    for (let str of strings) {
        frequencyMap[str] = (frequencyMap[str] || 0) + 1;
    }

    // Initialize an array to store the results for each query
    const results = [];

    // Count occurences of each query string in the frequency map
    for (let query of queries) {
        results.push(frequencyMap[query] || 0);
    }

    return results;

    /**Explanation:

We define a function matchingStrings that takes two arrays as input: strings (an array of input strings) and queries (an array of query strings).
We initialize an empty object frequencyMap to store the frequency of each string in the strings array.
We loop through each string in the strings array and count its occurrences using the frequencyMap. If a string is not in the map, we initialize its frequency to 1; otherwise, we increment its frequency.
Next, we initialize an empty array results to store the results for each query.
We loop through each query in the queries array and push the frequency of that query string from the frequencyMap into the results array. If the query string is not found in the frequencyMap, we push 0.
Finally, we return the results array containing the frequencies of each query string. */

}

// Example usage:
const strings = ['aba', 'baba', 'aba', 'xzxb'];
const queries = ['aba', 'xzxb', 'ab'];
console.log(matchingStrings(strings, queries)); // Output: [2, 1, 0]

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine().trim(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(strings, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
