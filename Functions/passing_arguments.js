const flight = 'LH234'; // Use '=' for variable assignment, not '-'
const Ajinkya = {
    name: 'Ajinkya',
    passport: 89283
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH2999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 89283) {
        alert('Checked In'); // Corrected the spelling of 'alert'
    } else {
        alert('Wrong Passport !');
    }
};

checkIn(flight, Ajinkya);
console.log(flight);
console.log(Ajinkya);
