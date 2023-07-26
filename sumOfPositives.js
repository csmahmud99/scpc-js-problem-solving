// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


const sumOfPositiveNumbers = (numbers) => {
    let sum = 0;

    numbers.forEach((number) => {
        if (number > 0) {
            sum += number;
        }
    });

    return sum;
};

const newNumbers = [1, -2, 3, -4, 10, 20];
const result = sumOfPositiveNumbers(newNumbers);
console.log(result);