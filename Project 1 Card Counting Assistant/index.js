let count = 0;

const cardCounter = (card) => {

  if(card >= 2 && card <= 6){
      count++;

      }

      else if(card >= 7 && card <= 9){
        count = count;

      }

      else if(card === 10 || 
              card === "J" || 
              card === "Q" || 
              card === "K" || 
              card === "A"){

        count--;
      }

      if(count > 0){
        return `${count} Bet`;

      }else if(count <= 0){
        return  `${count} Hold`;
      }


}

let card2 = cardCounter(2);
let card3 = cardCounter(3);
let card4 = cardCounter(4);
let card5 = cardCounter(5);
console.log(cardCounter(6));

