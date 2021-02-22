// Assignment code here

var hasUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var hasLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var hasSpecial = [' ', '!', '\"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\]', '^', '_', '`', '{', '|', '}', '~'];
var hasNumer = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var passwordArray = []
var holdingArray = []

// figure out what kinds of characters they want in password 
var passwordKind = function() {
  var hasUpperConfirm = window.confirm("Would you like to use upper case characters?");
  if (hasUpperConfirm) { 
    window.alert("Your password will include upper case letters.");
  }
  else {
    window.alert("Your password will not include upper case characters.");
  }
  var hasLowerConfirm = window.confirm("Would you like to use lower case characters?");
  if (hasLowerConfirm) {
    window.alert("Your password will include lower case letters.");
  }
  else {
    window.alert("Your password will not include lower case characters.");
  }
  var hasNumerConfirm = window.confirm("Would you like to use numerals?");
  if (hasNumerConfirm) {
    window.alert("Your password will include numerals.");
  }
  else {
    window.alert("Your password will not include numerals.");
  }
  var hasSpecialConfirm = window.confirm("Would you like to use special characters?");
  if (hasSpecialConfirm) {
    window.alert("Your password will include special characters.");
  }
  else {
      window.alert("Your password will not include special characters.");
    }
    if (hasUpperConfirm) {
      (passwordArray) = (hasUpper);
    } else (passwordArray) = (passwordArray);
    
    if (hasLowerConfirm) {
      (passwordArray) = passwordArray.concat(hasLower);
    } else (userChoice) = (userChoice);
    
    if (hasNumerConfirm) {
      (passwordArray) = passwordArray.concat(hasNumer);
    } else (passwordArray) = (passwordArray);
    
    if (hasSpecialConfirm) {
      (passwordArray) = passwordArray.concat(hasSpecial);
    } else (passwordArray) = (passwordArray);
    
    for (var i = 0; i < passwordNum; i++) {
      password = passwordArray[Math.floor(Math.random() * passwordArray.length)];
      holdingArray.push(password);
    };
    console.log(holdingArray);
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getPassNum();
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }

  var getPassNum =function() {
    passwordNum = prompt("How many characters would you like your password to be (8-128)?");
    if (passwordNum >= 8 && passwordNum <= 128) {
      console.log("Your password will be" + passwordNum + "characters long");
      passwordKind();
    }
    else {
      window.alert("You must choose a number between 8 and 128.");
      getPassNum();
    }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
