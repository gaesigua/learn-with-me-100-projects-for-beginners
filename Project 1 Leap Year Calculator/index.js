let year = 1900;
const isLeapYear = (number) => {

  
  if(number % 4 === 0 && number % 400 === 0 || number % 100 !== 0 ){
    return `${number} is a leap year.`
  }
  else {
    return `${number} is not a leap year.`;
  }
  
}

let result = isLeapYear(year);
console.log(result);
