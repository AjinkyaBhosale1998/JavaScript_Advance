const ordersSet = new Set ([
    'Pasta',
    'Pizza',
    'Pizza',
    'Pesto Pasta',
    'fries',
    'Pizza'
]);

console.log(ordersSet);

console.log(new Set('Aj'));

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));

console.log(ordersSet.has('Bread'));
ordersSet.add('garlic Bread');
ordersSet.add('Pohe');
ordersSet.delete('Pohe');
console.log(ordersSet);