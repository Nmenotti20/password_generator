// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  const password = [];
  let chosenCharacters = [];
    

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var valueLowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]; 
  var valueUppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  var valueCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "`", "-", "=", "{", "}", "|", "[", "]", ":", ";", "<", ">", "?", "/"];
  var valueNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterBase = []; 
  var charLength = parseInt(prompt("Enter a number between 8 and 128 for how many characters in length you want your password to be. "));

  while(charLength <8 || charLength >128 || isNaN(charLength)) {
    alert("Error! You must enter a number between 8 and 128. Please try again. ");
    charLength = parseInt(prompt("Enter a number between 8 and 128 for how many characters in length you want your password to be. "))
  };

// WHEN I click the button to generate a password: THEN I am presented with a series of prompts for password criteria (PROMPT)

// WHEN prompted for password criteria: THEN I select which criteria to include in the password

// WHEN prompted for the length of the password: THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password: THEN I choose lowercase, uppercase, numeric, and/or special characters

var lowercase = confirm("Click OK if you want lowercase letters in your password. "); 
var uppercase = confirm("Click OK if you want uppercase letters in your password. ");
var characters = confirm("Click OK if you want special characters in your password. ");
var numbers = confirm("Click OK if you want numbers in your password. ");





// WHEN I answer each prompt: THEN my input should be validated and at least one character type should be selected

//IF ELSE LOWERCASE
if (lowercase) {
  chosenCharacters = chosenCharacters.concat(lowercase);
}


//IF ELSE UPPERCASE
if (uppercase) {
  chosenCharacters = chosenCharacters.concat(uppercase);
}

//IF ELSE CHARACTERS
if (characters) {
  chosenCharacters = chosenCharacters.concat(characters);
}

//IF ELSE NUMBERS 
if (numbers) {
  chosenCharacters = chosenCharacters.concat(numbers);
}
console.log(chosenCharacters);


//LOOP THROUGH NEW ARRAY WITH chosenCharacters and picks 10 elements randomly
for (i=0; i<charLength; i++) {
  var randomChar = chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
  password.push(randomChar);
};

//UPDATE NEW PASSWORD TO TEXT BOX ON HTML
document.querySelector("#password").value = password.join("");




// WHEN all prompts are answered: THEN a password is generated that matches the selected criteria

// WHEN the password is generated: THEN the password is either displayed in an alert or written to the page
passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);