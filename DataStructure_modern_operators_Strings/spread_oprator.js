const hero = {
    firstName: 'Ranbir',
    lastName: 'Kapoor',
    age: 40,
    city: 'Mumbai',
  };

  const updatehero ={ ...hero, movies: 'Rockstar & Animal'}

  console.log(updatehero);