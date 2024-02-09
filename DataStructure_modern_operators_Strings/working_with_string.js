const originalString = 'Barfi Rockstar';

const reversedString = originalString.split('').reverse().join('');

console.log('Original String:', originalString);
console.log('Reversed String:', reversedString);

console.log('Length of the string:', originalString.length);
console.log('Uppercase:', originalString.toUpperCase());
console.log('Lowercase:', originalString.toLowerCase());

// Checking if the string includes a specific substring
const containsHello = originalString.includes('Hello');
console.log('Does it contain "Hello"?', containsHello); // Output: true

// Extracting a portion of the string
const extractedSubstring = originalString.slice(0, 5);
console.log('Extracted Substring:', extractedSubstring); // Output: Hello
