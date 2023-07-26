const sumPositiveNumbers = (numbers) => {
    let sum = 0;

    numbers.forEach((number) => {
        if (number > 0) {
            sum += number;
        }
    });

    return sum;
};

const newNumbers = [1, -2, 3, -4, 10, 20];
const result = sumPositiveNumbers(newNumbers);
console.log(result);