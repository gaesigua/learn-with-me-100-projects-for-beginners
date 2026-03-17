let email = "freecodecamp@gmail.com";

const maskEmail = (email) => {

  console.log("Entered Email: " + email);

  const emailSplit = email.split("@"); //Let's split our email into 2 parts: username and domain, where @ is our deliminter
  const username = emailSplit[0];
  console.log("Username: " + username);
  const domain = emailSplit[1];
  console.log("Domain: " + domain);

  
  
  let maskedUsername = username[0] + "*".repeat(username.length - 2) + username[username.length -1]; // Let's contatenate the first letter of the username, with the masked part (by repeating the * until we reach the character before the last one), and then add the last character

  let result = `${maskedUsername}@${domain}` //Let's concatenate the masked username and original domain
  
  
  return result;
    
}

console.log(maskEmail(email));