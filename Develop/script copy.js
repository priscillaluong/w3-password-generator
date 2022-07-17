// Assignment Code

// Global Variables
var generateBtn = document.querySelector("#generate");
var isNumber = false;
var isLowercaseLetters = false;

// Functions
// Write password to the #password input
function writePassword() {
  isNumber = confirm('Is number password?');
  isLowercaseLetters = confirm('Is lowercase letter password?');

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // TODO: Put password code here
  var passwordResult = '';

  if (isNumber) {
    console.log('This passsword has numbers:', isNumber);
    passwordResult = Math.random().toString(10).slice(-8);
  }

  if (isLowercaseLetters) {
    // For loop from user input?
    passwordResult += getRandomLower();
    passwordResult += getRandomLower();
    passwordResult += getRandomLower();
    passwordResult += getRandomLower();
    passwordResult += getRandomLower();
    passwordResult += getRandomLower();
  }

  if (isLowercaseLetters && isNumber) {
    passwordResult = Math.random().toString(36).slice(-8);
  }
  
  return passwordResult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//When button is clicked, a series of prompts pop up for password criteria



//prompt for the length of pw, 
//at least 8 characters and no more than 128 characters

//ask for character types to include in pw 
//confirm whether to include lowercase, uppercase, numeric, and/or special characters

//users input is validated and at least one character type should be selected 

//when all prompts answered, the pw is generated

// pw is displayed on page

http://www.net-comber.com.charset.html


//Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

// console.log(getRandomUpper());

