const chunkArrayInGroups = (arr, num) => {

  let container = [];

  for(let i=0; i < arr.length; i+num){

    const smallerChunk = arr.slice(i, i+=num);
    container.push(smallerChunk);
  }
  return container;

}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));