// Global variables
// Assignment Code
var generateBtn = document.querySelector("#generate");
var hasNumbers = ""
var hasLowercase = ""
var hasUppercase = ""
var hasSpecialChars = ""
var pwLength = ""


// Functions
// Write password to the #password input
function writePassword() {
  // alert user with prompts when button is clicked
  pwLength = window.prompt("Length of password: ");
  //check is pw length is between 8 and 129 chars
  while (pwLength < 8 || pwLength > 130) {
    pwLength = window.prompt("Password must be at least 8 characters and no more than 128 characters. Please enter length of password: ");
  };
  hasNumbers = window.confirm("Does the password include numbers?");
  hasLowercase = window.confirm("Does the password include lowercase letters?");
  hasUppercase = window.confirm("Does the password include uppercase letters?");
  hasSpecialChars = window.confirm("Does the password include special characters?");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // TODO: Put password code here
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//When button is clicked, a series of prompts pop up for password criteria

console.log(hasNumbers);
console.log(hasLowercase);
console.log(hasUppercase);
console.log(hasSpecialChars);
console.log(pwLength);
