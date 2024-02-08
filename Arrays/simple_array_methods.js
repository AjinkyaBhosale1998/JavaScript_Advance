let arr = ['a' , 'b', 'c', 'd', 'e', 'f', 'g'];

console.log(arr.slice(2)); 
console.log(arr.slice(2, 4));
console.log(arr.slice(-3)); 
console.log(arr.slice(1, -2));

//spread oprator and arr.slice copy array 
//use slice when you want to use chaining using one after another
console.log(arr.slice());
console.log([...arr]);


//splice change oringal array mutate the array
//delets array
console.log(arr.splice(2));
console.log(1, 2);
console.log(arr);


// Reverse
arr = ['a' , 'b', 'c', 'd', 'e', 'f', 'g'];
const arr2= ['h','i','j','k','l'];
console.log(arr2.reverse());
//if we log orinal array it actually mutate the aray
console.log(arr2);

//Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);