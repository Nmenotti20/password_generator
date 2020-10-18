// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var valueLowercase = ["qwertyuiopasdfghjklzxcvbnm"]; 
  var characterBase = []; 



  


// WHEN I click the button to generate a password: THEN I am presented with a series of prompts for password criteria (PROMPT)






// WHEN prompted for password criteria: THEN I select which criteria to include in the password






// WHEN prompted for the length of the password: THEN I choose a length of at least 8 characters and no more than 128 characters
prompt("how many characters in length would you like your password to be?     (choose between 8 and 128 characters in length)");

// WHEN prompted for character types to include in the password: THEN I choose lowercase, uppercase, numeric, and/or special characters

var lowercase = confirm("do you want lowercase? "); 
confirm("do you want uppercase? ");
confirm("do you want special characters? ");
confirm("do you want numbers? ");

// WHEN I answer each prompt: THEN my input should be validated and at least one character type should be selected

if (lowercase) {
  characterBase.push(valueLowercase);
  console.log(valueLowercase);
  console.log(characterBase);  
}

else {
  return;
}


// WHEN all prompts are answered: THEN a password is generated that matches the selected criteria

// WHEN the password is generated: THEN the password is either displayed in an alert or written to the page









  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);