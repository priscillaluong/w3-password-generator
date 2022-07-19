// Global variables
var generateBtn = document.querySelector("#generate");

const numbers = "0123456789";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChars = "!'*+,-./:;<=>?@\^_";

var hasNumbers = "";
var hasLowercase = "";
var hasUppercase = "";
var hasSpecialChars = "";
var pwLength = "";

var randomNumbers = "";
var randomLowercase = "";
var randomUppercase = "";
var randomSpecialChars = "";

var possibleChars = "";

// Functions
// Write password to the #password input
function writePassword() {
  // alert user with prompts when button is clicked
  /// + behind the window.prompt changes the typeof from a string to a number
  pwLength = +window.prompt("Length of password: ");
  //check is pw length is between 8 and 129 chars
  while (pwLength < 8 || pwLength > 130) {
    pwLength = +window.prompt("Password must be at least 8 characters and no more than 128 characters. Please enter length of password: ");
    //return pwLength;
  };
  //console.log(pwLength);
  hasNumbers = window.confirm("Does the password include numbers?");
  hasLowercase = window.confirm("Does the password include lowercase letters?");
  hasUppercase = window.confirm("Does the password include uppercase letters?");
  hasSpecialChars = window.confirm("Does the password include special characters?");
  
  var passwordText = document.querySelector("#password");
  //passwordText.value = password;

  passwordText.value = generatePassword();

}

//GENERATE PASSWORD FUNCTION
function generatePassword () {
  let password = "";
  console.log("I am here");
  if (hasNumbers === false && hasLowercase === false && hasUppercase === false && hasSpecialChars === false) {
    //alert("You need to select at least one character type. Try again!");
    return "You need to select at least one character type. Try again!";
  } 

  if (hasNumbers) {
    //possibleChars += numbers;
    possibleChars = possibleChars + numbers;
  }
  console.log("possibleChars = ", possibleChars);

  if (hasLowercase) {
    //possibleChars += numbers;
    possibleChars = possibleChars + lowercase;
  }
  console.log("possibleChars = ", possibleChars);

  if (hasUppercase) {
    //possibleChars += numbers;
    possibleChars = possibleChars + uppercase;
  }
  console.log("possibleChars = ", possibleChars);

  if (hasSpecialChars) {
    //possibleChars += numbers;
    possibleChars = possibleChars + specialChars;
  }
  console.log("possibleChars = ", possibleChars);

  for (var i = 0; i < pwLength; i++) {
    password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
/*   for (var i = 0; i < pwLength; i++) {
  var randomIndex = Math.floor(Math.random() * possibleChars.length);
  console.log("Random index = ", randomIndex);
  console.log("Random Character[", i, "] = ", possibleChars[randomIndex]);
  password += possibleChars[randomIndex];
  console.log("password = ", password);
} */
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);