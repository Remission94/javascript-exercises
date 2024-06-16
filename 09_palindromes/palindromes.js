const ALPHA = "qwertzuiopasdfghjklyxcvbnm1234567890"

const palindromes = function (word) {
    let clearString = word
    .toLowerCase()
    .split("")
    .filter((letter) => ALPHA.includes(letter))
    .join("")

    let reversedString = clearString.split("").reverse().join("")
    
    return reversedString === clearString
};

// Do not edit below this line
module.exports = palindromes;
