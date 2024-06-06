const repeatString = function(text, num) {
    if (num < 0) {
        return "ERROR"
    } else {
        let string = ""
        for (let i = 1; i <= num; i++) {
            string += text
        }
        return string
}
};

// Do not edit below this line
module.exports = repeatString;
