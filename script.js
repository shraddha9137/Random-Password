const passwordBox = document.getElementById("Password"); 
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*(){}_+?><:";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    
   
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

   
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

   
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(passwordBox.value) 
        .then(() => alert("Password copied to clipboard!"))
        .catch(err => console.error("Failed to copy password", err));
}
