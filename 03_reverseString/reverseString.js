const reverseString = function(text) {
    const textLength = text.length;
    let reversedText = "";
    let textToArray = text.split("");

        for (i = 0; i < textLength; i++) {              
            let lastChar = textToArray.pop();
            reversedText += lastChar; 
    }
    return reversedText
};

// Do not edit below this line
module.exports = reverseString;
