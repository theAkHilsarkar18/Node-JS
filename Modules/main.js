const math = require("./math");
const { add, sub } = require("./math"); // destruct value of objects in defferent objects


console.log(add(100, 200));
console.log(sub(100, 200));

console.log(math.add(10, 20));
console.log(math.sub(10, 20));
console.log(math.div(20, 10));
console.log(math.multiply(20, 10));