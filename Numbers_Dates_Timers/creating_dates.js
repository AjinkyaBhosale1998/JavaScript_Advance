//Create data

const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037,10, 33)); 
console.log("It autocorrects nov has 30 day if we add nov 33 it shows dec 3");

const future = new Date(1998, 01, 28, 15, 23);

console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(Date.now());

console.log("ISO string follows international standerds");