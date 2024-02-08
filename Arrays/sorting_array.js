const owners = ["Aj", "DD", "SS", "AB", "zz", "xx"];
console.log(owners);
console.log(owners.sort());


const number = [4, 2, 8, 1, 6, 3];

// sorting in asc
const Asc = number.sort((a, b) => a - b);
console.log(Asc); 

// sorting in desc
const Desc = number.sort((a, b) => b - a);
console.log(Desc); 

//sorting by object property
const people = [
    { name:'Rachel', age: 50},
    { name:'Ajinkya', age: 27 },
    { name:'Joey', age: 56},
    { name:'Kiara', age: 30 },
    { name:'Ranbir', age: 40},
];

const sortAge = people.sort((a,b) => a.age - b.age);
console.log(S=sortAge);