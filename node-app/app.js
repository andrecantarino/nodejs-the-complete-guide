const validator = require('validator');

const { name } = require('./utils');
const { add, divide } = require('./math');

const sumResult = add(1, 2);
const divideResult = divide(4, 2);

console.log(name);
console.log(sumResult);
console.log(divideResult);
console.log(validator.isEmail('andre@gmail.com'));
console.log(validator.isURL('http://www.globo.com'));