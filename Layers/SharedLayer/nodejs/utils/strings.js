function intoFloat() {
    let numberString = `${this}`.replace(/[^0-9.-]+/g, '');
    numberString = parseFloat(numberString).toFixed(2);
    numberString = parseFloat(numberString);
    return numberString;
}

function withCommas(fixed = 2) {
    var parts = parseFloat(this).toFixed(fixed).toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}

function stringToNumber() {
    // Remove non-numeric characters except for the decimal point
    const inputValue = `${this}`;
    const stringWithNumbers = inputValue.replace(/[^\d.]/g, '');

    // Parse the string as a float
    const parsedFloat = parseFloat(stringWithNumbers);
    if (Number.isNaN(parsedFloat)) return 0;
    // Return the parsed float
    return parsedFloat;
}

function stringToInt() {
    // Remove non-numeric characters except for the decimal point
    const inputValue = `${this}`;
    const stringWithNumbers = inputValue.replace(/[^\d.]/g, '');

    // Parse the string as a float
    const parsedInt = parseInt(stringWithNumbers);
    if (Number.isNaN(parsedInt)) return 0;
    // Return the parsed float
    return parsedInt;
}

Number.prototype.stringToNumber = stringToNumber;
String.prototype.stringToNumber = stringToNumber;
Number.prototype.stringToInt = stringToInt;
String.prototype.stringToInt = stringToInt;
Number.prototype.float = intoFloat;
String.prototype.float = intoFloat;
String.prototype.numberWithCommas = withCommas;
Number.prototype.numberWithCommas = withCommas;
