function convertTemperature(celsius: number): number[] {
  const fahrenheit = celsius * 1.8 + 32;
  const kelvin = celsius + 273.15;
  return [kelvin, fahrenheit];
};