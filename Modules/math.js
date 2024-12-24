// Modules :
// -> Modules is concept where we can access one modules(File) to another file.
// -> In Modules we can access another files method and attributes in many defferent files
// -> Its provides us reusablity and reduce line of code.


function add(value1, value2) {
    return value1 + value2;
}


function sub(value1, value2) {
    return value1 - value2;
}


function div(value1, value2) {
    return value1 / value2;
}


function multiply(value1, value2) {
    return value1 * value2;
}

// exports.modulus = (value1, value2) => value1 % value2;

module.exports = {
    add, sub, div, multiply,
};
