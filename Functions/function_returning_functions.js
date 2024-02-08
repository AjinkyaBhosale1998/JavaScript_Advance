const greet = function(greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Aiinkya');
greeterHey('Ranbir');

greet('Hello')('AJ');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Kiara');