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
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function countSwaps(a) {
    // Write your code here
    let numSwaps = 0;
    const n = a.length;

    for (let i = 0; i < n; i++) { 
        for (let j = 0; j < n - 1; j++) { 
            if (a[j] > a[j+1]) { 
                // Swap elements
                const temp = a[j];
                a[j] = a[j+1];
                a[j + 1] = temp;
                numSwaps++;
            }
        }
    }

    console.log(`Array is sorted in ${numSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n-1]}`);

    /**
     * Explanation:

The countSwaps function takes an array a as input and sorts it using the Bubble Sort algorithm.
It initializes a variable numSwaps to keep track of the number of swaps that occur during execution.
It iterates through the array using nested loops. In each iteration, it compares adjacent elements and swaps them if they are in the wrong order.
After sorting, it prints the required three lines indicating the number of swaps and the first and last elements of the sorted array.




     */

}

// Example usage:
const a = [6, 4, 1];
countSwaps(a);

function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
