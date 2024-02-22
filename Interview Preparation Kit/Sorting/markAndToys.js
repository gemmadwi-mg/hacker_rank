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
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

function maximumToys(prices, k) {
    // Write your code here
    // Sort the toy prices in ascending order
    prices.sort((a, b) => a - b);

    let toysCount = 0;
    let totalCost = 0;

    // Iterate through the sorted prices
    for (let price of prices) {
        // If the total cost exceeds the budget, break the loop
        if (totalCost + price > k) {
            break;
        }

        // Otherwise, increment the count of toys and update the total cost
        toysCount++;
        totalCost += price;
    }

    return toysCount;

    /**
     * Explanation:

The maximumToys function takes an array of toy prices prices and Mark's budget k as input and returns the maximum number of toys Mark can buy.
It first sorts the toy prices in ascending order.
Then, it iterates through the sorted prices. For each price, it checks if adding the price to the total cost exceeds the budget k. If it does, the loop breaks because Mark cannot afford to buy any more toys. Otherwise, it increments the count of toys and updates the total cost.
Finally, it returns the count of toys Mark can buy within the budget.
     */

}

// Example usage:
const prices = [1, 12, 5, 111, 200, 1000, 10];
const k = 50;
console.log(maximumToys(prices, k)); // Output: 4

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const prices = readLine().replace(/\s+$/g, '').split(' ').map(pricesTemp => parseInt(pricesTemp, 10));

    const result = maximumToys(prices, k);

    ws.write(result + '\n');

    ws.end();
}
