const findLongestWordLength = (sentence) => {

  let words = sentence.split(" ");
  let longestWord = "";

  for(let word of words){
    if(word.length > longestWord.length){
      longestWord = word;
    }
  }
  return longestWord.length;
}

const longestWord = findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(longestWord);