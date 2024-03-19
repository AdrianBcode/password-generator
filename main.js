function generatePassword() {
    const passwordLength = parseInt(document.getElementById("passwordLength").value);
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    // We define character sets
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = lowercaseChars.toUpperCase();
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";

    let characterSet = "";

    if (includeLowercase) {
        characterSet += lowercaseChars;
    }
    if (includeUppercase) {
        characterSet += uppercaseChars;
    }
    if (includeNumbers) {
        characterSet += numbers;
    }
    if (includeSymbols) {
        characterSet += symbols;
    }

    // We check if at least one character set is selected
    if (characterSet.length === 0) {
        alert("Please select at least one character set.");
        return;
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    document.getElementById("generatePassword").textContent = password;
}