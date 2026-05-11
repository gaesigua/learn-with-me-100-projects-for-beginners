const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

const recordCopy = {...recordCollection};

const updateRecords = (records, id, prop, value) => {

  if(value === ""){
    delete records[id][prop];
  }
  else if(prop !== "tracks" && value !== ""){
    records[id][prop] = value;

  }
  
  else if(prop === "tracks" && value !== "" && !Object.hasOwn(records[id], "tracks")){

    records[id][prop] = [value];
}
  else if(prop === "tracks" && value !== ""){

    records[id][prop].push(value);
 }

  return records;
}

console.log(updateRecords(recordCopy, 5439, "artist", "ABBA"));

console.log("----------------------------------------------");

console.log(updateRecords(recordCopy, 5439, "tracks", "Take a Chance on Me"));

console.log("----------------------------------------------");

console.log(updateRecords(recordCopy, 2548, "artist", ""));

console.log("----------------------------------------------");

console.log(updateRecords(recordCopy, 1245, "tracks", "Addicted to Love"));

console.log("----------------------------------------------");

console.log(updateRecords(recordCopy, 2468, "tracks", "Free"));




