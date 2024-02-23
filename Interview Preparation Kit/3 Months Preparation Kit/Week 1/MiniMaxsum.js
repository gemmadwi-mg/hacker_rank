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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    // Parse input into an array of integers
    arr.sort((a, b) => a - b);
    
    // Calculate the minimum sum by summing the first four elements
    const minSum = arr.slice(0, 4).reduce((acc, val) => acc + val, 0);
    
    // Calculate the maximum sum by summing the last four elements
    const maxSum = arr.slice(1).reduce((acc, val) => acc + val, 0);
    
    // Print the minimum and maximum sums
    console.log(minSum, maxSum);

    /**
     * Explanation:

Input and Sorting:

The miniMaxSum function takes an array arr containing five positive integers as input.
The array is sorted in ascending order using the sort() method with a custom comparator function. Sorting is necessary to ensure that the smallest and largest elements are separated and considered in the calculation of minimum and maximum sums.
Calculation of Minimum Sum:

The minimum sum is calculated by summing the first four elements of the sorted array. This is achieved by using the slice(0, 4) method to extract the first four elements, followed by reduce() to sum them up.
Calculation of Maximum Sum:

The maximum sum is calculated by summing the last four elements of the sorted array. To exclude the smallest element (which is at index 0 after sorting), we use slice(1) to extract all elements starting from index 1, followed by reduce() to sum them up.
Printing Results:

The calculated minimum and maximum sums are printed to the console separated by a space using console.log().
Example Usage:

The function can be called with an array of five positive integers, such as [1, 2, 3, 4, 5]. Upon execution, it calculates and prints the minimum and maximum sums of four out of the five integers.
This function efficiently calculates the desired minimum and maximum sums while handling large integers as required.
     
     * Certainly! Here's an explanation of the miniMaxSum function:

Input Parsing:

The function takes a string arrString as input, which represents five positive integers separated by spaces.
It first splits this string into an array of strings using the split(' ') method. Each element of this array corresponds to one of the five integers.
Then, it maps each element of this array to convert it into a number using map(Number). This results in an array of five positive integers.
Sorting:

The array of positive integers is sorted in ascending order using the sort() method. Sorting is necessary to ensure that we obtain the minimum sum by adding the first four elements and the maximum sum by adding the last four elements.
Calculation of Minimum and Maximum Sums:

The minimum sum is calculated by taking the sum of the first four elements of the sorted array. This is achieved using the slice(0, 4) method to extract the first four elements, followed by reduce() to sum them up.
The maximum sum is calculated by taking the sum of the last four elements of the sorted array. This is done by using slice(1) to extract all elements except the first one (which is the smallest), followed by reduce() to sum them up.
Printing Results:

Finally, the minimum and maximum sums are printed to the console separated by a space using console.log().
Example Usage:

The function is ready to be used by passing a string of five space-separated positive integers as an argument, such as "1 2 3 4 5". Upon calling the function with this argument, it calculates and prints the minimum and maximum sums of four out of the five integers.
This function efficiently calculates the desired minimum and maximum sums while ensuring that it handles large integers by using 64-bit integers.
     */

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
