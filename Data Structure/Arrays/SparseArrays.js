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
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 */

function matchingStrings(stringList, queries) {
    const result = []; // Initialize an empty array to store the frequencies

    // Create a map to store the frequencies of each string in stringList
    const frequencyMap = new Map()

    // Iterate through stringList to count the frequencies
    stringList.forEach(str => {
        // If the string is already in the frequencyMap, increment its count, otherwise, set it to 1
        frequencyMap.set(str, (frequencyMap.get(str) || 0) + 1);
    });

    // Iterate through each query and find its frequency in the frequencyMap
    queries.forEach(query => { 
        // If the query exists in the frequencyMap, push its frequency to the result
        result.push(frequencyMap.get(query) || 0);
    })

    return result; // Return the array of frequencies for each qury

    /**Explanation:

We define a function named matchingStrings which takes two arrays as parameters: stringList and queries.
We initialize an empty array result to store the frequencies of each query.
We create a Map called frequencyMap to store the frequencies of strings in stringList.
We iterate through each string in stringList using forEach method. For each string:
If the string already exists in frequencyMap, we increment its count by 1; otherwise, we set its count to 1.
After counting the frequencies, we iterate through each query in queries array using forEach method.
For each query, we check its frequency in frequencyMap:
If the query exists in frequencyMap, we push its frequency to the result array using push method; otherwise, we push 0.
Finally, we return the result array containing the frequencies of each query string. */


}

// Example usage:
const stringList = ['aba', 'baba', 'aba', 'xzxb'];
const queries = ['aba', 'xzxb', 'ab'];
console.log(matchingStrings(stringList, queries)); // Output: [2, 1, 0]



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringListCount = parseInt(readLine().trim(), 10);

    let stringList = [];

    for (let i = 0; i < stringListCount; i++) {
        const stringListItem = readLine();
        stringList.push(stringListItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(stringList, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
