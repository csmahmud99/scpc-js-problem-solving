// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return `Invalid operator. Please use one of the following: +, -, *, /`;
    }
};

// Case: Addition
console.log(calculator(5, 3, '+')); // Output: 8

// Case: Subtraction
console.log(calculator(10, 5, '-')); // Output: 5

// Case: Multiplication
console.log(calculator(4, 6, '*')); // Output: 24

// Case: Division
console.log(calculator(20, 4, '/')); // Output: 5

// Case: Invalid operator
console.log(calculator(10, 2, '%')); // Output: Invalid operator. Please use one of the following: +, -, *, /