// Initialize variables
//generates random figures using charCode  http://stevehardie.com/2009/09/character-code-list-char-code/ 
var hasLower = String.fromCharCode(Math.floor(Math.random() * 26 ) + 97);
var hasUpper = String.fromCharCode(Math.floor(Math.random() * 26 ) + 65);
// could of used charCode
var hasNumbers = "0123456789";
var hasSymbols = "!#$%&*+:?/";
var allCharacters = "";
var Arrayfunc = "";
var randomNumber = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// function to generate password
var generatePassword = function () {
  var hasLegnth = window.prompt("Choice between 8 and 128 for your password?");
  // to make sure password is within limit
  if (hasLegnth > 7 && hasLegnth <= 128) {
    alert("Password Legnth:  " + hasLegnth);
  }
  else { 
  generatePassword();
  }

  // Gives Users promts for Password info (using else for better reading)
  var getLower = window.confirm("Would you like your Password to have Lower case letters?");
  if (getLower) {
    allCharacters += hasLower;
  }
  else {
  
  };

  var getUpper = window.confirm("Would you like your Password to have Upper case letters?");
  if (getUpper) {
    allCharacters += hasUpper;
  }
  else {
  }

  var getNumbers = window.confirm("Would you like your Password to have Numbers?");
  if (getNumbers) {
    allCharacters += hasNumbers;
  }
  else {

  }

  var getSymbols = window.confirm("Would you like your Password to have Symbols?");
  if (getSymbols) {
    allCharacters += hasSymbols;
  }
  else {
 
  }

  if (allCharacters) {
    alert("Password Incoming . . .");
  }
  else {
    alert("Error");
  }
  
  var temp = new Array();
    // randomizes characters added to password
    for (let i = 0; i < hasLegnth; i++) {
      randomNumber = Math.floor(Math.random() * allCharacters.length);
      numberArray = allCharacters[randomNumber];
      temp.push(numberArray);
    }

    // returns password to user
    password = temp.join( " " );
    return password; 
}
// add eventListener to generateBtn
generateBtn.addEventListener("click", writePassword);
