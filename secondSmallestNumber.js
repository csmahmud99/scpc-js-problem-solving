// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

// I have used chatGPT for doing and understanding this program 

const findSecondSmallest = (arr) => {
    if (!Array.isArray(arr) || arr.length < 2) {
        throw new Error("Input should be an array with at least two elements.");
    }

    const sortedArr = [...new Set(arr)].sort((a, b) => a - b);

    if (sortedArr.length < 2) {
        throw new Error("Array should have at least two unique elements.");
    }

    return sortedArr[1];
};

// Test case 1: Basic scenario with unique elements
const arr1 = [5, 2, 8, 1, 9, 4];
console.log(findSecondSmallest(arr1)); // Output should be 2

// Test case 2: Array with duplicate elements
const arr2 = [7, 3, 5, 3, 2, 6, 7];
console.log(findSecondSmallest(arr2)); // Output should be 3

// Test case 3: Array with negative numbers
const arr3 = [-10, -5, -3, -15, -7];
console.log(findSecondSmallest(arr3)); // Output should be -10

// Test case 4: Array with only two unique elements
const arr4 = [5, 5];
console.log(findSecondSmallest(arr4)); // Should throw an error

// Test case 5: Array with less than two elements
const arr5 = [2];
console.log(findSecondSmallest(arr5)); // Should throw an error