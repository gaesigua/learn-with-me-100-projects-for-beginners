const temperature = 0;

const convertCtoF = (temperature) => {
  let fahrenheit = temperature * (9/5) + 32;
  return fahrenheit;
}

console.log(convertCtoF(30));