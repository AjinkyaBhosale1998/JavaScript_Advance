// Original array
const color = ['red', 'green', 'blue', 'yellow', 'orange'];

const [firstColors, secondColors, ...remainingColors] = color;

console.log('First Colors:', firstColors);   
console.log('Second Colors:', secondColors); 
console.log('Remaining Colors:', remainingColors);    
