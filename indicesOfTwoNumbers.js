// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoNumbersSum = (sortedArray, target) => {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {
        const sum = sortedArray[left] + sortedArray[right];

        if (sum === target) {
            return [left, right];
        } 
        else if (sum < target) {
            left++;
        } 
        else {
            right--;
        }
    }

    return [];
};

const sortedArray = [2, 4, 5, 8, 10, 12];
const target = 15;
const indices = findTwoNumbersSum(sortedArray, target);
console.log(indices);