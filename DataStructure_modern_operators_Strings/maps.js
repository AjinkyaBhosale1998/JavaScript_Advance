
const carPrices = new Map();

carPrices.set('Toyota', 25000);
carPrices.set('Honda', 22000);
carPrices.set('Ford', 27000);


console.log(carPrices);

console.log('Toyota price:', carPrices.get('Toyota'));

console.log('Does BMW exist?', carPrices.has('BMW')); 

console.log('All car prices:');
carPrices.forEach((price, brand) => {
  console.log(`${brand}: $${price}`);
});


carPrices.delete('Toyota');

console.log('Map after deleting Toyota:', carPrices);
