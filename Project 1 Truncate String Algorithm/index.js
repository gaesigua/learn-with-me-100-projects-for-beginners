const truncateString = (stringArg, numArg) => {
  if(stringArg.length > numArg){
    
     return stringArg.slice(0, numArg) + "...";
  }else {
    return stringArg;
  }

  return stringArg

}


console.log(truncateString("A-tisket a-taskedt A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11, 8));

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket"));

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));

console.log(truncateString("A-", 1));

console.log(truncateString("Absolutely Longer", 2));

