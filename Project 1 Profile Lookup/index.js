let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(firstName, property){

  const contactsCopy = [...contacts];

  for(let i=0; i < contactsCopy.length; i++){

    if(contactsCopy[i].firstName === firstName){
      if(contactsCopy[i].hasOwnProperty(property)){
        return contactsCopy[i][property];
      }
      else{
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// CLEANER FUNCTION

// function lookUpProfile(name, property) {
//   // contact automatically represents the current object in the loop
//   for (const contact of contacts) {
    
//     if (contact.firstName === name) {
//       if (contact.hasOwnProperty(property)) {
//         return contact[property];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }


console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));

