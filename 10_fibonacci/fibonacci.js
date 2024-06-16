const fibonacci = function(num) {
    let arrayStart = [0,1];
    
    if (num < 0) return "OOPS"
    if (num === 0) return 0

    for (i = 2; i <= num; i++) {
        arrayStart[i] = arrayStart[i-1] + arrayStart[i-2]
    }
    return arrayStart.at(-1)
};

// Do not edit below this line
module.exports = fibonacci;
