const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH456", 2, 900);
createBooking("LH789", 3, 999);
