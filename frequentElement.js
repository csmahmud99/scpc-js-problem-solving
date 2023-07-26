// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// N.B: I have used ChatGPT for doing and understanding this code...


const findMostFrequentElement = arr => {
  const frequencyCounter = new Map();

  arr.forEach(element => {
    frequencyCounter.set(element, (frequencyCounter.get(element) || 0) + 1);
  });

  return Array.from(frequencyCounter.entries()).reduce((mostFrequent, [key, frequency]) => {
    if (frequency > mostFrequent.frequency) {
      return { element: key, frequency };
    } else {
      return mostFrequent;
    }
  }, { element: undefined, frequency: 0 }).element;
};

// Test with numbers
const numberArray = [1, 2, 3, 2, 2, 4, 4, 5, 2, 5, 2];
const resultNumbers = findMostFrequentElement(numberArray);
console.log("Most frequent number:", resultNumbers);

// Test with characters
const charArray = ['a', 'b', 'c', 'b', 'a', 'd', 'e', 'b', 'e', 'a'];
const resultChars = findMostFrequentElement(charArray);
console.log("Most frequent character:", resultChars);