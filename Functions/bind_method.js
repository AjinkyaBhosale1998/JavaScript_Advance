const greett = function (message) {
  console.log(`${message}, ${this.name}!`);
};

const person = {
  name: "Ranbir",
};

const greetPerson = greett.bind(person, "Hellooooo");

greetPerson();
