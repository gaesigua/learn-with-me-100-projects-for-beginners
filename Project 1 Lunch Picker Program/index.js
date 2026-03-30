let lunches = [];

const addLunchToEnd = (arr, str) => {
  
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  
  return arr;

}

addLunchToEnd(lunches, "Tacos");
addLunchToEnd(["Pizza", "Tacos"], "Burger");

const addLunchToStart = (arr, str) => {

  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);

  return arr;

}

addLunchToStart(lunches, "Sushi");
addLunchToStart(["Burder", "Sushi"], "Pizza");

const removeLastLunch = (arr) => {

  if(arr.length == 0){
    console.log("No lunches to remove.");
  }
  
  else {

    let lastFruit = arr.pop();


    
    console.log(`${lastFruit} removed from the end of the lunch menu.`);
  }
  
  return arr;
}

console.log(removeLastLunch(["Stew", "Soup", "Toast"]));

const removeFirstLunch = (arr) => {

  let firstFruit = arr.shift();

  if (arr.length == 0){
    console.log("No lunches to remove.");
  }

  else {
    console.log(`${firstFruit} removed from the start of the lunch menu.`);
  }

  return arr;

}

removeFirstLunch(["Salad", "Eggs", "Cheese"]);
removeFirstLunch(["Sushi", "Pizza", "Burger"]);

const getRandomLunch = (arr) => {

  if (arr.length == 0){
    console.log("No lunches available.");
  }

  else {

    let randomFruit = arr[Math.floor(Math.random() * arr.length)];

    console.log(`Randomly selected lunch: ${randomFruit}`);
  }

  return arr;

}

getRandomLunch(lunches);

const showLunchMenu = (arr) => {

  // let [lunch1, lunch2, lunch3, ...rest]= arr;

  if(arr.length === 0) {
    console.log("The menu is empty.");
  }

  else {

    // arr.forEach((fruit, index) => { console.log(`Index ${index}: ${fruit}`); });

      // console.log(`Menu items: ${lunch1}, ${lunch2}, ${lunch3}, ${rest}`);

      console.log(`Menu items: ${arr.join(', ')}`);

  }

}

showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);