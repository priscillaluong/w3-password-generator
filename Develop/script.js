// Global variables
// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!'*+,-./:;<=>?@\^_";

var hasNumbers = "";
var hasLowercase = "";
var hasUppercase = "";
var hasSpecialChars = "";
var pwLength = "";

var randomNumbers = "";
var randomLowercase = "";
var randomUppercase = "";
var randomSpecialChars = "";

// Functions
// Write password to the #password input
function writePassword() {
  // alert user with prompts when button is clicked
  /// + behind the window.prompt changes the typeof from a string to a number
  pwLength = +window.prompt("Length of password: ");
  //check is pw length is between 8 and 129 chars
  while (pwLength < 8 || pwLength > 130) {
    pwLength = +window.prompt("Password must be at least 8 characters and no more than 128 characters. Please enter length of password: ");
    return pwLength;
  };
  //console.log(pwLength);
  hasNumbers = window.confirm("Does the password include numbers?");
  hasLowercase = window.confirm("Does the password include lowercase letters?");
  hasUppercase = window.confirm("Does the password include uppercase letters?");
  hasSpecialChars = window.confirm("Does the password include special characters?");
  
  //generatePassword(hasNumbers, hasLowercase, hasUppercase, hasSpecialChars, pwLength)

  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(number, lower, upper, special, pwLength) {
  // TODO: Put password code here
  // 1. Initialise pw variable
  // 2. Filter out user selection
  // 3. Loop over length, call generator functions
  // 4. Add final password to password variable and return
  var generatedPassword = "";
  const typesCount = number + lower + upper + special;
  //console.log(typesCount);
  //.filter method is used to filter through anything that is false
  const typesArr = [{number}, {lower}, {upper}, {special}].filter
  (
    item => Object.values(item)[0]
  );
  //console.log(typesArr);
  //if user values return false, we generate/return nothing
  if(typesCount === 0) {
    return "";
  }

  for(i = 0; i < pwLength; i += typesCount) {
    //.foreach method calls a function for each element in an array
    typesArr.forEach(type => {
      const funcName = Object.keys[type][0];
      //console.log(funcName);
      generatedPassword += randomFunc[funcName]();
    });
  }
  console.log(generatedPassword);

  const finalPassword = generatedPassword.slice(0,pwLength);
  return finalPassword;
}

randomFunc = {
  number: getRandomNumbers,
  lower: getRandomLowers,
  upper: getRandomUppers,
  special: getRandomSpecialChars
};

// Generator functions
// get random numbers from string:
function getRandomNumbers(x) {
  for (var i = 0; i <= x; i++) {
    randomNumbers += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return randomNumbers;
}

// Get random lowers:
function getRandomLowers(x) {
  for (var i = 0; i <= x; i++) {
    randomLowercase += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  }
  return randomLowercase;
}

// Get random uppers:
function getRandomUppers(x) {
  for (var i = 0; i <= x; i++) {
    randomUppercase += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  }
  return randomUppercase;
}

// Get random special chars:
function getRandomSpecialChars(x) {
  for (var i = 0; i <= x; i++) {
    randomSpecialChars += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  }
  return randomSpecialChars;
} 
// Below returns ONE random special character
//var randomSpecialChars = specialChars.charAt(Math.floor(Math.random() * specialChars.length));

//When button is clicked, a series of prompts pop up for password criteria

console.log(hasNumbers);
console.log(hasLowercase);
console.log(hasUppercase);
console.log(hasSpecialChars);
console.log(pwLength);
console.log(String.fromCharCode(97, 122));
console.log(numbers.charAt(5));
console.log(getRandomNumbers(6));
console.log(getRandomLowers(6));
console.log(getRandomUppers(6));
console.log(randomSpecialChars);
