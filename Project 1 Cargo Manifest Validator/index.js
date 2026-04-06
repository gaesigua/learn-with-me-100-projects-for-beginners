// Step 1

const normalizeUnits = (manifest) => {
  let copy = {...manifest};

  if(manifest.unit !== "kg"){
    copy.weight = copy.weight * 0.45;
    copy.unit = "kg";
    return copy;
  }
  return copy;
}

// Step 5
const validateManifest = (manifest) => {

  let errors = {};
  let copy = {...manifest};
  

  if(!Object.hasOwn(manifest, "containerId")){
    errors.containerId = "Missing";
  } 
  
  else if(manifest.containerId === "" ||
    manifest.containerId === undefined ||
    manifest.containerId <= 0 ||
    typeof manifest.containerId !== "number"||
    !Number.isInteger(manifest.containerId)){

    errors.containerId = "Invalid";
  }
  
  if(!Object.hasOwn(manifest, "destination")){

      errors.destination = "Missing";
      
  }
  
  else if(manifest.destination === undefined ||
          Number.isInteger(manifest.destination) ||
          typeof manifest.destination !== "string" ||
          (manifest.destination).trim() === ""){
       
       errors.destination = "Invalid";
  }

  if(!Object.hasOwn(manifest, "weight")){
      
      errors.weight = "Missing";
      
  }
  
  else if(manifest.weight === "" ||
    manifest.weight === undefined ||
    typeof manifest.weight !== "number" ||
    manifest.weight <= 0 ||
    Number.isNaN(manifest.weight)){
              
      errors.weight = "Invalid";
       
  }
   
  if(!Object.hasOwn(manifest, "unit")){
    
    errors.unit = "Missing";
  }
  else if(manifest.unit !== "lb"){
    if(manifest.unit !== "kg"){
      errors.unit = "Invalid";
    }

  }
       
  /* else if(manifest.unit === "" ||
    typeof manifest.unit !== "string" ||
    manifest.unit === undefined){

       errors.unit = "Invalid";
       
  }*/
   
  if(!Object.hasOwn(manifest, "hazmat")){

      errors.hazmat = "Missing";

  }
      
  else if(manifest.hazmat === "" ||
     manifest.hazmat === undefined ||
     typeof manifest.hazmat !== "boolean"){

       errors.hazmat = "Invalid";
       
  }

  return errors;

}

const processManifest = (manifest) => {

  // Let's first call our 2 functions

  const normalizeManifest = normalizeUnits(manifest);

  const validatedManifest = validateManifest(manifest);

  // To check if it is valid, the length of the keys in the returned error object must be zero

  if(Object.keys(validatedManifest).length === 0){

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizeManifest.weight} kg`);

  }
  else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validatedManifest);

  }

}

console.log ("== Step 2 ==");

console.log(normalizeUnits({
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
}));

console.log ("== Step 6 ==");

console.log(validateManifest({ 
  containerId: 1, 
  destination: "Santa Cruz", 
  weight: 304, 
  unit: "kg", 
  hazmat: false }));

console.log("== Step 8 ==");

console.log(validateManifest({}));

console.log("== Step 9 ==");

console.log(validateManifest(validateManifest({ 
  containerId: null, 
  destination: "Santa Cruz", 
  weight: 304, 
  unit: "kg", 
  hazmat: false })));

console.log("== Step 10 ==");

console.log(validateManifest({ 
  containerId: 0, 
  destination: 405, 
  weight: -84, 
  unit: "pounds", 
  hazmat: "no" }));

console.log("== Step 11 == ");

console.log(validateManifest({ containerId: -2 }));

console.log("== Step 12 == ");

console.log(validateManifest({ containerId: 3.50 }));

console.log("== Step 13 == ");

console.log(validateManifest({destination: "  " }));

console.log("== Step 14 == ");

console.log(validateManifest({ weight: NaN }));

console.log("== Step 17 == ");

console.log(processManifest({ 
  containerId: 55, 
  destination: "Carmel", 
  weight: 400, 
  unit: "lb", 
  hazmat: false }));



