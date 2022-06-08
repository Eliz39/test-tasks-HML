export function validateInput(stringToCheck) {
    const validExp = new RegExp(/^([0-9][ABCEHJKLMPSTUZ])\w\s\d{4}/, "g");
    return validExp.test(stringToCheck);
    validExp.lastIndex = 0;
}

// module.exports = validateInput
