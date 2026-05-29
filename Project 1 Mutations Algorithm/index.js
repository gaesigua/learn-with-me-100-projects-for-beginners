// MUTATIONS ALGORITHM

/*The secret to solving this is to focus on finding a single missing letter, 
rather than trying to prove all letters are there at once.

PSEUDOCODE-ISH:

1. Normalize the Input

Computers see "H" and "h" as completely different characters. 
To ignore case, I need to standardize my data first.

Step: Grab both strings from the input array.*/

//Step: Convert both strings entirely to lowercase (or uppercase).

/*2. Inspect the Target Letters

I only care if the letters of the second string live inside the first string.

Step: Set up a loop to look at the second string, character by character, from start to finish.*/



/*3. The "Gotcha" Check (Fail-Fast Logic)Instead of checking if every letter matches, look for the very first letter that 
fails to match.

Step: Inside your loop, check if the current letter from the second string exists in the first string.
Step: If the letter is not found, stop everything immediately and return false. You already know the mutation failed.

/*4. The Default Success
What happens if your loop finishes looking at every single letter in the second string and never ran into a missing character?

Step: After the loop finishes completely, return true.*/

/*Conceptual Visual Aid

Think of it like checking a grocery list (String 2) against the items currently in your pantry (String 1):

Pantry: "alien"
List: "line"

Check 'l' in "alien"? -> Yes. Keep going.
Check 'i' in "alien"? -> Yes. Keep going.
Check 'n' in "alien"? -> Yes. Keep going.
Check 'e' in "alien"? -> Yes. Keep going.

End of list reached without failure! -> Return True.*/

const mutation = (array) =>{
	
const firstString = array[0].toLowerCase();
const secondString = array[1].toLowerCase();

for(let i=0; i<secondString.length; i++){

	if(!firstString.includes(secondString[i])){
    return false;
    }
    }
    return true;
    
}

const comparison1 = mutation(["hello", "hey"]);
console.log(comparison1);

const comparison2 = mutation(["hello", "Hello"]);
console.log(comparison2);

const comparison3 = mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
console.log(comparison3); //should return true

const comparison4 = mutation(["Mary", "Army"]);
console.log(comparison4); //should return true.

const comparison5 = mutation(["Mary", "Aarmy"]);
console.log(comparison5);  //should return true.

const comparison6 = mutation(["Alien", "line"]);
console.log(comparison6); //should return true.

const comparison7 = mutation(["floor", "for"]);
console.log(comparison7); //should return true.

const comparison8 = mutation(["hello", "neo"]);
console.log(comparison8); //should return false.

const comparison9 = mutation(["voodoo", "no"]);
console.log(comparison9); //should return false.

const comparison10 = mutation(["ate", "date"]);
console.log(comparison10); //should return false.

const comparison11 = mutation(["Tiger", "Zebra"]);
console.log(comparison11); //should return false.

const comparison12 = mutation(["Noel", "Ole"]);
console.log(comparison12); //should return true.
