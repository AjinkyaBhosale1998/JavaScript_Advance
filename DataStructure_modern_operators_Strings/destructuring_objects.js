const person = {
    firstName: 'Ranbir',
    lastName: 'Kapoor',
    age: 40,
    city: 'Mumbai',
  };
  
  const { firstName, lastName, age, city } = person;
  
  console.log('First Name:', firstName);       //  ranbir
  console.log('Last Name:', lastName);          // kapoor
  console.log('Age:', age);                     // 40
  console.log('City:', city);                   // mumbai
  console.log(person.city);
  