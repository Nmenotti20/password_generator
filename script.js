// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var valueLowercase = ["qwertyuiopasdfghjklzxcvbnm"]; 
  var valueUppercase = ["QWERTYUIOPASDFGHJKLZXCVBNM"];
  var valueCharacters = ["~!@#$%^&*()_+`-={}|[]\:;<,>.?/"];
  var valueNumbers = ["0123456789"];
  var characterBase = []; 

// WHEN I click the button to generate a password: THEN I am presented with a series of prompts for password criteria (PROMPT)

// WHEN prompted for password criteria: THEN I select which criteria to include in the password

// WHEN prompted for the length of the password: THEN I choose a length of at least 8 characters and no more than 128 characters
prompt("Enter a number between 8 and 128 for how many characters in length you want your password to be. ");

// WHEN prompted for character types to include in the password: THEN I choose lowercase, uppercase, numeric, and/or special characters

var lowercase = confirm("Click OK if you want lowercase letters in your password. "); 
var uppercase = confirm("Click OK if you want uppercase letters in your password. ");
var characters = confirm("Click OK if you want special characters in your password. ");
var numbers = confirm("Click OK if you want numbers in your password. ");

// WHEN I answer each prompt: THEN my input should be validated and at least one character type should be selected

//IF ELSE LOWERCASE
if (lowercase) {
  characterBase.push(valueLowercase);
  console.log(valueLowercase);
  console.log(characterBase);  
}

else {
  return;
}

//IF ELSE UPPERCASE
if (uppercase) {
  characterBase.push(valueUppercase);
  console.log(valueUppercase);
  console.log(characterBase);  
}

else {
  return;
}

//IF ELSE CHARACTERS
if (characters) {
  characterBase.push(valueCharacters);
  console.log(valueCharacters);
  console.log(characterBase);  
}

else {
  return;
}

//IF ELSE NUMBERS 
if (numbers) {
  characterBase.push(valueNumbers);
  console.log(valueNumbers);
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