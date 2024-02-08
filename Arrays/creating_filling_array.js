const arr1= [111,222,333,444,555,666,777];
console.log(new Array(1,2,3,4,5,66));

//Empty arrays + fill method
const x = new Array(7);
console.log(x);

x.fill(20,203,389);
console.log(x);

arr1.fill(23,67,90);
console.log(arr1);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);