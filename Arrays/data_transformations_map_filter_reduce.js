//Map ex
const num = [1,2,3,4,5,6,7];
const multiplynum = num.map( n => n * 2 );

console.log(num);
console.log(multiplynum);

const fruits = ['apple', 'banana', 'orange', 'kiwi'];
const uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits);

//filter
const numb = [11,20,33,40,55,60,77];
const evennum = numb.filter(n => n % 2 === 0);
console.log(evennum);

const car = ['BMW','Austin-Martin', 'Audi', 'Honda-brv', 'Wolksvagan-Virtus'];
const longcar = car.filter(car => car.length > 6);
console.log(longcar);

//reduce
const numbers = [1,2,3,4,5,6,7];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

const words = ['Hello', ' ', 'World', '!'];
const concatenatedString = words.reduce((accumulator, currentValue) => accumulator + currentValue, '');
console.log(concatenatedString);