const celsiusTemperatures = [0, 10, 20, 30, 40];

const fahrenheitTemperatures = celsiusTemperatures.map(celsius => {
  const fahrenheit = (celsius * 9/5) + 32;
  console.log(`Converted ${celsius}°C to ${fahrenheit}°F`);
  return fahrenheit;
});

console.log(fahrenheitTemperatures);
