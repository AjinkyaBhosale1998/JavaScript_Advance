const movements = [200, 450, -400, -650, -130, 70, 1300];

for (const movement of movements) {
    if ( movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}

//forEach method
console.log("----using forEach Method----");
movements.forEach(function (movement, i, arr) {
    if ( movement > 0) {
        console.log(`Movement${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement${i + 1}:You withdrew ${Math.abs(movement)}`);
    }
})