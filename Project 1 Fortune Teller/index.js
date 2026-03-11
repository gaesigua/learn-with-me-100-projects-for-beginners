const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

const maximum = 6;
const minimum = 1;

const randomNumber = Math.round(Math.random() * (maximum - minimum) + minimum);

let selectedFortune;

if(randomNumber == 1){
  selectedFortune = fortune1;
  console.log(selectedFortune);
}

else if (randomNumber == 2){
  selectedFortune = fortune2;
  console.log(selectedFortune);
}
else if (randomNumber == 3){
  selectedFortune = fortune3;
  console.log(selectedFortune);
}

else if (randomNumber == 4){
  selectedFortune = fortune4;
  console.log(selectedFortune);

}

else {
  selectedFortune = fortune5;
  console.log(selectedFortune);

}

