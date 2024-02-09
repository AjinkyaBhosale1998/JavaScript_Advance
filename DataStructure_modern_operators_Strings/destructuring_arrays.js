const colors = ['Red', 'Green', 'Blue'];

const [firstColor, secondColor, thirdColor] = colors;

console.log('First Color:', firstColor);   //red

console.log('Second Color:', secondColor); //green
console.log('Third Color:', thirdColor);    //blue


// ---------------------

const countries = ['USA', 'Canada', 'Germany', 'France', 'Japan', 'Australia', 'India', 'Brazil'];

const [firstCountry, secondCountry, , , fifthCountry, ...restCountries] = countries;

// Logging the extracted values
console.log('First Country:', firstCountry);     //usa 
console.log('Second Country:', secondCountry);    //canda
console.log('Fifth Country:', fifthCountry);      ///japan
console.log('Rest of the Countries:', restCountries);    //aus, india, brazil 
