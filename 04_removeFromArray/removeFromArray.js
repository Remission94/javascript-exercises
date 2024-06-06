const removeFromArray = function(arrayInput, ...toRemove) {
    const toRemoveArray = Array.from(toRemove);

    for (i=0; i < toRemoveArray.length; i++) {
        for (n=0; n < arrayInput.length; n++) {
            for (e=0; e < arrayInput.length; e++) {
                if (arrayInput[n] === toRemoveArray[i]) {
                arrayInput.splice(n,1)
            }
        }
        }
    }

    return arrayInput
};

// Do not edit below this line
module.exports = removeFromArray;
