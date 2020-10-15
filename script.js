// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var valueLowercase = ["qwertyuiopasdfghjklzxcvbnm"]; 
  var characterBase = []; 



//DOM ELEMENTS
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// GENERATE EVENT LISTEN
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;


  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length);
});


// GENERATE PASSWORD FUNCTION
function generatePassword(lower, upper, number, symbol, lenght){
    // 1. Init pw var
    // 2. Filter out unchecked types
    // 3. Loop over lenght call generator function for each type
    // 4. Add final pw to the pw var and return


    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    // console.log('typesCount: ', typesCount);

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter 
    (
      item => Object.values(item)[0]
      );

    // console.log('typesArr: ', typesArr);

    if (typesCount ===0) {
      return '';
    }
    for(let i =0; i < lenght; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];

        //consol.log('funcName: ', funName);

        generatedPassword += randomFunc[funcName]();
      });

    }

    const finalPassword = generatedPassword.slice(0, lenght);

    return finalPassword;
}





// WHEN I click the button to generate a password: THEN I am presented with a series of prompts for password criteria (PROMPT)


//GENERATOR FUNCTIONS https://www.net-comber.com/charset.html
//FUNCTION GENERATES RANDOM LOWERCASE LETTER
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//FUNCTION GENERATES RANDOM UPPERCASE LETTER
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//FUNCTION GENERATES RANDOM NUMBER
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//FUNCTION GENERATES RANDOM sYMBOL
function getRandomSymbol() {
  const symbols = '~!@#$%^&*())_+`-={}|:<>?[]\;,./';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//LOGS THE RANDOMLY GENERATED FUNCTION RESULTS IN THE CONSOLE LOG
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());


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




